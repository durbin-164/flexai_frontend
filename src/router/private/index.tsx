import { Navigate } from "react-router-dom"
import { RootState, useAppSelector } from "../../redux/store"

export default function ProtectedRoute({ children }:{children: React.ReactElement}) {
    const userData = useAppSelector((state: RootState) => state.user.user)
    if (!userData){
        return <Navigate to="/login" replace={true} />
    }
    return children
}