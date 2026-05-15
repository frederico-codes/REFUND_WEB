import { BrowserRouter } from "react-router";;
import { Loading } from "../components/Loading";
import { AuthRoutes } from "./authRoutes";
import { ManagerRoutes } from "./ManagerRoutes";
import { EmployeeRoutes } from "./EmployeeRoutes";
import { useAuth } from "../hooks/useAuth";




export function Routes(){
    const { session, isLoading } = useAuth()
    console.log(session)
    function Route(){
        switch(session?.user.role){
            case "employee":
                return <EmployeeRoutes/>
            case "manager":
                return <ManagerRoutes/>
            default:
                return <AuthRoutes/>
        }        
    }


    if(isLoading){
        return <Loading/>
    }


    return (
        <BrowserRouter>
            <Route />
        </BrowserRouter>
    )
}