import React, { useState } from "react";

const SampleB = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { username, email, password, confirmPassword } = data;

  const handleChange = (e)=>{
    setData({...data,[e.target.name]: e.target.value})
  }

  const submitHandler=(e)=>{
    e.preventDefault();
    console.log("The data is :",data)

  }

  return <>
  <div className="formData">
    <h1>Form Data</h1>
    <form onSubmit={submitHandler}>
<input type="text" name="username" value={username} onChange={handleChange}/>  <br />
<input type="email" name="email" value={email} onChange={handleChange}/> <br />
<input type="password" name="password" value={password} onChange={handleChange}/> <br />
<input type="password" name="confirmPassword" value={confirmPassword} onChange={handleChange}/> <br />
<input type="submit" value="submit" />
    </form>

  </div>
  </>;
};
export default SampleB;
