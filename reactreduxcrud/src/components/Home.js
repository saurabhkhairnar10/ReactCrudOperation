import React from "react";
import { useDispatch, useSelector} from "react-redux";
import { Link } from "react-router-dom";
import Add from "./Add";
import '../css/Home.css';

function Home() {
  const contacts = useSelector((state) => {
    return state;
  });

  const dispatch = useDispatch();

  const DeleteContact = (id)=>{
      dispatch({type:"DELETECONTACT",payload:id});
      alert(`deleted id ${id} successfully`);
  }

  
  return (
    <>
      
      <table className="table table-hover mx-1 border border-secondary">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">EMAIL</th>
            <th scope="col">CONTACT NO</th>
            <th scope="col">ACTION</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, id) => {
            
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.phone}</td>
                <td>
                  <Link
                    to={`/edit/${contact.id}`}
                    className="btn btn-sm btn-primary"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    className="btn btn-sm btn-danger ml-1"
                    onClick={()=>{
                      DeleteContact(contact.id)
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button type="button" className="btn btn-outline-success btncss"><Link to="/Add" className="text-decoration-none text-dark">Add Contact page</Link></button>
    </>
  );
}

export default Home;
