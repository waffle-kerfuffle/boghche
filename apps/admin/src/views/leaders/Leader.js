import React from 'react';
import {
    CCard, CCardBody, CCardHeader,
} from '@coreui/react'
import Tables from '../base/tables/Tables';
import { environment } from '../../environments/environment';
import * as leaderService from '../../services/api/LeaderService' ;
const Leader = () => {

        /**
     * @typedef column
     * @property { string } property
     * @property { label } label
     */
    
    /** @type { column[] } */
    const columnsData = [
        {
            property: 'name',
            label: "نام و نام خانوادگی",
        },
        {
            property: 'telno',
            label: "شماره تماس",
        },
    ]
    
    const url= environment.apiUrl + "/user/list";
    
    return (
            <div>
                <CCard>
                    <CCardHeader>
                        لیست لیدرها
                    </CCardHeader>
                    <CCardBody>
                                <Tables  serviceMethod={leaderService.list} columnsData={columnsData} url={url} type={'leader'}/>
                    </CCardBody>
                </CCard>
            </div>
    );
};

export default Leader;
