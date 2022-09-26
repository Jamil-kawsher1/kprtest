import { useContext } from "react"
import { AuthContext } from "../Context/AuthContext"




export const useAuthContext = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw Error("UseAuthContext Must Be Inside in AuthContext Provider")
    }


}
