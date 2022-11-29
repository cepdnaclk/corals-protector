import React from 'react';
import {BsCurrencyDollar} from 'react-icons/bs';
import {GoPrimitiveDot} from 'react-icons/go';
import {IoIosMore} from 'react-icons/io';
import {DropDownListComponent} from '@syncfusion/ej2-react-dropdowns';

import {Stacked, Pie, Button, LineChart, SparkLine} from '../components';
import {
    earningData,
    medicalproBranding,
    recentTransactions,
    weeklyStats,
    dropdownData,
    SparklineAreaData,
    ecomPieChartData
} from '../data/dummy';
import {useStateContext} from '../contexts/ContextProvider';
import product9 from '../data/product9.jpg';

const DropDown = ({currentMode}) => (
    <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
        <DropDownListComponent id="time" fields={{text: 'Time', value: 'Id'}}
                               style={{border: 'none', color: (currentMode === 'Dark') && 'white'}} value="1"
                               dataSource={dropdownData} popupHeight="220px" popupWidth="120px"/>
    </div>
);

const Home = () => {
    const {currentColor, currentMode} = useStateContext();

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
                                <p className="mb-4">Sri Lanka is an island. We have many sea resources. One of the main resources is coral reefs. For centuries, coral reefs have been a valuable resource for the people of Sri Lanka. Coral reefs are among the most biologically valuable ecosystems on the globe. Coral reefs rank among the most biologically productive and diverse of all-natural ecosystems. A single reef can be home to 3,000 different species, while one-third of the world’s fish species depend on them.</p>
                                <p>We are strategists, designers and developers. Innovators and problem solvers. Small
                                    enough to be
                                    simple and quick.</p>
                            </div>
                            <div className="grid grid-cols-2 gap-4 mt-8">
                                <img className="w-full rounded-lg"
                                     src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
                                     alt="office content 1"/>
                                <img className="mt-4 w-full lg:mt-10 rounded-lg"
                                     src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
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
