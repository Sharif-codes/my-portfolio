import img from '../../../src/assets/backgroundlessimg.png'
import banner from '../../assets/onlybanner.png'
import { CgMail } from "react-icons/cg";
import { IoMdCall } from "react-icons/io";

const resume_file = "http://localhost:5173/sharif_resume.pdf"
const Banner = () => {
    const handleDownload = (url) => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.blob();
            })
            .then(blob => {
                const blobURL = window.URL.createObjectURL(new Blob([blob]));
                const fileName = url.split("/").pop();
                const aTag = document.createElement("a");
                aTag.href = blobURL;
                aTag.setAttribute("download", fileName);
                document.body.appendChild(aTag);
                aTag.click();
                aTag.remove();
            })
            .catch(error => {
                console.error('Error downloading PDF:', error);
            });
    };
    
    return (
        <div className="hero min-h-screen -z-20 " style={{ backgroundImage: `url(${banner})` }} >
            {/* <div className="hero-overlay"></div> */}

            <div className=" text-neutral-content">
                <div className='flex items-center  justify-center'>
                    <div className='w-1/3 lg:mb-32 mb-10'>
                        <img src={img} alt="" />
                    </div>
                    <div className='w-2/3 '>
                        <h2 className='text-lg lg:text-5xl mb-2 lg:mb-4 font-bold'>Hey, I'm Sharif Bhuyan</h2>
                        <p className='text-sm lg:text-3xl font-semibold mb-2 lg:mb-4'> MERN Stack Web Developer</p>
                        <p className='mt-1 lg:mt-3 flex items-center gap-1 text-xs lg:text-xl'><CgMail className='text-xs lg:text-2xl'></CgMail> <a href="sharifxenjia@gmail.com"></a>sharifxenjia@gmail.com</p>
                        <p className='mt-1 lg:mt-3 flex items-center gap-1 text-xs lg:text-xl '><IoMdCall className='text-xs lg:text-2xl'></IoMdCall> <a href="sharifxenjia@gmail.com"></a>+8801777456044</p>
                        <button onClick={() => handleDownload(resume_file)} className='bg-primary p-2 text-xs lg:text-sm text-white rounded-lg lg:mt-4 mt-2'>Download Resume</button>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Banner;