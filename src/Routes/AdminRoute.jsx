import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useAdmin from "../Hooks/useAdmin";


const AdminRoute = ({children}) => {
    const [isAdmin, isAdminLoading] = useAdmin()
    const {user,loading} = useAuth();
    const location = useLocation();

    if(loading || isAdminLoading){
        return <progress className="progress w-56"></progress>
    }

    if(user?.email && isAdmin) {
        return children;
    }
    return <Navigate to="/" state={{ from: location }} replace />;
};

export default AdminRoute;