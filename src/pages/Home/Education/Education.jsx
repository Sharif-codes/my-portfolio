
import { IoIosSchool } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { GrProjects } from "react-icons/gr";
import { MdOutlineReportProblem } from "react-icons/md";
const Education = () => {
    return (
        <div className="flex lg:flex-row  flex-col justify-around">
            <div className=" mx-auto space-y-4">
                <p className="lg:text-4xl text-3xl font-bold  w-fit my-6 rounded-xl text-primary flex justify-start">Education</p>
                <div>
                    <p className="flex items-center gap-2"><IoIosSchool className="text-3xl"></IoIosSchool> Bachelor: International University of Business Agriculture <br /> and Technology</p>
                    <p className="text-gray-600">Department: Computer Science and Engineering</p>
                    <p className="text-gray-600">CGPA: 3.56</p>
                    <p className="text-gray-600">Address: Uttara-10,Dhaka</p>
                    {/* <div className="divider"></div> */}
                </div>
                <div>
                    <p className="flex items-center gap-2"><IoIosSchool className="text-3xl"></IoIosSchool> HSC: Shashidal Alhaj Abu Taher college</p>
                    <p className="text-gray-600">Department: Science</p>
                    <p className="text-gray-600">GPA: 4.75</p>
                    <p className="text-gray-600">Address: Brahmanpara,Cumilla</p>
                    {/* <div className="divider"></div> */}
                </div>
                <div>
                    <p className="flex items-center gap-2"><IoIosSchool className="text-3xl"></IoIosSchool> SSC: Kasba Government High School</p>

                    <p className="text-gray-600">GPA: 4.50</p>
                    <p className="text-gray-600">Address: Kasba,Brahmanbaria</p>
                    {/* <div className="divider"></div> */}
                </div>


            </div>
            <div className="flex flex-col mx-auto">
            <p className="lg:text-4xl text-3xl font-bold  w-fit my-6 rounded-xl text-primary flex justify-start">Experience</p>
            <div className="space-y-3">
            <p className="flex items-center gap-2"><IoLogoJavascript className="text-3xl"></IoLogoJavascript> Completed Programming Hero we Deve. course</p>
            <p className="flex items-center gap-2"><MdOutlineReportProblem className="text-3xl"></MdOutlineReportProblem> Developed problem solving skills</p>
            <p className="flex items-center gap-2"><GrProjects className="text-3xl"></GrProjects>Works with various type of projects. </p>
            </div>
           

            </div>

        </div>
    );
};

export default Education;