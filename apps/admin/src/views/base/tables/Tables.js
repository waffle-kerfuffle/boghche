import React, { useState, useEffect } from "react";
import axios from "axios";
import { CSmartTable } from "@coreui/react-pro";
import { Link } from "react-router-dom";
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
} from "@coreui/react";
import DeleteModal from "../Modal/DeleteModal";

/**
 * @typedef ColumnDef
 * @property {string} property
 * @property {string} label
 */

/**
 * @param { {serviceMethod: Function , columnsData: ColumnDef[] } } param0
 */
const Tables = ({ serviceMethod, columnsData, type }) => {
  const [users, setUsers] = useState([]);
  ///delete modal show/hide
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const newData = await serviceMethod();
      setUsers(newData);
    };

    fetchData();
  }, [serviceMethod]);

  const columns = [];
  let index;
  index = {
    key: "index",
    name: "index",
    label: "ردیف",
    filter: false,
    sorter: false,
    _style: { width: "6%" },
    _props: { color: "primary", className: "fw-semibold text-center" },
  };
  columns.push(index);

  columns.push(
    ...columnsData.map((element) => ({
      key: element.property,
      name: element.property,
      label: element.label,
      _props: { color: "primary", className: "fw-semibold text-center" },
    }))
  );
  columns.push({
    key: "show_details",
    label: "جزئیات",
    filter: false,
    sorter: false,
    _props: { color: "primary", className: "fw-semibold text-center" },
  });
  columns.push({
    key: "show_operations",
    label: "عملیات",
    filter: false,
    sorter: false,
    _style: { width: "150px" },
    _props: { color: "primary", className: "fw-semibold text-center" },
  });

  if (users.length !== 0) {
    return (
      <>
        <CCard>
          <CCardBody>
            <CSmartTable
              items={users}
              pagination
              noItemsLabel="موردی یافت نشد"
              itemsPerPageSelect={{
                label: "تعداد در هر صفحه",
                values: [5, 10, 20, 50],
              }}
              //tableFilter
              columnFilter
              //activePage={3}
              // cleaner
              // clickableRows
              columns={columns}
              //itemsPerPageSelect
              // itemsPerPage={5}
              tableProps={{
                hover: true,
                responsive: true,
              }}
              paginationProps={{
                itemsperpageselect: {
                  label: "تعداد:",
                  values: [5, 10, 20, 50],
                },
              }}
              scopedColumns={{
                index: (item) => {
                  return <td>{item._id + 1}</td>;
                },
                show_details: (item) => {
                  return (
                    <td>
                      <Link to="/Details" state={type}>
                        <CButton
                          color="primary"
                          variant="outline"
                          className="text-center"
                          size="sm"
                        >
                          {"جزییات"}
                        </CButton>
                      </Link>
                    </td>
                  );
                },
                show_operations: (item) => {
                  return (
                    <td>
                      <CButton
                        color="success"
                        variant="outline"
                        className="me-2 text-center"
                        size="sm"
                        onClick={() => {
                          //toggleDetails(item._id)
                        }}
                      >
                        {"تایید"}
                      </CButton>
                      <CButton
                        color="danger"
                        variant="outline"
                        className="ms-2 text-center"
                        size="sm"
                        onClick={() => {
                          setVisible(!visible);

                          console.log("visible after on click: ", visible);
                        }}
                      >
                        {"حذف"}
                      </CButton>
                    </td>
                  );
                },
              }}
            />
          </CCardBody>
        </CCard>
        <CModal
          visible={visible}
          onClose={() => setVisible(false)}
          backdrop={"static"}
        >
          <CModalHeader>{/* <CModalTitle>حذف</CModalTitle> */}</CModalHeader>
          <CModalBody className="text-sm">
            آیا از حدف این مورد مطمئن هستید؟
          </CModalBody>
          <CModalFooter className="cil-align-left">
            <CButton
              size="sm"
              color="secondary"
              className="text-white"
              onClick={() => setVisible(false)}
            >
              انصراف
            </CButton>
            <CButton size="sm" className="text-white" color="danger">
              {" "}
              حذف
            </CButton>
          </CModalFooter>
        </CModal>
        {/* <DeleteModal visible={visible} onClose={() => setVisible(false)} rowDetail={rowDetail}/> */}
      </>
    );
  } else {
    return (
      <CButton disabled>
        <CSpinner
          component="span"
          size="sm"
          variant="grow"
          aria-hidden="true"
        />
        در حال دریافت اطلاعات..
      </CButton>
    );
  }
};

export default Tables;
