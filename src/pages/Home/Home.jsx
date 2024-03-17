import Banner from "../../components/Banner/Banner";
import ContactUs from "../Contact/ContactUs";
import Education from "./Education/Education";
import Skills from "./Skills/Skills"
import Projects from "./projects/Projects";

const Home = () => {
    return (
        <div className="space-y-10 shadow-xl">
            <div className="bg-stone-200 rounded-xl ">
            <Banner></Banner>
            </div>
            <div className="bg-stone-200 rounded-xl ">
            <Skills></Skills>
            </div>
            <div className="bg-stone-200 rounded-xl ">
            <Education></Education>
            </div>
            <div className="bg-stone-200 rounded-xl ">
            <Projects></Projects>
            </div>
            <div className="bg-stone-200 rounded-xl flex justify-center">
            <ContactUs></ContactUs>
            </div>
        </div>
    );
};

export default Home;