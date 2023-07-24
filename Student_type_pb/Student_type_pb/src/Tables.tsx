/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import './Tables.css';
import pocketbase from 'pocketbase';
import { useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const pb = new pocketbase('http://127.0.0.1:8090');

export type StudentManagemantRecord = {

  id?: any
  fullname?: string
  gender?: string
  age?: number
  faculty?: string
  department?: string
  email?: string
  mobile?: number
  checkbox?: boolean
}

export default function Tables() {
  const [data, setData] = useState<StudentManagemantRecord[]>([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response: AxiosResponse<{ items: StudentManagemantRecord[] }> = await axios.get('http://127.0.0.1:8090/api/collections/student_managemant/records');
      setData(response.data.items);

    } catch (error:any) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const datadelete = async (recordId: any)=> {
    // try {
    // const response = await axios.delete(`http://127.0.0.1:8090/api/collections/student_managemant/records/${id}`);
    // if(response){
    //   fetchData()
    // }
    try {
      if (recordId) {
        await pb.collection('student_managemant').delete(recordId);
        console.log('Record deleted successfully');
        window.location.reload();
      } else {
        console.error('Invalid recordId:', recordId);
      }
    } catch (error) {
      console.error('Error deleting record:', error);
    }
  };


  const handleform = () => {
    navigate('/');
  }



  return (
    <>
      <div>
        <button onClick={handleform} className='form_button'>Add<FontAwesomeIcon icon={faPlus}/></button>
      </div>
      <div className='table_main_container'>
        <div className='table_sub_container'>
          <table>
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Gender</th>
                <th>Age</th>
                <th>Faculty</th>
                <th>Department</th>
                <th>E-Mail</th>
                <th>Mobile</th>
                <th>Update</th>
                <th>Reject</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.fullname}</td>
                  <td>{item.gender}</td>
                  <td>{item.age}</td>
                  <td>{item.faculty}</td>
                  <td>{item.department}</td>
                  <td>{item.email}</td>
                  <td>{item.mobile}</td>
                  <td>
                    <Link to={`/${item.id}`}>
                      <button className="edit_button">Update</button>
                    </Link>
                  </td>
                  <td>
                    <button className="delete_button"
                      onClick={() => { datadelete(item.id) }}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
      </div>
    </>
  )
}
