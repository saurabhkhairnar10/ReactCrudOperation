import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Edit() {
  const { id } = useParams();
  const history = useHistory();
  const contacts = useSelector((state) => {
    return state;
  });
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [handle,setHandle]= useState({
    name:'',
    email:'',
    phone:''
  })

  console.log('--handle',handle);

  const onchangehandler = (e) =>{
    const {target :{
      value ,name
    }} = e
    setHandle({
      ...handle,
      [name]:value
    })
  }
  // const handleName = (e) => {
  //   return setName(e.target.value);
  // };
  // const handleEmail = (e) => {
  //   return setEmail(e.target.value);
  // };
  // const handlePhone = (e) => {
  //   return setPhone(e.target.value);
  // };

  const currentContact = contacts.find((contact) => {
    return contact.id === parseInt(id);
  });
  console.log("current contact", currentContact);
  useEffect(() => {
    setName(currentContact.name);
    setEmail(currentContact.email);
    setPhone(currentContact.phone);
  }, [currentContact]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("contacts", contacts);
    const checkName = contacts.filter((contact) => {
      return contact.name === name ? contact : null;
    });
    const checkEmail = contacts.filter((contact) => {
      return contact.email === email ? contact : null;
    });
    const checkPhone = contacts.filter((contact) => {
      return contact.phone === parseInt(phone) ? contact : null;
    });
    console.log("phone", checkName, checkEmail, checkPhone);
    // if(checkName.length > 0){
    //    alert("This name is already exist");
    // }
    // if(checkEmail.length > 0){
    //    alert("This email is already exist");
    // }
    // if(checkPhone.length > 0){
    //    alert("This phone no is already exist");
    // }
    // let id = contacts.map((contact)=>{return contact['id']});
    // console.log("id",id);
    const data = {
      id: parseInt(id),
      email,
      name,
      phone,
    };
    console.log("data edited", data);
    dispatch({ type: "UPDATECONTACT", payload: data });
    alert("contact is updated");
    history.push("/");
  };

  console.log("id", id, currentContact);
  return (
    <div className="container">
      {currentContact ? (
        <>
          <h1 className="text-center">Id {id} exists</h1>
          <div className="col-md-6 mx-auto shadow p-5">
            <form>
              <div className="form-group">
                <input
                  className="form-control"
                  name="name"
                  value={handle.name}
                  placeholder={"Name"}
                  onChange={onchangehandler}
                  required
                />
                <p className="err-msg">
                  {
                    //  (((name.length < 5) && (name.length >12))?"length should be between 5 to 12":((!/\S+@\S+\.\S+/.test(name))?"name format is not match":null))
                    name &&
                    !/^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/.test(
                      name
                    ) ? (
                      <div className="text-white bg-warning mt-1" role="alert">
                        "Please Enter Your username with proper validated
                        format"
                      </div>
                    ) : null
                  }
                </p>
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  value={handle.email}
                  name="email"
                  placeholder={"Email"}
                  onChange={onchangehandler}
                  required
                />
                <p className="err-msg">
                  {email &&
                    (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
                      email
                    ) ? (
                      <p className="text-white bg-warning mt-1" role="alert">
                        "Please Enter Email address with proper validation "
                      </p>
                    ) : null)}
                </p>
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  value={handle.phone}
                  name="phone"
                  placeholder={"Phone"}
                  onChange={onchangehandler}
                />
                {phone &&
                  (!/^[789]\d{9}$/.test(phone) ? (
                    <p className="text-white bg-warning mt-1" role="alert">
                      "Enter valid 10 digit Phone Number"
                    </p>
                  ) : null)}
              </div>
              <div className="form-group d-flex align-items-center justify-content-between my-2">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={handleSubmit}
                >
                  Update Contact
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => history.push("/")}
                >
                  cancel
                </button>
              </div>
            </form>
          </div>
        </>
      ) : (
        <h1 className="text-center">Id {id} does not exists</h1>
      )}
    </div>
  );
}

export default Edit;
