import React from 'react';

import { ChartsHeader, LineChart } from '../components/';
import { lineCustomSeries, LinePrimaryXAxis, LinePrimaryYAxis } from '../data/dummy';

const Temperature = () => (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
        <ChartsHeader category="Line" title="Inflation Rate" />
        <div className="w-full">
            <LineChart lineCustomSeries = {lineCustomSeries} XAxis = {LinePrimaryXAxis} YAxis={ LinePrimaryYAxis} />
        </div>
    </div>
);

export default Temperature;
