import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './style.css'

function App() {
  const  [contacts,setContacts] = useState([]);
  
  useEffect(()=>{
    fetch("https://randomuser.me/api/?results=9")
  .then(response => response.json())
  .then(data => {
    console.log(data);
    setContacts(data.results);
  });
    

  },[]);
  
  const ContactCard = props=>{
    const [showAge,setShowAge]=useState(false);
   
    return(
      <div className="contact-card">
      <img src={props.avatar} alt="profile" />
      <div className="user-details">
        <p>Name: {props.name}</p>
        <p>Email: {props.email}</p>
        {showAge && <p>Age: {props.age}</p> }
        <button onClick={()=>setShowAge(!showAge)}>Show age</button>

      </div>
    </div>

    )

  }

  return (
   <>
   {contacts.map(contact =>(
    <ContactCard 
    avatar="https://via.placeholder.com/150"
    name={contact.name.first + ""+contact.name.last}
    email={contact.email}
    age={contact.dob.age}
    />
   ))}
   </>
  );

  
}

export default App;
