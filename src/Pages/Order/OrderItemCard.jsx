import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../Hooks/useCart";

const OrderItemCard = ({ item }) => {
  const { user } = useContext(AuthContext);
  const [, refetch] = useCart();
  const { image, price, name, recipe , _id} = item;
  const navigate = useNavigate()
  const location =useLocation()

  const handleAddToCart = (item) => {
    console.log(item);
    const cartItem = {itemId: _id, name, image, price, email: user?.email}
    if(user){
      fetch('http://localhost:5000/carts', {
        method: "POST",
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(cartItem)
      })
      .then(res => res.json())
      .then(data => {
        if(data.insertedId){
          refetch();
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Food added your cart!',
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
    }
    else{
      Swal.fire({
        title: 'Please Login First!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Login!'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', {state: {from: location}})
        }
      })
    }
  };

  return (
    <div className="">
      <div className="card card-compact w-full bg-base-100">
        <figure>
          <img className="object-cover w-full h-72" src={image} alt="Shoes" />
        </figure>
        <p className="bg-black text-white absolute right-0 mr-3 mt-3 px-3 py-1 rounded">
          ${price}
        </p>
        <div className="flex flex-col text-center p-4 items-center bg-slate-100">
          <h2 className="card-title">{name}</h2>
          <p>{recipe.slice(0, 60)}</p>
          <div className="">
            <button
              onClick={() => handleAddToCart(item)}
              className="border-b-4 border-0 btn font-bold btn-outline p-2"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderItemCard;
