import React from 'react';
import { AiOutlineStock } from 'react-icons/ai';
import { AiOutlineHome } from 'react-icons/ai';
import { TbDeviceHeartMonitor } from 'react-icons/tb';
import { BsTable } from 'react-icons/bs';
import { GiWaveSurfer } from 'react-icons/gi';


export const LinePrimaryXAxis = {
  valueType: 'DateTime',
  labelFormat: 'y',
  intervalType: 'Years',
  edgeLabelPlacement: 'Shift',
  majorGridLines: { width: 0 },
  background: 'white',
};

export const LinePrimaryXAxisPh = {
  valueType: "Category",
  title:"Reading",
  edgeLabelPlacement: 'Shift',
  majorGridLines: { width: 0 },
  background: 'white',

};
export const LinePrimaryXAxisLight = {
  valueType: 'Category',
  labelFormat: 'y',
  title:"Reading",
  edgeLabelPlacement: 'Shift',
  majorGridLines: { width: 0 },
  background: 'white',

};
export const LinePrimaryXAxisTemperature = {
  valueType: "Category",
  title:"Reading",
  labelFormat: 'y',
  edgeLabelPlacement: 'Shift',
  majorGridLines: { width: 0 },
  background: 'white',
};



export const LinePrimaryYAxis = {
  labelFormat: '{value}%',
  rangePadding: 'None',
  minimum: 0,
  maximum: 14,
  interval: 2,
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
};

