import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Modal from '../components/Modal';
import Navbar from '../components/Navbar';


const Home = () => {

    const [users, setUsers] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [data, setData] = useState('');

    const getUsers = async () => {
        try {
            await axios.get(`http://localhost:5000/user/all-user/`)
            .then(res => setUsers(res.data));
        } catch (error) {
            console.log(error);
        }
    }

    

    const deleteUser = async (id) => {

        try {
            await axios.delete(`http://localhost:5000/user/delete-user/${id}`)
            .then(res => {
                if (res.status === 200) {
                    alert('deleted successfully!');
                    getUsers();
                }
            });
        } catch (error) {
            console.log(error);
        }
    }

    const handleModal = (data) => {
       setShowModal(true);
       setData(data)
    }

    useEffect(()=>{
      getUsers();
    }, []);


  return (
    <>
    <Navbar />
    <div className='table-container'>
      <table>
        <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Age</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
                {
                    users?.map((item, i) => (
                        <tr key={item?._id}>
                        <td>{i+1}</td>
                        <td>{item?.name}</td>
                        <td>{item?.age}</td>
                        <td>
                            <button
                            onClick={()=>handleModal(item)}
                            >Update</button>
                            <button
                            onClick={()=> deleteUser(item?._id)}
                            >Delete</button>
                        </td>
                    </tr>
                        ))
                }
          
        </tbody>
      </table>
      {
        showModal? <Modal setShowModal={setShowModal} data={data} /> : null
      }
    </div>
    </>
  )
}

export default Home;
