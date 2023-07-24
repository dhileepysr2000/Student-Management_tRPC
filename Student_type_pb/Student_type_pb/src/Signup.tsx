import './Form.css';
import axios, {  AxiosResponse } from 'axios';
import * as yup from "yup";
import pic from './anna.png';
import { useState } from 'react'
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { yupResolver } from "@hookform/resolvers/yup";

export type StudentManagemantRecord = {
	fullname?: string
	gender?: string
	age?: number
	faculty?: string
	department?: string
	email?: string
	mobile?: number
	checkbox?: boolean
}

export type CollectionResponses = {
	student_managemant: StudentManagemantRecord
}
  
const valuecheck = yup.object().shape({
    fullname: yup.string().required("Enter the Full Name"),
    age: yup.number().integer().positive().min(18, 'Above 18years students only apply').required("Enter the age"),
    email: yup.string().email().required("Enter the E - Mail"),
    gender: yup.string().required("Enter the Any One Gender"),
    mobile: yup.number().integer().positive().required("Enter the Mobile Number"),
    checkbox: yup.boolean().oneOf([true], 'Please agree to book the career counseling session'),
    faculty: yup.string().required("Please choose one Field"),
    department: yup.string().required("Please choose one Field"),
});

export default function Signup() {

    const { register, handleSubmit, formState: { errors, isValid, isDirty }, reset } = useForm<StudentManagemantRecord>({ resolver: yupResolver(valuecheck) })
    const [, setErrorMessage] = useState<string>();
    const navigate = useNavigate()
    const handleregister: SubmitHandler<StudentManagemantRecord> = async (data: StudentManagemantRecord)=> {
        try {
            const response:AxiosResponse<CollectionResponses> = await axios.post('http://127.0.0.1:8090/api/collections/student_managemant/records', data);
            if (response.status === 201) {
                console.log('Registration successful');
            }
            console.log(response.data);
            reset();
            navigate('/tables');
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        catch (error:any) {
            console.log(error);
            if (error.response) {
                setErrorMessage(error.response.data.message);
            } else {
                setErrorMessage('An error occurred during signup');
            }
        }
    };
    return (
        <>
            <form onSubmit={handleSubmit(handleregister)} >
                <div className='main_container'>
                    <div className='sub_container'>
                        <div className='flex_head'>
                            <div className='summa'>
                                <div className='box1'></div>
                                <div className='box1'></div>
                                <div className='box1'></div>
                            </div>
                            <img src={pic} className='image_head' alt="Anna University" />
                            <h3 className='text_head'>Anna University</h3>
                        </div>
                        <div className='head_container'>
                            <h3 className='in_text'>Registration Form</h3>
                            <div className='inside_container'>
                                <div className='inside_inner'>
                                    <div className='first_container'>
                                        <h2 className='first_head'>Personal Information</h2>

                                        <label className='fullname_label'>Full Name</label>
                                        <input type='text' {...register("fullname")} className='fullname' name='fullname' id='fullname' />
                                        <p className='error_style'>{errors.fullname?.message && errors.fullname.message.toString()}</p>
                                        <div>&nbsp;</div>

                                        <label className='gender_label'>Gender</label>
                                        <div className='common_gender'>
                                            <div className='common_male'>
                                                <input type='radio' {...register("gender")} value="male" className='gender' name='gender' id='gender' />
                                                <label className='gender_male'>Male</label>
                                            </div>
                                            <div className='common_female'>
                                                <input type='radio' {...register("gender")} value="female" className='gender' name='gender' id='gender' />
                                                <label className='gender_female'>Female</label>
                                            </div>
                                            <p className='error_style'>{errors.gender?.message && errors.gender.message.toString()}</p>
                                        </div>
                                        <div>&nbsp;</div>

                                        <label className='age_label'>Age</label>
                                        <input type='text'  {...register('age')} className='age' name='age' id='age' />
                                        <p className='error_style'>{errors.age?.message && errors.age.message.toString()}</p>

                                        <h2 className='first_head'>University Details</h2>
                                        <label className='faculty_label'>Faculty</label>
                                        <select className='faculty' {...register("faculty")}>
                                            <option disabled={!isValid && isDirty}>select any one</option>
                                            <option>HOD</option>
                                            <option>Assistan Professor</option>
                                            <option >Techinical Staff</option>
                                        </select>
                                        <p className='error_style'>{errors.faculty?.message && errors.faculty.message.toString()}</p>
                                        <div>&nbsp;</div>

                                        <label className='faculty_label'>Deparment</label>
                                        <select className='faculty' {...register("department")}>
                                            <option disabled={!isValid && isDirty} >select any one</option>
                                            <option>CIVIL</option>
                                            <option>MECH</option>
                                            <option>ECE</option>
                                        </select>
                                        <p className='error_style'>{errors.department?.message && errors.department.message.toString()}</p>
                                    </div>

                                    <div className='second_container'>
                                        <h2 className='first_head'>Contact Information</h2>

                                        <label className='email_label'>E-mail</label>
                                        <input type='text'  {...register("email")} className='email' name='email' id='email' />
                                        <p className='error_style'>{errors.email?.message && errors.email.message.toString()}</p>
                                        <div>&nbsp;</div>

                                        <label className='mobile_label'>Mobile Number</label>
                                        <input type='text'  {...register("mobile")} className='mobile' name='mobile' id='mobile' />
                                        <p className='error_style'>{errors.mobile?.message && errors.mobile.message.toString()}</p>

                                        <h2 className='first_head'>Career Counseling Service</h2>
                                        <p className='career_head'>Career counseling is a 45 - minutes free
                                            service provided by Cario University to advise students on the best
                                            career choices.</p>

                                        <div className='checkbox_div'>
                                            <div>
                                                <p className='checkbox_head'>I want to book the career counseling
                                                    session</p>
                                            </div>
                                            <div>
                                                <input type='checkbox' {...register("checkbox")} className='checkbox' name='checkbox'
                                                    id='checkbox' />
                                                <p className='error_style'> {errors.checkbox?.message && errors.checkbox.message.toString()}</p>
                                            </div>
                                        </div>
                                        <div>&nbsp;</div>
                                        <button className='button_submit'>Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}
