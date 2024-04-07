import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ViTextInput from "../../components/ViTextInput";
import ViPasswordInput from "../../components/ViPasswordInput";
import { validateEmail } from "../../utils/common";
import { v4 as uuidv4 } from 'uuid';
import axios from  "axios";

const AddUser = () => {
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    age: "",
    city: "",
  });


  const handleInputChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value })
  }

  const [errorMsg, setErrMsg] = useState({
    username: "",
    password: "",
    email: "",
    age: "",
    city: "",
  });

  const validateForm = () => {
    let isValid = true;
    const err = { ...errorMsg };
    if (user.username === '') {
      err.username = 'Username is required';
      isValid = false
    } else {
      err.username = '';
    }
    if (user.password === '') {
      err.password = 'Password is required';
      isValid = false;
    } else {
      err.password = '';
    }
    if (user.email === '') {
      err.email = 'Email is required';
      isValid = false
    } else if (!validateEmail(user.email)) {
      err.email = 'Email is not valid';
      isValid = false
    } else {
      err.email = '';
    }
    if (user.age === '') {
      err.age = 'Age is required';
      isValid = false
    } else {
      err.age = '';
    }
    if (user.city === '') {
      err.city = 'City is required';
      isValid = false
    } else {
      err.city = '';
    }
    setErrMsg(err);
    return isValid;
  }

  const saveForm = () => {
    const uuid = uuidv4();
    if (validateForm()) {
      const item = { ...user, id: uuid };
      console.log("user :", item);
      axios.post('http://localhost:4000/users', item)
        .then(() => {
          console.log("user saved");
          navigate('/user-management');
        }).catch((err) => {
          console.log(err);
          alert("Server Error");
        })
    }
  }
  return (
    <div>
      <h2>Add User</h2>
      <ViTextInput
        title='Username'
        name='username'
        value={user.username}
        handleInputChange={handleInputChange}
        isSubmitted={isSubmitted}
        errMessage='Username is required'
      />
      <ViPasswordInput
        title='Password'
        name='password'
        value={user.password}
        handleInputChange={handleInputChange}
        isSubmitted={isSubmitted}
        errMessage='Password is required'
      />
      <ViTextInput
        title='Email'
        name='email'
        value={user.email}
        handleInputChange={handleInputChange}
        isSubmitted={isSubmitted}
        errMessage='Email is required'
      />
      <ViTextInput
        title='Age'
        name='age'
        value={user.age}
        handleInputChange={handleInputChange}
        isSubmitted={isSubmitted}
        errMessage='Age is required'
      />
      <ViTextInput
        title='City'
        name='city'
        value={user.city}
        handleInputChange={handleInputChange}
        isSubmitted={isSubmitted}
        errMessage='Username is required'
      />


      <div>
        <button onClick={saveForm} className="btn">Save</button>
      </div>
    </div>
  );
}

export default AddUser;