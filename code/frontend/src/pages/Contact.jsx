import React from 'react';
import contact from "../data/contact.png"


const Contact = () => {

    return (
        // <div className="mt-24">
        // <div className="flex flex-wrap lg:flex-nowrap justify-center ">
        // <div
        // className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
        <div className="flex flex-wrap lg:flex-nowrap justify-center ">
            <div
                className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Contact Us</h2>
                    <p className="mb-4">Would you like to purchase our device? Please reach out to us through any of the following channels. If you are currently utilizing our device, feel free to reach out with any questions or concerns you may have. We are always happy to assist.</p>
                    <br/>
                    <p className="mb-4">Phone Number : 011 123 4567</p>
                    <br/>
                    <p className="mb-4">Email : Coralsprotetor@gmail.com</p>
                    <br/>
                    <p className="mb-4">Website : https://corals1.herokuapp.com/</p>
                    <br/>
                    <p className="mb-4">Location : Colombo-11</p>

                </div>
                <div className="grid grid-cols-1 gap-6 mt-8" >
                    <img className="w-full rounded-lg"
                         src={contact}
                         alt="office content 1"/>
                </div>


            </div>
        </div>

    );
};

export default Contact;
