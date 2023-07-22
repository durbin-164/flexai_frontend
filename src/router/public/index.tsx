import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../../component/login";
import Home from "../../component/home";
import Layout from "../../layout/primary";
import Signup from "../../component/signup";
import ImagePage from "../../component/image";
import PDFPage from "../../component/pdf";
import ForgotPassword from "../../component/forgotpassword";

export default function PublicRouter(){
    return (
        <Routes>
            <Route path="/" element={<Layout/>} >
                <Route index element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/forgotpassword" element={<ForgotPassword />} />
                <Route path="/image" element={<ImagePage />} />
                <Route path="/pdf" element={<PDFPage />} />
                <Route path="*" element={<Home/>} />
            </Route>
        </Routes>
    )

}