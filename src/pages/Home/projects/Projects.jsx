import Project1 from "./Project1";




const Projects = () => {
    return (
        <div className="">
            <p className="text-4xl text-primary text-center py-10 font-bold">My Projects</p>
            <div className="flex flex-col lg:flex-row">
                
                <div className="lg:w-full h-[screen-400px] flex justify-center ">
                    <Project1></Project1>
                </div>
            </div>
        </div>

    );
};

export default Projects;