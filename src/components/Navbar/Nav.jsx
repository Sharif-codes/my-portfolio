import { NavLink } from "react-router-dom";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import pdf from '../../assets/Sharif.pdf'


const Nav = () => {
   
    // const handleDownload = () => {
    //     const pdfUrl = URL.createObjectURL(pdf);
    //     const link = document.createElement('a');
    //     link.href = pdfUrl;
    //     link.download = 'Sharif_Bhuyan.pdf';
    //     link.rel = 'noopener noreferrer'; // Improve security
    //     document.body.appendChild(link);
      
    //     // Trigger a click event on the link
    //     link.click();
      
    //     // Remove the link from the document body after a short delay
    //     setTimeout(() => {
    //       document.body.removeChild(link);
    //       URL.revokeObjectURL(pdfUrl); // Release the object URL
    //     }, 100);
    //   };
    const handleDownload = () => {
  const pdfBlob = new Blob([pdf], { type: 'application/pdf' });
  const pdfUrl = URL.createObjectURL(pdfBlob);
  
  const link = document.createElement('a');
  link.href = pdfUrl;
  link.download = 'Sharif_Bhuyan.pdf';
  link.rel = 'noopener noreferrer';
  
  document.body.appendChild(link);

  // Trigger a click event on the link
  link.click();

  // Remove the link from the document body after a short delay
  setTimeout(() => {
    document.body.removeChild(link);
    URL.revokeObjectURL(pdfUrl); // Release the object URL
  }, 100);
};

      

    return (

        <div className="drawer bg-blue-600 text-white bg-opacity-30 z-10 fixed">
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
                            to="/messages"
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
                            to="/messages"
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
                            <><FaFacebook className="text-xl lg:text-3xl"></FaFacebook></>
                            <><FaLinkedin className="text-xl lg:text-3xl"></FaLinkedin></>
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
                        <NavLink>Home</NavLink>
                        <NavLink>About me</NavLink>
                        <NavLink>Contact me</NavLink>
                    </div>

                </ul>
            </div>
        </div>


    );
};

export default Nav;