import React from 'react';
import {
    CCard, CCardBody, CCardHeader,
} from '@coreui/react'
import Tables from '../base/tables/Tables';
import { environment } from '../../environments/environment';
import * as leaderService from '../../services/api/LeaderService' ;
const Leader = () => {
    const tData = {  c1: 'name', c2: 'telno' };
    const tLable ={  c1: 'نام و نام خانوادگی', c2: 'شماره تماس' }
    
    const url= environment.apiUrl + "/user/list";
    
    return (
            <div>
                <CCard>
                    <CCardHeader>
                        لیست لیدرها
                    </CCardHeader>
                    <CCardBody>
                                <Tables serviceMethod={leaderService.list} tData={tData}  tLable={tLable} url={url} type={'leader'}/>
                    </CCardBody>
                </CCard>
            </div>
    );
};

export default Leader;
