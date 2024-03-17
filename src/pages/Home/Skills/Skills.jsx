import { MdWeb } from "react-icons/md";
import { TiHtml5 } from "react-icons/ti";
import { FaReact } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { BiMath } from "react-icons/bi";
import { RiSpeakFill } from "react-icons/ri";
import { IoMdFootball } from "react-icons/io";
import { BiCameraMovie } from "react-icons/bi";
const Skills = () => {
    return (
        <div className=" flex lg:flex-row  flex-col justify-around ">
            <div className="flex flex-col  mx-auto" >
                <p className="lg:text-4xl text-3xl font-bold  w-fit my-4 rounded-xl text-primary flex justify-start">Technical Skills</p>
                
                <div className="space-y-3">
                    <p className="flex items-center justify-start gap-2"><MdWeb className="text-3xl"></MdWeb> Responsive Web Design with HTML,CSS,JS.</p>
                    <p className="flex items-center justify-start gap-2"><IoLogoFirebase className="text-3xl"></IoLogoFirebase>Authentication with Firebase</p>
                    <p className="flex items-center justify-start gap-2"><FaNodeJs className="text-3xl"></FaNodeJs>Backend with Nodejs</p>
                    <p className="flex items-center justify-start gap-2"><SiExpress className="text-3xl"></SiExpress>Express js as Nodejs Runtime</p>
                    <p className="flex items-center justify-start gap-2"><SiMongodb className="text-3xl"></SiMongodb>MongoDb Database</p>
                    
                </div>
            </div>
            <div className="flex flex-col mx-auto">
                <p className="text-3xl lg:text-4xl font-bold  w-fit my-4 rounded-xl text-primary flex justify-start">Others Skills and Hobbies</p>
                <div className="space-y-3">
                    <p className="flex items-center justify-start gap-2"><BiMath className="text-3xl"></BiMath>Problem solving ability</p>
                    <p className="flex items-center justify-start gap-2"><RiSpeakFill className="text-3xl"></RiSpeakFill>Communication in English</p>
                    <p className="flex items-center justify-start gap-2"><IoMdFootball className="text-3xl"></IoMdFootball>Playing Cricket and Soccer</p>
                    <p className="flex items-center justify-start gap-2"><BiCameraMovie className="text-3xl"></BiCameraMovie> Watching movies</p>
                </div>

            </div>
        </div>
    );
};

export default Skills;