import React from 'react';

import { ChartsHeader, LineChart } from '../components/';
import { lineCustomSeriesLight, LinePrimaryXAxisLight, LinePrimaryYAxisLight } from '../data/dummy';

const Light = () => (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
        <ChartsHeader category="Line" title="Light intensity" />
        <div className="w-full">
            <LineChart lineCustomSeries = {lineCustomSeriesLight} XAxis = {LinePrimaryXAxisLight} YAxis={ LinePrimaryYAxisLight} />
        </div>
    </div>
);

export default Light;