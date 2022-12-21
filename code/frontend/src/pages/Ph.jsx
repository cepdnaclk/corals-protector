import React from 'react';

import { ChartsHeader, LineChart } from '../components/';
import { lineCustomSeriesPh, LinePrimaryXAxisPh, LinePrimaryYAxisPh } from '../data/dummy';

const Ph = () => (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
        <ChartsHeader category="Line" title="pH" />
        <div className="w-full">
            <LineChart lineCustomSeries = {lineCustomSeriesPh} XAxis = {LinePrimaryXAxisPh} YAxis={ LinePrimaryYAxisPh} />
        </div>
    </div>
);

export default Ph;