import Home from "./component/home";
import Navbar from "./component/navbar/Navbar";
import Layout from "./layout/primary";
import PublicRouter from "./router/public";

function App() {
  return (
    <div>
        {/* <Layout> */}
        <PublicRouter/>
        {/* </Layout> */}
    </div>
  );
}

export default App;
