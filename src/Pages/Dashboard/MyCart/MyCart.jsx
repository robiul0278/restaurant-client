import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { RiDeleteBinLine } from 'react-icons/ri';
import useCart from "../../../Hooks/useCart";
import Swal from "sweetalert2";

const MyCart = () => {
    const [cart, refetch] = useCart()
    console.log(cart)
    const Price = cart.reduce((sum, item) => item.price + sum, 0)

    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${item._id}`, {
                    method: "DELETE",
                })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount > 0) {
                        refetch();
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                          )
                    }
                })
            }
          })
    }
    return (
        <div className="w-full p-5">
            <Helmet>
                <title>Restaurant | My Cart</title>
            </Helmet>
            <div className="overflow-x-auto w-full border">
                <div className="flex justify-evenly uppercase font-semibold items-center h-20">
                    <h1 className="text-2xl">Total orders: {cart?.length}</h1>
                    <h1 className="text-2xl">total price: ${Price}</h1>
                    <Link to='/dashboard/payment' className="btn btn-warning btn-sm">PAY</Link>
                </div>
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Count</th>
                            <th>ITEM IMAGE</th>
                            <th>ITEM NAME</th>
                            <th>PRICE</th>
                            <th>ACTION</th>
                            <th></th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => <tr
                            key={item._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td className="">${item.price}</td>
                                <td>
                                    <button onClick={() => handleDelete(item)} className="btn text-white text-xl btn-error btn-square"><RiDeleteBinLine /></button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCart;