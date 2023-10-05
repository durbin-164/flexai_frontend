import { Routes, Route } from "react-router-dom";
import Login from "../../page/login";
import Home from "../../page/home";
import Layout from "../../layout/primary";
import Signup from "../../page/signup";
import ImagePage from "../../page/image";
import PDFPage from "../../page/pdf";
import ForgotPassword from "../../page/forgotpassword";

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