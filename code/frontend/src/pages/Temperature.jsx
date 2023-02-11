import React, {useContext, useEffect, useState} from 'react';

import { ChartsHeader, LineChart } from '../components/';
import { lineCustomSeriesTemperature, LinePrimaryXAxisTemperature, LinePrimaryYAxisTemperature } from '../data/dummy';
import axios from "axios";
import {AuthContext} from "../contexts/AuthContext";

const Temperature = () => {
    const [readings, setReadings] = useState([]);
    const {user} = useContext(AuthContext)

    useEffect(() => {
        const fetchDevices = async () => {
            const res = await axios.get("/reading/alltemperaturetreadings/"+user._id)
            setReadings(res.data);
        };
        fetchDevices();
    }, []);

    return(
        <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
            <ChartsHeader category="Line" title="Temperature Graphs" Chart="Best Temperature Range for Coral Growth : 23 - 32 °C"/>
        <div className="w-full">
            <LineChart lineCustomSeries = {readings} XAxis = {LinePrimaryXAxisTemperature} YAxis={ LinePrimaryYAxisTemperature} />
        </div>
    </div>
    )
};

export default Temperature;