import React from 'react';
import {
    ChartComponent,
    SeriesCollectionDirective,
    SeriesDirective,
    Inject,
    LineSeries,
    DateTime,
    Legend,
    Tooltip,
    Category
} from '@syncfusion/ej2-react-charts';


import { useStateContext } from '../../contexts/ContextProvider';

const LineChart = (props) => {
  const { currentMode } = useStateContext();

  return (
      <ChartComponent
          id="line-chart"
          height="420px"
          primaryXAxis={props.XAxis}
          primaryYAxis={props.YAxis}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true }}
          background={currentMode === 'Dark' ? '#33373E' : '#fff'}
          legendSettings={{ background: 'white' }}
      >
        <Inject services={[LineSeries, DateTime, Legend,Category,Tooltip]} />
        <SeriesCollectionDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {props.lineCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
        </SeriesCollectionDirective>
      </ChartComponent>
  );
};

export default LineChart;
