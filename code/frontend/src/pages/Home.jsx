import React, {useContext, useEffect} from 'react';
import {FiSettings} from "react-icons/fi";
import {useStateContext} from "../contexts/ContextProvider";
import { useNavigate } from "react-router-dom";
import {AuthContext} from "../contexts/AuthContext";
import image1 from "../data/01.jpg"
import image2 from "../data/02.jpg"

const Home = () => {
    const {user} = useContext(AuthContext)
    const {
        setCurrentColor,
        setCurrentMode,
        currentMode,
        activeMenu,
        currentColor,
        themeSettings,
        setThemeSettings
    } = useStateContext();

    useEffect(() => {
        const currentThemeColor = localStorage.getItem('colorMode');
        const currentThemeMode = localStorage.getItem('themeMode');
        if (currentThemeColor && currentThemeMode) {
            setCurrentColor(currentThemeColor);
            setCurrentMode(currentThemeMode);
        }
    }, []);

    let navigate = useNavigate();


    return (
        // <div className="mt-24">
           // <div className="flex flex-wrap lg:flex-nowrap justify-center ">
               // <div
                   // className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
                    <div className="flex flex-wrap lg:flex-nowrap justify-center ">
                        <div
                            className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Corals Protector</h2>
                                <p className="mb-4">Sri Lanka is home to many valuable sea resources, including coral reefs. These reefs are among the most biologically productive and diverse ecosystems in the world, providing vital protection to the shores, food and new medicines. However, coral reefs are currently being destroyed due to a lack of understanding of the environmental conditions they need to survive. </p>
                                <p>To address this issue, we have created a device that can measure the temperature, acidity, salinity and sunlight of the water, and send the readings to a database. The data is then displayed on a website with graphical analytics, allowing researchers and society members to check the analytics and take action accordingly. This device will greatly help in the conservation and growth of coral reefs in Sri Lanka.</p>
                                <div className="mt-12" >
                                    {user?"":
                                    <button
                                        type="button"
                                        onClick={() => navigate("/login")}
                                        style={{background: currentColor, borderRadius: '5%' , margin:'1%'}}
                                        className="text-2xl text-white p-2 hover:drop-shadow-xl hover:bg-light-gray"
                                    >
                                        Sign In
                                    </button>}
                                    {(user && user.isAdmin)?
                                        <button
                                            type="button"
                                            onClick={() => navigate("/registeruser")}
                                            style={{background: currentColor, borderRadius: '5%' , margin:'1%'}}
                                            className="text-2xl text-white p-2 hover:drop-shadow-xl hover:bg-light-gray"
                                        >
                                            Register User
                                        </button>:""}
                                    {(user && user.isAdmin)?<button
                                        type="button"
                                        onClick={() => navigate("/registerdevice")}
                                        style={{background: currentColor, borderRadius: '5%', margin: '1%'}}
                                        className="text-2xl text-white p-2 hover:drop-shadow-xl hover:bg-light-gray"
                                    >
                                            Register Device
                                    </button>:
                                        <button
                                            type="button"
                                            onClick={() => navigate("/aboutus")}
                                            style={{background: currentColor, borderRadius: '5%', margin: '1%'}}
                                            className="text-2xl text-white p-2 hover:drop-shadow-xl hover:bg-light-gray"
                                        >
                                            About Us
                                        </button>
                                    }
                                </div>

                            </div>
                            <div className="grid grid-cols-2 gap-4 mt-8" >
                                <img className="w-full rounded-lg"
                                     src={image1}
                                     alt="office content 1"/>
                                <img className="mt-4 w-full lg:mt-10 rounded-lg"
                                     src={image2}
                                     alt="office content 2"/>
                            </div>


                        </div>
                    </div>
               // </div>
        // </div>
        // </div>
    );
};

export default Home;
