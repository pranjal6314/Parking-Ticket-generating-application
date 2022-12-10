import  "./card.css";
export default function UserList({contacts}) {
    return (
      <div className="bx">
        {contacts.map((contact) => (
          <div className="card" key={contact.phonenumber}>
            <h3>Parked Vehicle Information </h3>
            {/* <h5>Vehicle Number :- ${int i=0}</h5> */}
            <p className="card-name">{contact.name}</p>
            <p>{contact.wheeler}</p>
            <p>{contact.email}</p>
            <p>{contact.phonenumber}</p>
          </div>
        ))}
      </div>
    );
  }