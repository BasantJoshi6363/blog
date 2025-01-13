import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function Logout() {
    const navigate = useNavigate()
    useEffect(() => {
        localStorage.setItem("token", "")
        navigate("/login")
    }, [navigate])

    return null;    

}

export default Logout