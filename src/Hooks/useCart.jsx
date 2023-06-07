import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useaxiosSecure';
import useAuth from './useAuth';

const useCart = () => {
    const {user, loading} = useAuth();
    // console.log(user)
    // const token = localStorage.getItem("access-token");
    const [axiosSecure] = useAxiosSecure()

    const {  refetch, data: cart = []} = useQuery({
        queryKey: ['carts', user?.email],

        enabled: !loading,
        queryFn: async () => {

            const res = await axiosSecure(`/carts?email=${user?.email}`)
            // console.log('res from axios', res)
            return res.data;
        },
      })
      return [ cart, refetch]
};

export default useCart;



        // queryFn: async () => {
        //     const response = await fetch(`http://localhost:5000/carts?email=${user?.email}`,{
        //         headers: {
        //             Authorization: `bearer ${token}`,
        //         }
        //     })
        //     return response.json();
        // },
        // enabled: !!user?.email && !!localStorage.getItem('access-token'),