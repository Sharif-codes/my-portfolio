import { Outlet } from "react-router-dom";
import Nav from "../components/Navbar/Nav";
import Footer from "../components/Footer/Footer";


const Main = () => {
    
    return (
        <div className="">
            <Nav></Nav>
            
            <Outlet ></Outlet>
            <Footer></Footer>
            
            
            
        </div>
    );
};

export default Main;