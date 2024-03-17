import { NavLink } from "react-router-dom";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Nav = () => {
   
    return (

        <div className="drawer bg-blue-600 text-white bg-opacity-70 z-10 fixed">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="w-full navbar">

                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className=" w-1/2 px-2 mx-2 hidden lg:flex lg:justify-start lg:gap-5">
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/messages"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }
                        >
                            About
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }
                        >
                            Contact me
                        </NavLink>


                    </div>

                    <div className="w-3/4 lg:w-1/2 flex justify-end">
                        <ul className="menu menu-horizontal flex items-center gap-4">
                            {/* Navbar menu content here */}
                            <p>Follow me on</p>
                            <a href="https://github.com/Sharif-codes"><FaGithub className="text-xl lg:text-3xl"></FaGithub></a>
                            <a href="https://www.facebook.com/bangladeshi.tiger.77/"><FaFacebook className="text-xl lg:text-3xl"></FaFacebook></a>
                            <a href="https://www.likedin.com/in/sharif-bhuyan/"><FaLinkedin className="text-xl lg:text-3xl"></FaLinkedin></a>
                        </ul>
                    </div>
                </div>
                {/* Page content here */}
                {/* Content */}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-48 min-h-full bg-blue-800 text-white">
                    {/* Sidebar content here */}
                    <div className="flex flex-col gap-5">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/">About me</NavLink>
                        <NavLink to="/contact">Contact me</NavLink>
                    </div>

                </ul>
            </div>
        </div>


    );
};

export default Nav;