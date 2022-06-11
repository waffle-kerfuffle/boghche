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

import * as tourService from '../../services/api/tourService' ;

const Trip = () => {

    // /**
    //  * @typedef column
    //  * @property { string } property
    //  * @property { label } label
    //  */
    
    // /** @type { column[] } */
    // const columns = [
    //     {
    //         property: 'title',
    //         label: "عنوان",
    //     },
    // ]
    
    const tData = { c1: 'title', c2: 'destinationType', c3: 'duration', c4: 'price', c5: 'capacity' };
    const tLable = { c1: 'عنوان', c2: 'نوع تور', c3: 'مدت زمان', c4: 'قیمت', c5: 'ظرفیت' };

    return (
        <>
            <div>
                <CCard>
                    <CCardHeader>
                        لیست تورها
                    </CCardHeader>
                    <CCardBody>
                        <Tables serviceMethod={tourService.list} tData={tData} tLable={tLable} type={'trip'} />
                    </CCardBody>
                </CCard>
            </div>
        </>
    );
};

export default Trip;
