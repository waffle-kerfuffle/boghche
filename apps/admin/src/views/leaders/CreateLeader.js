import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Formik, Field, Form } from 'formik';
import {
    CRow,
    CCard,
    CCardBody,
    CCardHeader,
    CForm,
    CCol,
    CFormInput,
    CInputGroup,
    CInputGroupText,
    CFormSelect,
    CFormCheck,
    CFormFeedback,
    CFormTextarea,
    CFormLabel,
    CButton,
    CSpinner,
} from '@coreui/react';
const CreateLeader = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const submitForm = data => {
        console.log(data);
        console.log(data.avatar[0].name);
        const inputData = {
            name: data.name,
            pass: data.pass,
            telno: data.telno,
            avatarUrl: data.avatar[0].name,
        }
        console.log(inputData);
        axios.post(`http://localhost:3333/api/user/create`, { inputData })
      .then(res => {
        console.log(res);
        console.log(res.data);
      }).catch(res => {
        //handle error
        console.log(res);
      });
    };
    return (
        <CCard className="mb-4">
            <CCardHeader>
                افزودن لیدر جدید
            </CCardHeader>
            <CCardBody>
                <form className="row" onSubmit={handleSubmit(submitForm)}>
                    <CCol md={4} className="mt-2">
                        <label htmlFor="name">نام و نام خانوادگی</label>
                        <input type="text" name="name" {...register('name', { required: true })} className="form-control" />
                        {errors.name && <small className="form-text text-danger">نام و نام خانوادگی اجباری است</small>}
                    </CCol>
                    <CCol md={4} className="mt-2">
                        <label htmlFor="telno">شماره تماس</label>
                        <input type="text" {...register('telno', { required: true })} className="form-control" />
                        {errors.telno && errors.telno.type === "required" && <small className="form-text text-danger">شماره تماس اجباری است</small>}
                    </CCol>
                    <CCol md={4} className="mt-2">
                        <label htmlFor="pass">رمز عبور</label>
                        <input type="password" {...register('pass', { required: true, minLength: 6 })} className="form-control" />
                        {errors.pass && errors.pass.type === "required" && <small className="form-text text-danger">رمز عبور اجباری است</small>}
                        {errors.pass && errors.pass.type === "minLength" && <small className="form-text text-danger">رمز عبور حداقل باید 6 کاراکتر داشته باشد</small>}
                    </CCol>

                    <CCol md={12} className="mt-2">
                        <label htmlFor="exampleFormControlTextarea1">بیوگرافی کوتاه</label>
                        <textarea className="form-control" name="bio" id="bio" rows="3" {...register('bio')}></textarea>
                    </CCol>
                    <CCol md={12} className="mt-2">

                        <div className="custom-file">
                            <label className="custom-file-label" htmlFor="avatar" data-browse="انتخاب" >انتخاب فایل</label>
                            <input type="file" className="custom-file-input form-control" name="avatar" id="avatar" {...register('avatar')} accept="image/jpg,image/png" />
                        </div>
                    </CCol>
                    <CCol className="mt-3">
                        <CButton color="primary" className='float-end' type="submit">
                            ثبت اطلاعات
                        </CButton>
                    </CCol>
                   
                </form>
            </CCardBody>
        </CCard>
    )
};

export default CreateLeader;