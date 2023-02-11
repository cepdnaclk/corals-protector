import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";

import { ChartsHeader, LineChart } from '../components/';
// import { lineCustomSeriesPh, LinePrimaryXAxisPh, LinePrimaryYAxisPh } from '../data/dummy';

import {AuthContext} from "../contexts/AuthContext";


let final = []
let r = []
let newArr = [];
const lineChartData = [
    [
        { Reading: '1', Ph: 0 },
        { Reading: '2', Ph: 1 },
        { Reading: '3', Ph: 3 },
        { Reading: '4', Ph: 3 },
        { Reading: '5', Ph: 4 }, { Reading: '6', Ph: 5 },
        { Reading: '7', Ph: 6 }, { Reading: '8', Ph: 7 },
        { Reading: '9', Ph: 8 }, { Reading: '10', Ph: 9 },
        { Reading: '11', Ph: 10 }, { Reading: '12', Ph: 11 },
        { Reading: '13', Ph: 12 }, { Reading: '14', Ph: 13 },
        { Reading: '15', Ph: 14 }, { Reading: '16', Ph: 8 },
        { Reading: '17', Ph: 7 }, { Reading: '18', Ph: 6 },
        { Reading: '19', Ph: 5 }, { Reading: '20', Ph: 5 },
        { Reading: '21', Ph: 4 }, { Reading: '22', Ph: 3 },
        { Reading: '23', Ph: 2 }, { Reading: '24', Ph: 1 }
    ],
    [
        { Reading: '1', Ph: 0 }, { Reading: '2', Ph: 2 },
        { Reading: '3', Ph: 4 }, { Reading: '4', Ph: 8 },
        { Reading: '5', Ph: 9 }, { Reading: '6', Ph: 9 },
        { Reading: '7', Ph: 9 }, { Reading: '8', Ph: 10 },
        { Reading: '9', Ph: 11}, { Reading: '10', Ph: 11 },
        { Reading: '11', Ph: 12 }, { Reading: '12', Ph: 13 },
        { Reading: '13', Ph: 13 }, { Reading: '14', Ph: 14 },
        { Reading: '15', Ph: 12 }, { Reading: '16', Ph: 10 },
        { Reading: '17', Ph: 9 }, { Reading: '18', Ph: 9 },
        { Reading: '19', Ph: 8 }, { Reading: '20', Ph: 7 },
        { Reading: '21', Ph: 6 }, { Reading: '22', Ph: 5 },
        { Reading: '23', Ph: 4 }, { Reading: '24', Ph: 3 }
    ],

    [
        { Reading: '1', Ph: 0 }, { Reading: '2', Ph: 4 },
        { Reading: '3', Ph: 5 }, { Reading: '4', Ph: 6 },
        { Reading: '5', Ph: 8 }, { Reading: '6', Ph: 9 },
        { Reading: '7', Ph: 10 }, { Reading: '8', Ph: 10 },
        { Reading: '9', Ph: 11 }, { Reading: '10', Ph: 11 },
        { Reading: '11', Ph: 12 }, { Reading: '12', Ph: 12 },
        { Reading: '13', Ph: 9 }, { Reading: '14', Ph: 5 },
        { Reading: '15', Ph: 4 }, { Reading: '16', Ph: 4 },
        { Reading: '17', Ph: 4 }, { Reading: '18', Ph: 4 },
        { Reading: '19', Ph: 4 }, { Reading: '20', Ph: 3 },
        { Reading: '21', Ph: 2 }, { Reading: '22', Ph: 1 },
        { Reading: '23', Ph: 1 }, { Reading: '24', Ph: 0 }
    ],
];

let lineCustomSeriesPh = [
    { dataSource: final[0],
        xName: 'Reading',
        yName: 'Ph',
        name: 'Location1',
        width: '2',
        marker: { visible: true, width: 10, height: 10 },
        type: 'Line'  },

    { dataSource: final[1],
        xName: 'Reading',
        yName: 'Ph',
        name: 'Location2',
        width: '2',
        marker: { visible: true, width: 10, height: 10 },
        type: 'Line' },

    { dataSource: final[2],
        xName: 'Reading',
        yName: 'Ph',
        name: 'Location3',
        width: '2',
        marker: { visible: true, width: 10, height: 10 },
        type: 'Line'  },

];

const LinePrimaryXAxisPh = {
    valueType: "Category",
    title:"Reading",
    edgeLabelPlacement: 'Shift',
    majorGridLines: { width: 0 },
    background: 'white',

};

const LinePrimaryYAxisPh = {
    labelFormat: '{value}',
    rangePadding: 'None',
    title:"Ph",
    minimum: 0,
    maximum: 14,
    interval: 2,
    lineStyle: { width: 0 },
    majorTickLines: { width: 0 },
    minorTickLines: { width: 0 },


};


const Ph = () => {
    const [readings, setReadings] = useState([]);
    const {user} = useContext(AuthContext)

    useEffect(() => {
        const fetchDevices = async () => {
            const res = await axios.get("/reading/allphreadings/"+user._id+"")
            setReadings(res.data);
        };
        fetchDevices();
    }, []);

    return(
        <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
            <ChartsHeader category="Line" title="pH Graphs" Chart="Best pH Range for coral Growth : 7.8 to 8.5"/>
            <div className="w-full">
                <LineChart lineCustomSeries={readings} XAxis={LinePrimaryXAxisPh} YAxis={LinePrimaryYAxisPh}/>
            </div>
        </div>
        )

};

export default Ph;