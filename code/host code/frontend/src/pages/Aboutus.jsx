import React, {useEffect} from 'react'
import {useStateContext} from "../contexts/ContextProvider";
import {useNavigate} from "react-router-dom";

const Aboutus = () => {
    const {
        setCurrentColor,
        setCurrentMode,
        currentColor,
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
        <div className="flex flex-wrap lg:flex-nowrap justify-center ">
            <div
                className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-1 lg:py-16 lg:px-6">
                <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Corals Protector</h2>
                    <p className="mb-4">Sri Lanka is home to a wide variety of sea resources, one of the main resources being coral reefs. Coral reefs are among the most biologically valuable ecosystems on the globe. A single reef can be home to 3,000 different species, while one-third of the world’s fish species depend on them. They calm the energy of the waves, providing vital protection to the shores. They are also a source of food and new medicines. Millions of people depend on reefs for food, income, and protection. Fishing, diving, and snorkeling on and near reefs add millions of rupees to local businesses.</p>
                    <p className="mb-4">However, despite the importance of coral reefs, they are facing destruction due to human activity. Coral reefs have certain environmental conditions that they need in order to survive, such as temperature, acidity, salinity, and sunlight. The problem is that researchers and well-wishers currently do not have a specific device to measure these environmental factors, making it difficult to take accurate readings and find suitable places for new coral growth projects.</p>
                    <p className="mb-4">To address this issue, we have developed a device that can measure the temperature, acidity, salinity, and sunlight all at once and send the readings to a database. The data is then displayed on a website with graphical analytics, making it easy for researchers and well-wishers to understand and take action accordingly. Our device can take measurements for a one-day period and upload them to the cloud, minimizing testing time and user time compared to the current situation. The data also includes locations, so we can easily identify the locations again.</p>
                    <p className="mb-4">In conclusion, our system (device + website) will be able to solve the problem of taking measurements of coral growing environmental factors and will be very useful for users, including the environment department, researchers, and other societies. With this device, we can work towards preserving and protecting the valuable coral reefs in Sri Lanka.</p>

                    <div className="mt-12"  >
                        <button
                            type="button"
                            onClick={() => navigate("/login")}
                            style={{background: currentColor, borderRadius: '5%' , margin:'1%'}}
                            className="text-2xl text-white p-2 hover:drop-shadow-xl hover:bg-light-gray"
                        >
                            Sign In
                        </button>
                        <button
                            type="button"
                            onClick={() => navigate("/contactus")}
                            style={{background: currentColor, borderRadius: '5%' , margin:'1%'}}
                            className="text-2xl text-white p-2 hover:drop-shadow-xl hover:bg-light-gray"
                        >
                            Contact Us
                        </button>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default Aboutus