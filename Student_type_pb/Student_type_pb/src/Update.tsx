import './Form.css';
import axios, { AxiosResponse } from 'axios';
import pic from './anna.png';
import { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from 'react-router-dom';
import { StudentManagemantRecord } from './Signup';

interface Student {
    fullname: string;
    age: string;
    email: string;
    mobile: string;
    male: string;
    female: string;
    faculty: string;
    department: string;
    checkbox: string;
}

export type CollectionResponses = {
    student_managemant: StudentManagemantRecord
}

export default function Update() {

    const { handleSubmit, reset } = useForm<Student>({})
    const navigate = useNavigate()
    const { id } = useParams();

    const [student, setStudent] = useState<Student>({
        fullname: '',
        age: '',
        email: '',
        mobile: '',
        male: '',
        female: '',
        faculty: '',
        department: '',
        checkbox: ''
    });

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get<Student>(`http://127.0.0.1:8090/api/collections/student_managemant/records/${id}`);
                setStudent(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, [id]);

    const handleInput = (value: Partial<Student>) => {
        setStudent({ ...student, ...value })
    }
    // partial is a subset of properties and values defined by original object it commonly used in update

    const updateRecord = async () => {
        try {
            const response: AxiosResponse<CollectionResponses> = await axios.patch(`http://127.0.0.1:8090/api/collections/student_managemant/records/${id}`, student);
            if (response) {
                setStudent({
                    fullname: '',
                    age: '',
                    email: '',
                    mobile: '',
                    male: '',
                    female: '',
                    faculty: '',
                    department: '',
                    checkbox: '' 
                     // ' ' its denoted as a after page completed the inputs take empty
                })
            }
            reset()
            navigate('/tables');
        }
        catch (errors) {
            console.log(errors);
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit(updateRecord)} >
                <div className='main_container'>
                    <div className='sub_container'>
                        <div className='flex_head'>
                            <div className='summa'>
                                <div className='box1'></div>
                                <div className='box1'></div>
                                <div className='box1'></div>
                            </div>
                            <img src={pic} className='image_head' />
                            <h3 className='text_head'>Anna University</h3>
                        </div>
                        <div className='head_container'>
                            <h3 className='in_text'>Edit Form</h3>
                            <div className='inside_container'>
                                <div className='inside_inner'>
                                    <div className='first_container'>
                                        <h2 className='first_head'>Personal Information</h2>

                                        <label className='fullname_label'>Full Name</label>
                                        <input type='text' value={student.fullname} onChange={e => handleInput({ fullname: e.target.value })} className='fullname' name='fullname' id='fullname' />
                                        <div>&nbsp;</div>

                                        <label className='gender_label'>Gender</label>
                                        <div className='common_gender'>
                                            <div className='common_male'>
                                                <input type='radio' value={student.male} onChange={e => handleInput({ male: e.target.value })} className='gender' name='gender' id='gender' />
                                                <label className='gender_male'>Male</label>
                                            </div>
                                            <div className='common_female'>
                                                <input type='radio' value={student.female} onChange={e => handleInput({ female: e.target.value })} className='gender' name='gender' id='gender' />
                                                <label className='gender_female'>Female</label>
                                            </div>
                                        </div>
                                        <div>&nbsp;</div>

                                        <label className='age_label'>Age</label>
                                        <input type='text' value={student.age} onChange={e => handleInput({ age: e.target.value })} className='age' name='age' id='age' />

                                        <h2 className='first_head'>University Details</h2>
                                        <label className='faculty_label'>Faculty</label>
                                        <select className='faculty' value={student.faculty} onChange={e => handleInput({ faculty: e.target.value })}>
                                            <option></option>
                                            <option>HOD</option>
                                            <option>Assistan Professor</option>
                                            <option >Techinical Staff</option>
                                        </select>
                                        <div>&nbsp;</div>

                                        <label className='faculty_label'>Deparment</label>
                                        <select className='faculty' value={student.department} onChange={e => handleInput({ department: e.target.value })}>
                                            <option></option>
                                            <option>CIVIL</option>
                                            <option>MECH</option>
                                            <option>ECE</option>
                                        </select>
                                    </div>

                                    <div className='second_container'>
                                        <h2 className='first_head'>Contact Information</h2>

                                        <label className='email_label'>E-mail</label>
                                        <input type='text' value={student.email} onChange={e => handleInput({ email: e.target.value })} className='email' name='email' id='email' />
                                        <div>&nbsp;</div>

                                        <label className='mobile_label'>Mobile Number</label>
                                        <input type='text' value={student.mobile} onChange={e => handleInput({ mobile: e.target.value })} className='mobile' name='mobile' id='mobile' />

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
                                                <input type='checkbox' value={student.checkbox} onChange={e => handleInput({ checkbox: e.target.value })} className='checkbox' name='checkbox' id='checkbox' />
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


