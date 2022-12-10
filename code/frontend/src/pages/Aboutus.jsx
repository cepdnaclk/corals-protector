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
                    <p className="mb-4">Sri Lanka is an island. We have many sea resources. One of the main resources is coral reefs. For centuries, coral reefs have been a valuable resource for the people of Sri Lanka. Coral reefs are among the most biologically valuable ecosystems on the globe. Coral reefs rank among the most biologically productive and diverse of all-natural ecosystems. A single reef can be home to 3,000 different species, while one-third of the world’s fish species depend on them.</p>
                    <p className="mb-4">However, we do not care about corals. Corals are mostly destroyed nowadays. Corals have certain environmental conditions that they need in order to survive. These factors limit where corals can live. The main factors that can affect the corals are temperature, acidity, salinity, and sunlight. If researchers or well-wishers try to find the destroying places’ environmental factors, they don't have any specific device to do that. So they are facing a lot of problems while taking a reading in that environment. It is also so hard to find a suitable place(with good environmental factors) for new coral growth projects.</p>
                    <p className="mb-4">However, we do not care about corals. Corals are mostly destroyed nowadays. Corals have certain environmental conditions that they need in order to survive. These factors limit where corals can live. The main factors that can affect the corals are temperature, acidity, salinity, and sunlight. If researchers or well-wishers try to find the destroying places’ environmental factors, they don't have any specific device to do that. So they are facing a lot of problems while taking a reading in that environment. It is also so hard to find a suitable place(with good environmental factors) for new coral growth projects.</p>

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
                            onClick={() => navigate("/aboutus")}
                            style={{background: currentColor, borderRadius: '5%' , margin:'1%'}}
                            className="text-2xl text-white p-2 hover:drop-shadow-xl hover:bg-light-gray"
                        >
                            About Us
                        </button>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default Aboutus