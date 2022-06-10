import React from 'react';
import TripDetail from '../trips/TripDetail';
import { useLocation, Link, useNavigate } from "react-router-dom";
import LeaderDetail from '../leaders/LeaderDetail';
import {
    CButton,
    CCardFooter ,
    CCard, CCardBody, CCardHeader
} from '@coreui/react';

const Details = ({ props }) => {
    const location = useLocation();
    const state = location.state;
    const navigate = useNavigate();  // make const

    console.log(state);
    return (
        <div>
            {state == 'trip' && <TripDetail />}
            {state == 'leader' && <LeaderDetail />}
            {/* <button onClick={() => history.goBack()}>Back</button> */}
            <CButton color="primary" className='mt-3 text-center float-end' onClick={() => navigate(-1)}>
                {'بازگشت'}
            </CButton>
             
        </div>
    );
};

export default Details;

