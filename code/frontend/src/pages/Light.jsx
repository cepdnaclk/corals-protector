import React, {useEffect, useState} from 'react';

import { ChartsHeader, LineChart } from '../components/';
import { lineCustomSeriesLight, LinePrimaryXAxisLight, LinePrimaryYAxisLight } from '../data/dummy';
import axios from "axios";

const Light = () => {
    const [readings, setReadings] = useState([]);

    useEffect(() => {
        const fetchDevices = async () => {
            const res = await axios.get("/reading/alllightreadings/63aa852ecda8a81148b627d8")
            setReadings(res.data);
        };
        fetchDevices();
    }, []);
    return (
        <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
            <ChartsHeader category="Line" title="Light intensity"/>
            <div className="w-full">
                <LineChart lineCustomSeries={readings} XAxis={LinePrimaryXAxisLight}
                           YAxis={LinePrimaryYAxisLight}/>
            </div>
        </div>
    )
};

export default Light;