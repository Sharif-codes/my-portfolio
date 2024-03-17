import { Carousel, IconButton } from "@material-tailwind/react";
import proj3 from "../../../assets/proj3.jpg"
import proj2 from "../../../assets/proj2.jpg"
import proj1 from "../../../assets/proj1.jpg"

const Project1 = () => {
    return (
        <Carousel
            autoplay={true}
            className="rounded-xl"
            prevArrow={({ handlePrev }) => (
                <IconButton
                    variant="text"
                    color="blue"
                    size="lg"
                    onClick={handlePrev}
                    className="!absolute top-2/4 left-4 -translate-y-2/4"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-6 w-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                        />
                    </svg>
                </IconButton>
            )}
            nextArrow={({ handleNext }) => (
                <IconButton
                    variant="text"
                    color="blue"
                    size="lg"
                    onClick={handleNext}
                    className="!absolute top-2/4 !right-4 -translate-y-2/4"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-6 w-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                        />
                    </svg>
                </IconButton>
            )}
        >
            <div>
                <div className="flex gap-2 justify-center">
                    <p className="bg-purple-800 p-2 rounded-md w-fit flex"><a className="text-white" href="https://github.com/to-let-management-client">view code</a></p>
                    <p className="bg-blue-900 p-2 rounded-md w-fit flex"><a className="text-white" href="https://auth-integ-private.web.app">Live view</a>   </p>
                </div>

                <img
                    src={proj3}
                    className="h-fit w-full object-cover"
                />

            </div>
            <div>
                <div className="flex gap-2 justify-center">
                    <p className="bg-purple-800 p-2 rounded-md w-fit flex"><a className="text-white" href="https://github.com/Sharif-codes/tech-valy-client">view code</a>   </p>
                    <p className="bg-blue-900 p-2 rounded-md w-fit flex"><a className="text-white" href="https://tech-valy.web.app/">Live view</a>   </p>
                </div>
                <img
                    src={proj2}
                    alt="image 2"
                    className="h-fit w-full object-cover"
                />
            </div>
            <div>
                <div className="flex gap-2 justify-center">
                    <p className="bg-purple-800 p-2 rounded-md w-fit flex"><a className="text-white" href="https://github.com/Sharif-codes/group-study-client">view code</a>   </p>
                    <p className="bg-blue-900 p-2 rounded-md w-fit flex"><a className="text-white" href="https://group-study-10c82.web.app">Live view</a>   </p>
                </div>
                <img
                    src={proj1}
                    alt="image 3"
                    className="h-fit w-full object-cover"
                />
            </div>

        </Carousel>
    );
};

export default Project1;