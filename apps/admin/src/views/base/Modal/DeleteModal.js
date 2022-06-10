import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CSmartTable } from '@coreui/react-pro';
import {
  CCard,
  CCardBody,
  CButton,
  CSpinner,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CCollapse,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react';
const DeleteModal = ({visible,rowDetail}) => {
    //const [visible, setVisible] = useState(true)
    console.log("visible in component: ", visible);
    console.log("rowDetail in component: ", rowDetail);
    return (
        <>
        <CModal visible={visible}>
            <CModalHeader>
                {/* /<CModalTitle>حذف</CModalTitle> */}
            </CModalHeader>
            <CModalBody>
                آیا از حدف این مورد مطمئن هستید؟
            </CModalBody>
            <CModalFooter className='cil-align-left'>
                <CButton size="sm" color="secondary" >
                    انصراف
                </CButton>
                <CButton size="sm" color="danger"> حذف</CButton>
            </CModalFooter>
        </CModal>
        </>
    );
};

export default DeleteModal;