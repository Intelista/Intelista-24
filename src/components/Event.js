import React from "react";
import "../App.css";

import Footer from "./Footer";
import { Link, useNavigate } from "react-router-dom";
const tech = '/images/technicaloverall.gif';
const bgVideo = '/images/bgvedio.mp4';
const nontech = '/images/nontech.gif';
export default function Event() {
    const navigate = useNavigate();

    return (
        <div className="relative w-full h-full">
            {/* Background video */}
            <video 
                src={bgVideo} 
                className="fixed top-0 left-0 w-full h-full object-cover -z-10"
                autoPlay 
                loop 
                playsInline
            ></video>

            <section className="relative mt-5 p-3 lg:p-3 bg-transparent text-gray-100 dark:text-gray-800">
                {/* Content container */}
                <div className="relative container mx-auto space-y-12">
                    <h2 className="blueline text-5xl font-bold text-white text-center">Exciting Events</h2>

                    {/* Tech Event Section */}
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                    <Link to="/Tech">
                        <img src={tech} alt="Tech Event" className="h-80 bg-gray-500 dark:bg-gray-500 aspect-video" />
                        </Link>
                        <div className="flex flex-col justify-center flex-1 p-6 bg-gray-800 bg-opacity-40 dark:bg-gray-100 dark:bg-opacity-30 text-gray-100 dark:text-gray-800">
                            <span className="text-xs uppercase text-gray-400 dark:text-gray-600">Yo-ho-ho, Pirates! </span>
                            <h3 className="pirateOne text-3xl font-bold">Technical Events</h3>
                            <p className="my-6 text-white dark:text-gray-600">Ahoy, Pirates! Set sail into our exhilarating Technical event featuring a Paper Presentation, Coding Debug, Web Designing, and a challenging Technical Quiz, where you can showcase your skills and creativity</p>
                            <button type="button" onClick={() => navigate('/tech')} className="self-start text-violet-800"><strong>Explore Tech Events</strong></button>
                            <Link to="/Tech" className="inline-flex items-center space-x-2 text-sm dark:text-violet-1000">
                                <span><strong>Learn More</strong></span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>

                    {/* Non-Tech Event Section */}
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                    <Link to="/NonTech">
                        <img src={nontech} alt="Tech Event" className="h-80 bg-gray-500 dark:bg-gray-500 aspect-video" />
                        </Link>

                        <div className="flex flex-col justify-center flex-1 p-6 bg-gray-800 bg-opacity-40 dark:bg-gray-100 dark:bg-opacity-30 text-gray-100 dark:text-black-800 ">
                            <span className="text-xs uppercase text-gray-400 dark:text-gray-600">Yo-ho-ho, Pirates!</span>
                            <h3 className="pirateOne text-3xl   text-whitefont-bold">Non - Technical Events</h3>
                            <p className="my-6 text-white dark:text-gray-600">Ahoy, Pirates! Check out our thrilling lineup of events where adventure awaits at every turn. From epic battles in Free Fire to the cunning Treasure Hunt, burst the Balloons, and outwit your opponents in Chess—get ready to conquer the seas of fun and excitement!</p>
                            <button type="button" onClick={() => navigate('/nontech')} className="self-start text-violet-800"><strong>Explore Non-Tech Events</strong></button>
                            <Link to="/NonTech" className="inline-flex items-center space-x-2 text-sm dark:text-violet-1000">
                                <span><strong>Learn More</strong></span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                </svg>
                            </Link>
                        </div> 
                    </div>
                    
                </div>
            </section>

            <Footer />
        </div>
    );
}
