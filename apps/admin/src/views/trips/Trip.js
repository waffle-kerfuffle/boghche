import React from 'react';
import {
    CCard, CCardBody, CCardHeader
} from '@coreui/react'
import Tables from '../base/tables/Tables';

//import * as tourService from '../../services/api/tourService' ;
import * as tripService from '../../services/api/TripService'

const Trip = () => {

    /**
     * @typedef column
     * @property { string } property
     * @property { label } label
     */
    
    /** @type { column[] } */
    const columnsData = [
        {
            property: 'title',
            label: "عنوان",
        },
        {
            property: 'destinationType',
            label: "نوع تور",
        },
        {
            property: 'duration',
            label: "مدت زمان",
        },
        {
            property: 'price',
            label: "قیمت",
        },
        {
            property: 'capacity',
            label: "ظرفیت",
        },
    ]
    
    // const tData = { c1: 'title', c2: 'destinationType', c3: 'duration', c4: 'price', c5: 'capacity' };
    // const tLable = { c1: 'عنوان', c2: 'نوع تور', c3: 'مدت زمان', c4: 'قیمت', c5: 'ظرفیت' };

    return (
    
            <div>
                <CCard>
                    <CCardHeader>
                        لیست تورها
                    </CCardHeader>
                    <CCardBody>
                        <Tables serviceMethod={tripService.list} columnsData={columnsData} type={'trip'} />
                    </CCardBody>
                </CCard>
            </div>
        
    );
};

export default Trip;
