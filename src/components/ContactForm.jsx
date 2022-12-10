import { useState } from "react";
import axios from "axios";

export default function UserForm({ addContact }) {

  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    wheeler: "",
    phonenumber: "",
  });

  const handleChange = (event) => {
    setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
  };

  const handleSubmit =  (event) => {
    event.preventDefault();
    addContact(contactInfo); // here we are passing the contactInfo object to the addContact function
    setContactInfo({ name: "",wheeler:" ", email: "", phonenumber: "" });

    // submitting data to server
  // const resp=   fetch('http://localhost:5000/api/slots', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(contactInfo),
  // })
  // .then((response) => response.json())
 
//  axios({
//   method: 'post',
//   url: 'http://localhost:5000/api/slots',
//   headers: {
  
//     // Add any auth token here
//     authorization: "your token comes here",
//   },
//   data: contactInfo

//  }).then((res) => { })
  
//  // Catch errors if any
//  .catch((err) => { });



  };
  const fetchdata=(event)=>{


    fetch('http://localhost:5000/api/allvehical', {
      method: 'GET',
  }).then((response) => response.json())
   .then((data) => console.log(data));

   //print data on screen
   
   
      

  event.preventDefault();
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div>
          <h3>Parking Ticket-generating application
          </h3>
        </div>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Car Number"
            value={contactInfo.name}
            onChange={handleChange}
          />
        </div>
        <div>
        <select name="wheeler" value={contactInfo.wheeler}
            onChange={handleChange}  >
            <option  value="two wheeler" required={true} >Select</option>
            <option name="wheeler" value="two wheeler" required={true} >two wheeler</option>
            <option name="wheeler" value="three wheeler" required={true} >three wheeler</option>
            <option name="wheeler" value="four wheeler"  required={true} >four wheeler</option>
            <option name="wheeler" value="heavy wheeler"  required={true} >heavy wheeler</option>
        </select>
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={contactInfo.email}
            onChange={handleChange}

          />
        </div>
        <div>
          <input
            type="number"
            name="phonenumber"
            placeholder="Phone Number"
            value={contactInfo.phonenumber}
            onChange={handleChange}

          />
        </div>
        <div>
          <button >Submit </button>
        </div>
      </form>
      <div>
        <button onClick={fetchdata}> Fetch</button>
      </div>
    </div>
    
  );
}


