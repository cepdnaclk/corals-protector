import './App.css';





import React, {useContext, useEffect} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {FiSettings} from 'react-icons/fi';
import {TooltipComponent} from '@syncfusion/ej2-react-popups';

import {Navbar, Footer, Sidebar, ThemeSettings, Device} from './components';
import {
    Home,
    Aboutus,
    Login,
    AddDevice,
    MainTable,
    Ph,
    Temperature,
    Light,
    Adminpage, RegisterUser, RegisterDevice, GetdataTest, Contact, Reset
} from './pages';



import {useStateContext} from "./contexts/ContextProvider";
import {AuthContext} from "./contexts/AuthContext";


function App() {
    const {user} = useContext(AuthContext)
    const test = false
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
    return (
        <div className={currentMode === 'Dark' ? 'dark' : ''}>
            <BrowserRouter>
                <div className="flex relative dark:bg-main-dark-bg">
                    <div className="fixed right-4 bottom-4" style={{zIndex: '1000'}}>
                        <TooltipComponent content="Settings" position="Top">
                            <button
                                type="button"
                                onClick={() => setThemeSettings(true)}
                                style={{background: currentColor, borderRadius: '50%'}}
                                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
                            >
                                <FiSettings/>
                            </button>
                        </TooltipComponent>
                    </div>
                    {activeMenu ? (
                        <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
                            <Sidebar/>
                        </div>
                    ) : (
                        <div className="w-0 dark:bg-secondary-dark-bg">
                            <Sidebar/>
                            sidebar
                        </div>
                    )}
                    <div
                        className={
                            activeMenu
                                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
                        }
                    >
                        <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
                            <Navbar/>
                        </div>
                        <div>
                            {themeSettings && (<ThemeSettings />)}

                            <Routes>
                                {/* dashboard  */}
                                <Route path="/" element={(<Home/>)}/>
                                <Route path="/home" element={(<Home/>)}/>
                                <Route path="/contactus" element={(<Contact/>)}/>
                                <Route path="/aboutus" element={<Aboutus/>}/>
                                <Route path="/login" element={user?<Home/>:<Login/>}/>
                                <Route path="/adddevice" element={user?<AddDevice/>:<Login/>}/>
                                <Route path="/resetpassword" element={user?<Reset/>:<Login/>}/>
                                <Route path="/maintable" element={user?<MainTable/>:<Login/>}/>
                                <Route path="/device" element={user?<Device/>:<Login/>}/>
                                <Route path="/ph" element={user?<Ph/>:<Login/>}/>
                                <Route path="/light" element={user?<Light/>:<Login/>}/>
                                <Route path="/temperature" element={user?<Temperature/>:<Login/>}/>
                                <Route path="/adminpage" element={(<Adminpage/>)}/>
                                <Route path="/registeruser" element={(<RegisterUser/>)}/>
                                <Route path="/registerdevice" element={(<RegisterDevice/>)}/>
                                <Route path="/getdatatest" element={(<GetdataTest/>)}/>

                            </Routes>
                            {/*<Routes>*/}
                            {/*    /!* dashboard  *!/*/}
                            {/*    <Route path="/" element={(<Home/>)}/>*/}
                            {/*    <Route path="/home" element={(<Home/>)}/>*/}
                            {/*    <Route path="/aboutus" element={<Aboutus/>}/>*/}
                            {/*    <Route path="/login" element={<Login/>}/>*/}
                            {/*    <Route path="/adddevice" element={<AddDevice/>}/>*/}
                            {/*    <Route path="/maintable" element={<MainTable/>}/>*/}
                            {/*    <Route path="/device" element={<Device/>}/>*/}
                            {/*    <Route path="/ph" element={<Ph/>}/>*/}
                            {/*    <Route path="/light" element={<Light/>}/>*/}
                            {/*    <Route path="/temperature" element={<Temperature/>}/>*/}
                            {/*    <Route path="/adminpage" element={(<Adminpage/>)}/>*/}
                            {/*    <Route path="/registeruser" element={(<RegisterUser/>)}/>*/}
                            {/*    <Route path="/registerdevice" element={(<RegisterDevice/>)}/>*/}



                            {/*</Routes>*/}
                        </div>
                        <Footer />
                    </div>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
