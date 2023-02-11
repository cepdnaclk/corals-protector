import React, {useContext, useEffect, useState} from 'react';

import { ChartsHeader, LineChart } from '../components/';
import { lineCustomSeriesLight, LinePrimaryXAxisLight, LinePrimaryYAxisLight } from '../data/dummy';
import axios from "axios";
import {AuthContext} from "../contexts/AuthContext";

const Light = () => {
    const [readings, setReadings] = useState([]);
    const {user} = useContext(AuthContext)

    useEffect(() => {
        const fetchDevices = async () => {
            const res = await axios.get("/reading/alllightreadings/"+user._id)
            setReadings(res.data);
        };
        fetchDevices();
    }, []);
    return (
        <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
            <ChartsHeader category="Line" title="Light Intensity Graphs" Chart="Best Light Intensity Range for Coral Growth : Over 800 lux"/>
            <div className="w-full">
                <LineChart lineCustomSeries={readings} XAxis={LinePrimaryXAxisLight}
                           YAxis={LinePrimaryYAxisLight}/>
            </div>
        </div>
    )
};

export default Light;