export const LinePrimaryYAxisPh = {
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
export const LinePrimaryYAxisTemperature = {
  labelFormat: '{value} °C',
  rangePadding: 'None',
  minimum: 0,
  maximum: 60,
  interval: 6,
  title:"Temperature",
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
};
export const LinePrimaryYAxisLight = {
  labelFormat: '{value}',
  rangePadding: 'None',
  title:"Light Intensity",
  minimum: 0,
  maximum: 5000,
  interval: 500,
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
};





export const links = [
  {
    title: 'Main',
    links: [
      {
        name: 'Home',
        icon: <AiOutlineHome />,
      },
      {
        name: 'AboutUs',
        icon: <GiWaveSurfer />,
      },
    ],
  },
  {
    title: 'Table',
    links: [
      {
        name: 'MainTable',
        icon: <BsTable />,
      },
    ],
  },


  {
    title: 'Charts',
    links: [
      {
        name: 'Ph',
        icon: <AiOutlineStock />,
      },
      {
        name: 'Light',
        icon: <AiOutlineStock />,
      },
      {
        name: 'Temperature',
        icon: <AiOutlineStock />,
      },
    ],
  },
  {
    title: 'Others',
    links: [
      {
        name: 'ContactUs ',
        icon: <AiOutlineHome />,
      },
      {
        name: 'ResetPassword',
        icon: <GiWaveSurfer />,
      },
    ],
  },
];


export const themeColors = [
  {
    name: 'blue-theme',
    color: '#1A97F5',
  },
  {
    name: 'green-theme',
    color: '#03C9D7',
  },
  {
    name: 'purple-theme',
    color: '#7352FF',
  },
  {
    name: 'red-theme',
    color: '#FF5C8E',
  },
  {
    name: 'indigo-theme',
    color: '#1E4DB7',
  },
  {
    color: '#FB9678',
    name: 'orange-theme',
  },
];


export const readingsGrid = [

  {
    field: 'Date',
    headerText: 'Date',
    width: '150',
    textAlign: 'Center',
  },
  {
    field: 'Device',
    headerText: 'Device',
    width: '150',
    textAlign: 'Center',
  },
  { field: 'Location',
    headerText: 'Location',
    width: '150',
    textAlign: 'Center',
  },
  {
    field: 'Ph',
    headerText: 'Ph',
    textAlign: 'Center',
    width: '150',
  },
  {
    headerText: 'Light Intensity',
    field: 'Sunlight',
    textAlign: 'Center',
    width: '120',
  },
  {
    field: 'Temperature',
    headerText: 'Temperature',
    width: '120',
    textAlign: 'Center',
  },

];



export const readingsData = [
  {
    Date: '10.12.2022',
    Location: '10.101.21102.1',
    Ph: 5,
    Sunlight: 56,
    Temperature: 10,

  },
  {
    Date: '10.12.2022',
    Location: '10.101.21102.1',
    Ph: 5,
    Sunlight: 56,
    Temperature: 10,

  },
  {
    Date: '10.12.2022',
    Location: '10.101.21102.1',
    Ph: 5,
    Sunlight: 56,
    Temperature: 10,

  },
  {
    Date: '10.12.2022',
    Location: '10.101.21102.1',
    Ph: 5,
    Sunlight: 56,
    Temperature: 10,

  },
  {
    Date: '10.12.2022',
    Location: '10.101.21102.1',
    Ph: 5,
    Sunlight: 56,
    Temperature: 10,

  },
  {
    Date: '10.12.2022',
    Location: '10.101.21102.1',
    Ph: 5,
    Sunlight: 56,
    Temperature: 10,

  },
  {
    Date: '10.12.2022',
    Location: '10.101.21102.1',
    Ph: 5,
    Sunlight: 56,
    Temperature: 10,

  },
  {
    Date: '10.12.2022',
    Location: '10.101.21102.1',
    Ph: 5,
    Sunlight: 56,
    Temperature: 10,

  },
  {
    Date: '10.12.2022',
    Location: '10.101.21102.1',
    Ph: 5,
    Sunlight: 56,
    Temperature: 10,

  },
  {
    Date: '10.12.2022',
    Location: '10.101.21102.1',
    Ph: 5,
    Sunlight: 56,
    Temperature: 10,

  },
  {
    Date: '10.12.2022',
    Location: '10.101.21102.1',
    Ph: 5,
    Sunlight: 56,
    Temperature: 10,

  },
  {
    Date: '10.12.2022',
    Location: '10.101.21102.1',
    Ph: 5,
    Sunlight: 56,
    Temperature: 10,

  },
  {
    Date: '10.12.2022',
    Location: '10.101.21102.1',
    Ph: 5,
    Sunlight: 56,
    Temperature: 10,

  },
  {
    Date: '10.12.2022',
    Location: '10.101.21102.1',
    Ph: 5,
    Sunlight: 56,
    Temperature: 10,

  },
  {
    Date: '10.12.2022',
    Location: '10.101.21102.1',
    Ph: 5,
    Sunlight: 56,
    Temperature: 10,

  },
  {
    Date: '10.12.2022',
    Location: '10.101.21102.1',
    Ph: 5,
    Sunlight: 56,
    Temperature: 10,

  },
  {
    Date: '10.12.2022',
    Location: '10.101.21102.1',
    Ph: 5,
    Sunlight: 56,
    Temperature: 10,

  },
  {
    Date: '10.12.2022',
    Location: '10.101.21102.1',
    Ph: 5,
    Sunlight: 56,
    Temperature: 10,

  },
  {
    Date: '10.12.2022',
    Location: '10.101.21102.1',
    Ph: 5,
    Sunlight: 56,
    Temperature: 10,

  },
  {
    Date: '10.12.2022',
    Location: '10.101.21102.1',
    Ph: 5,
    Sunlight: 56,
    Temperature: 10,

  },
  {
    Date: '10.12.2022',
    Location: '10.101.21102.1',
    Ph: 5,
    Sunlight: 56,
    Temperature: 10,

  },
  {
    Date: '10.12.2022',
    Location: '10.101.21102.1',
    Ph: 5,
    Sunlight: 56,
    Temperature: 10,

  },
    ]





export const lineChartData = [
  [
    { Reading: '1', Ph: 0 }, { Reading: '2', Ph: 1 },
    { Reading: '3', Ph: 3 }, { Reading: '4', Ph: 3 },
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
export const lineChartDataTemperature = [
  [
    { x: 1, y: 0 },
    { x: 2, y: 20 },
    { x: 3, y: 36 },
    { x: 4, y: 48 },
    { x: 5, y: 50 },
    { x: 6, y: 55 },
    { x: 7, y: 58 },
  ],
  [
    { x: 1, y: 8 },
    { x: 2, y: 12 },
    { x: 3, y: 40 },
    { x: 4, y: 32 },
    { x: 5, y: 26 },
    { x: 6, y: 30 },
    { x: 7, y: 45 },
  ],

  [
    { x: 1, y: 1 },
    { x: 2, y: 15 },
    { x: 3, y: 26 },
    { x: 4, y: 34 },
    { x: 5, y: 22 },
    { x: 6, y: 45 },
    { x: 7, y: 60 },
  ],
];

export const lineChartDataLight = [
  [
    { x: 1, y: 0 },
    { x: 2, y: 20 },
    { x: 3, y: 36 },
    { x: 4, y: 48 },
    { x: 5, y: 60 },
    { x: 6, y: 55 },
    { x: 7, y: 80 },
  ],
  [
    { x: 1, y: 8 },
    { x: 2, y: 12 },
    { x: 3, y: 40 },
    { x: 4, y: 60 },
    { x: 5, y: 70 },
    { x: 6, y: 90 },
    { x: 7, y: 100 },
  ],

  [
    { x: 1, y: 1 },
    { x: 2, y: 15 },
    { x: 3, y: 26 },
    { x: 4, y: 50 },
    { x: 5, y: 22 },
    { x: 6, y: 45 },
    { x: 7, y: 20 },
  ],
];



export const lineCustomSeries = [
  { dataSource: lineChartData[0],
    xName: 'x',
    yName: 'y',
    name: 'Germany',
    width: '2',
    marker: { visible: true, width: 10, height: 10 },
    type: 'Line' },

  { dataSource: lineChartData[1],
    xName: 'x',
    yName: 'y',
    name: 'England',
    width: '2',
    marker: { visible: true, width: 10, height: 10 },
    type: 'Line' },

  { dataSource: lineChartData[2],
    xName: 'x',
    yName: 'y',
    name: 'India',
    width: '2',
    marker: { visible: true, width: 10, height: 10 },
    type: 'Line' },

];

export const lineCustomSeriesLight = [
  { dataSource: lineChartDataLight[0],
    xName: 'x',
    yName: 'y',
    name: '10.101.21102.1',
    width: '2',
    marker: { visible: true, width: 10, height: 10 },
    type: 'Line' },

  { dataSource: lineChartDataLight[1],
    xName: 'x',
    yName: 'y',
    name: '10.101.25222.1',
    width: '2',
    marker: { visible: true, width: 10, height: 10 },
    type: 'Line' },

  { dataSource: lineChartDataLight[2],
    xName: 'x',
    yName: 'y',
    name: '10.101.26532.1',
    width: '2',
    marker: { visible: true, width: 10, height: 10 },
    type: 'Line' },

];

export const lineCustomSeriesTemperature = [
  { dataSource: lineChartDataTemperature[0],
    xName: 'x',
    yName: 'y',
    name: '10.101.21102.1',
    width: '2',
    marker: { visible: true, width: 10, height: 10 },
    type: 'Line' },


  { dataSource: lineChartDataTemperature[1],
    xName: 'x',
    yName: 'y',
    name: '10.101.25222.1',
    width: '2',
    marker: { visible: true, width: 10, height: 10 },
    type: 'Line' },

  { dataSource: lineChartDataTemperature[2],
    xName: 'x',
    yName: 'y',
    name: '10.101.21102.1',
    width: '2',
    marker: { visible: true, width: 10, height: 10 },
    type: 'Line' },

];

export const lineCustomSeriesPh = [
  { dataSource: lineChartData[0],
    xName: 'Reading',
    yName: 'Ph',
    name: 'Location1',
    width: '2',
    marker: { visible: true, width: 10, height: 10 },
    type: 'Line'  },

  { dataSource: lineChartData[1],
    xName: 'Reading',
    yName: 'Ph',
    name: 'Location2',
    width: '2',
    marker: { visible: true, width: 10, height: 10 },
    type: 'Line' },

  { dataSource: lineChartData[2],
    xName: 'Reading',
    yName: 'Ph',
    name: 'Location3',
    width: '2',
    marker: { visible: true, width: 10, height: 10 },
    type: 'Line'  },

];


export const contextMenuItems = [
  'AutoFit',
  'AutoFitAll',
  'SortAscending',
  'SortDescending',
  'Copy',
  'Edit',
  'Delete',
  'Save',
  'Cancel',
  'PdfExport',
  'ExcelExport',
  'CsvExport',
  'FirstPage',
  'PrevPage',
  'LastPage',
  'NextPage',
];











