import React, {useContext, useEffect, useState} from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject ,Search,Toolbar} from '@syncfusion/ej2-react-grids';

import { ordersData, contextMenuItems, ordersGrid , readingsData ,readingsGrid } from '../data/dummy';
import { Header } from '../components';
import axios from "axios";
import {AuthContext} from "../contexts/AuthContext";




const MainTable = () => {
    const [readings, setReadings] = useState([]);
    const {user} = useContext(AuthContext)

    useEffect(() => {
        const fetchDevices = async () => {
            const res = await axios.get("/reading/allreadings/"+user._id)
            setReadings(res.data);
        };
        fetchDevices();
    }, []);
    return (
        <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
            <Header category="" title="Main Table" />
            <GridComponent
                id="gridcomp"
                dataSource={readings}
                allowPaging
                allowSorting
                allowExcelExport
                allowPdfExport
                contextMenuItems={contextMenuItems}
                toolbar = {['Search']}
                width = 'auto'
            >
                <ColumnsDirective>
                    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                    {readingsGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
                </ColumnsDirective>
                <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport,Search ,Toolbar]} />
            </GridComponent>
        </div>
    );
};
export default MainTable;
