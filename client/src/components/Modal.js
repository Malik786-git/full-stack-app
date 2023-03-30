import axios from "axios";
import { useState } from "react";

const Modal = ({setShowModal, data}) => {

    const [userField, setUserField] = useState({
        name: data.name,
        age: data.age,
      });
    
      const handleInputs = (e) => {
        setUserField({ ...userField, [e.target.name]: e.target.value });
      };

    const updateUser = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/user/update-user/${data._id}`, userField)
            .then(res => {
                if (res.status === 201) {
                    alert('updated successfully');
                    setShowModal(false);
                }
            })
        } catch (error) {
            console.log(error);
        }

    }


  return (
    <div className="modal-wrapper">
       <span className="close"
       onClick={()=> setShowModal(false)}
       >X</span>
       <div className="form-container">
        <form>
            <input
            type="text"
            placeholder="Enter Name"
            name= "name"
            value={userField.name}
            onChange={handleInputs}
          />
          <br />
          <br />
          <input
            type="number"
            placeholder="Enter Age"
            name= "age"
            value={userField.age}
            onChange={handleInputs}
          />
          <br />
          <br />
          <button
          onClick={updateUser}
          >Submit</button>
        </form>
       </div>
    </div>
  )
}

export default Modal
