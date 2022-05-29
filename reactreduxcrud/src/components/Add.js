import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";


import "../css/Add.css";

function Add() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [handle,setHandle] = useState({
    name:'',
    email:'',
    phone:''
  });
  console.log("...handle",handle);

  const onChangeHandle = (e) => {
    const { target : {
      name, value
    }} = e
    setHandle({
      ...handle,
      [name] :value
    })
  }


  const handleName = (e) =>{ return setName(e.target.value)};
  const handleEmail = (e) =>{ return setEmail(e.target.value)};
  const handlePhone = (e) =>{ return setPhone(e.target.value)};

  const contacts = useSelector((state)=>{return state});
  const dispatch = useDispatch();
  const history = useHistory();
  console.log("contacts",contacts)
  
  const handleSubmit = (e) => {
    console.log("evnt",e);
    e.preventDefault();
    console.log("contacts sub",contacts,e);
    const checkName = contacts.filter((contact)=>{return (contact.name === name)?contact:null});
    const checkEmail = contacts.filter((contact)=>{return (contact.email === email)?contact:null});
    const checkPhone = contacts.filter((contact)=>{return (contact.phone ===parseInt(phone))?contact:null});
    console.log("phone",checkName,checkEmail,checkPhone);
    if(checkName.length > 0){
       alert("This name is already exist");
    }
    if(checkEmail.length > 0){
       alert("This email is already exist");
    }
    if(checkPhone.length > 0){
       alert("This phone no is already exist");
    }
    // let id = contacts.map((contact)=>{return contact['id']});
    // console.log("id",id);
    const data = {
      id:contacts.length > 0 ? parseInt(contacts[contacts.length - 1].id + 1) : 0,
      email,
      name,
      phone
    };
    console.log("data",data);
    dispatch({type:"ADDCONTACT",payload:data});
    alert("contact is added successfully");
    history.push('/');
  }


  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();
  // const onSubmit = (data) => {
  //   console.log("data", data['Email']);
  //   console.log("email", data['password']);
  //   console.log("contact",contacts);
  //   if(data['Email'] && data['contact']){
  //   const checkName = contacts.filter((contact)=>{return (contact.name === name)?contact:null});
  //   const checkEmail = contacts.filter((contact)=>{return (contact.email === email)?contact:null});
  //   const checkPhone = contacts.filter((contact)=>{return (contact.phone ===parseInt(phone))?contact:null});
  //   console.log("phone",checkName,checkEmail,checkPhone);
  //   if(checkName.length > 0){
  //      alert("This name is already exist");
  //   }
  //   if(checkEmail.length > 0){
  //      alert("This email is already exist");
  //   }
  //   if(checkPhone.length > 0){
  //      alert("This phone no is already exist");
  //   }
  //  let id = contacts.map((contact)=>{return contact['id']});
  //  console.log("id",id);
  //   const data = {
  //     id:contacts.length > 0 ? parseInt(contacts[contacts.length - 1].id + 1) : 0,
  //     email,
  //     name,
  //     phone
  //   };
  //   console.log("data",data);
  //   dispatch({type:"ADDCONTACT",payload:data});
  //   alert("contact is added successfully");
  //     history.push('');
  //   }
  // };


  return (
    <div>
      <div className="card shadow-sm border-0 px-3 rounded-2 mb-3 py-4 mx-auto mt-5 bg-light">
        <div className="card-header bg-transparent border-0 text-center text-uppercase">
          <h3>CONTACT FORM</h3>
        </div>
        <div className="card-body">
          <form encType="multipart/form-data" autoComplete="off" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="mb-1 float-start">
                USERNAME
              </label>
              <input
                name="name"
                type="text"
                className="form-control"
                placeholder="Name"
                value={handle.name}
                onChange ={onChangeHandle}
                // onChange={handleName}
                required
                // {...register("Email", {
                  // required: true,
                  // pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  // pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
                // })}
              />
             <div className="err-msg">{
              //  (((name.length < 5) && (name.length >12))?"length should be between 5 to 12":((!/\S+@\S+\.\S+/.test(name))?"name format is not match":null))
           handle.name &&  (!/^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/.test(handle.name))?
            <div className="text-white bg-warning mt-1" role='alert'>
            "Please Enter Your username with proper validated format"
           </div>
            :null
             }</div>

              {/* <p className="err-msg">
          {" "}
          {errors.Email?.type === "required" && "Email is required"}
        </p>
        <p className="err-msg">
          {" "}
          {errors.Email?.type === "pattern" && "Email pattern is not matched"}
        </p> */}
            </div>
            <div className="form-group">
              <label className="mt-2 float-start">
                EMAIL ID<span className="text-danger"></span>
              </label>
              <input
                name="Email"
                type="email"
                className="form-control"
                placeholder="Email"
                value={handle.email}
                onChange ={onChangeHandle}
                // onChange={handleEmail}
                required
                // {...register("Email", {
                  // required: true,
                  // pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  // pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
                // })}
              />

             <p className="err-msg">
               {
              handle.email && (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(handle.email)?
               <p className="text-white bg-warning mt-1" role='alert'>
               "Please Enter Email address with proper validation "
              </p>:null)
               }
            </p>
            </div>
            <div className="form-group">
              <label className="mb-0 float-start">PHONE NO</label>
              <input
                name="contact"
                type="text"
                className="form-control"
                placeholder="Contact"
                value={handle.phone}
                // onChange={handlePhone}
                onChange ={onChangeHandle}
                required
                // {...register("contact", {
                  // required: true,
                  // minLength: 3,
                  // maxLength: 10,
                // })}
              />
           {
           handle.phone && (!/^[789]\d{9}$/.test(handle.phone)?
            <p className="text-white bg-warning mt-1" role='alert'>
            "Enter valid 10 digit Phone Number"
           </p>:null)
           }
          {/* <p className="err-msg">
            {" "}
            {errors.password?.type === "required" && "Password is required"}
          </p>
          <p className="err-msg">
            {" "}
            {errors.password?.type === "minLength" && "Minimum Length is 3"}
          </p>
          <p className="err-msg">
            {" "}
            {errors.password?.type === "maxLength" && "Maximum Length is 10"}
          </p> */}

          
            </div>
            <button className="btn btn-dark mt-2 active width" type="submit">Add</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Add;
