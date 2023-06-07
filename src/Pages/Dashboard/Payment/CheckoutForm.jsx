import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import { useState } from "react";
import useAxiosSecure from "../../../Hooks/useaxiosSecure";
import useAuth from "../../../Hooks/useAuth";

const CheckoutForm = ({ price }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const [axiosSecure] = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");
  const { user } = useAuth();
  const [processing, setProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState('')


  // use axiosSecure 
  useEffect(() => {
    axiosSecure.post('/create-payment-intent', { price })
      .then(res => {
        console.log(res.data.clientSecret)
        setClientSecret(res.data.clientSecret)
      })
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('[error]', error);
      setError(error.message);
    } else {
      // console.log('[PaymentMethod]', paymentMethod);
      setError('')
    }

    setProcessing(true);
   const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          email: user?.email || 'anonymous',
          name: user?.displayName || 'anonymous'
        },
      },
    })

    if(confirmError) {
      setError(confirmError.message);
    }
    console.log('paymentIntent', paymentIntent)

    setProcessing(false);
    if(paymentIntent.status === 'succeeded'){
      // const transactionId = paymentIntent.id;
      setPaymentSuccess(paymentIntent.id);
    }
  };
  return (
    <>
      <form className="w-2/3 mx-auto my-16" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className="btn btn-info mt-8" type="submit" disabled={!stripe || !clientSecret || processing}>
          Pay
        </button>
      </form>
      {error && <p className="text-red-500">{error}</p>}
      {paymentSuccess && <p className="text-green-500">Payment Success <br/>   transaction ID : {paymentSuccess} </p>}
    </>
  );
};

export default CheckoutForm;