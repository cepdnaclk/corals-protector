import React, {useEffect, useState} from 'react';
import axios from "axios";



// const GetdataTest = () => {
//     const [devices, setDevices] = useState([]);
//
//     useEffect(() => {
//         const fetchDevices = async () => {
//             const res = await axios.get("/devices/alldevice/63aa852ecda8a81148b627d8")
//             setDevices(res.data);
//         };
//         fetchDevices();
//     }, []);
//     const handleClick = async () => {
//         console.log("hi")
//
//     };
//     return(
//         <div>
//             {devices.map((p) => (
//                 <p>{p.deviceCode}</p>
//             ))}
//         </div>
//     )
// };


const GetdataTest = () => {
    const [readings, setReadings] = useState([]);

    useEffect(() => {
        const fetchDevices = async () => {
            const res = await axios.get("/reading/allreadings/63aa852ecda8a81148b627d8")
            setReadings(res.data);
        };
        fetchDevices();
    }, []);
    console.log("hi",readings)


    return(
        <div>
            {readings.map((p) => (
                <p>{p.deviceCode},{p.temperature},{p.lightIntensity},{p.pH}</p>
            ))}
        </div>
    )
};

export default GetdataTest;