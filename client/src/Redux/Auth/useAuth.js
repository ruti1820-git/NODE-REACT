import { useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode"; 

const useAuth = () => {
    const token = useSelector((state) => state.auth.token);
    
    let authData = {
        roles: [],
        username: "",
        email: "",
        firstName: "",
        lastName: "",
        address: "",
        phoneNumber: "",
        password: "" 
    };

    if (token) {
        try {
            const decoded = jwtDecode(token);
            authData = {
                roles: decoded.roles || [],
                username: decoded.username || "",
                email: decoded.email || "",
                firstName: decoded.firstName || "",
                lastName: decoded.lastName || "",
                address: decoded.address || "",
                phoneNumber: decoded.phoneNumber || "",
                password: "" 
            };
        } catch (error) {
            console.error("Error decoding JWT token:", error);
     
        }
    }

    return [authData];
};

export default useAuth;
