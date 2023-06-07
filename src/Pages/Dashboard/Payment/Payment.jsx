import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import SectionTitle from "../../../comonents/SectionTitle/SectionTitle";
import useCart from "../../../Hooks/useCart";

const stripePromise = loadStripe(import.meta.env.VITE_stripe_payment_method)
const Payment = () => {
    const [cart] = useCart();
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2));
    return (
        <div className="w-full p-5">
            <SectionTitle
            subHeading={'payment process'}
            heading={'PAYMENT'}
            ></SectionTitle>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm price={price}></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;