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
import { environment } from '../../environments/environment';
const Leader = () => {
    const tData = {  c1: 'name', c2: 'telno' };
    const tLable ={  c1: 'نام و نام خانوادگی', c2: 'شماره تماس' }
    
    const url= environment.apiUrl + "/user/list";
    
    return (
        <>
            <div>
                <CCard>
                    <CCardHeader>
                        لیست لیدرها
                    </CCardHeader>
                    <CCardBody>
                                <Tables tData={tData}  tLable={tLable} url={url} type={'leader'}/>
                    </CCardBody>
                </CCard>
            </div>
        </>
    );
};

export default Leader;
