import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';
import {
    CCard, CCardBody, CCardHeader, CRow, CTable,
    CTableBody,
    CTableCaption,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
} from '@coreui/react'
import Tables from '../base/tables/Tables';
const Trip = () => {
    const tData = {  c1: 'title', c2: 'destinationType' , c3:'duration' , c4:'price' , c5:'capacity'};
    const tLable ={  c1: 'عنوان', c2: 'نوع تور', c3:'مدت زمان' , c4:'قیمت' , c5:'ظرفیت'}
    const url= "http://localhost:3333/api/tour/list";
    return (
        <>
            <div>
                <CCard>
                    <CCardHeader>
                        لیست تورها
                    </CCardHeader>
                    <CCardBody>
                                <Tables tData={tData}  tLable={tLable} url={url} type={'trip'}/>
                    </CCardBody>
                </CCard>
            </div>
        </>
    );
};

export default Trip;
