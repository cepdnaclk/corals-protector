import React, {useEffect, useState} from 'react';

import { ChartsHeader, LineChart } from '../components/';
import { lineCustomSeriesTemperature, LinePrimaryXAxisTemperature, LinePrimaryYAxisTemperature } from '../data/dummy';
import axios from "axios";

const Temperature = () => {
    const [readings, setReadings] = useState([]);

    useEffect(() => {
        const fetchDevices = async () => {
            const res = await axios.get("/reading/alltemperaturetreadings/63aa852ecda8a81148b627d8")
            setReadings(res.data);
        };
        fetchDevices();
    }, []);

    return(
        <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
        <ChartsHeader category="Line" title="Temperature" />
        <div className="w-full">
            <LineChart lineCustomSeries = {readings} XAxis = {LinePrimaryXAxisTemperature} YAxis={ LinePrimaryYAxisTemperature} />
        </div>
    </div>
    )
};

export default Temperature;