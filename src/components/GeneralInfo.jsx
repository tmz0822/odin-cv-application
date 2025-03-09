import '../styles/GeneralInfo.css';

function GeneralInfo({ name, email, phone, toggleEdit }) {
  return (
    <div className="general-info">
      <h2>{name}</h2>
      <div>
        {email} | {phone}
      </div>
      <div className="buttons">
        <button onClick={toggleEdit}>Edit</button>
        <button className="warning">Remove</button>
      </div>
    </div>
  );
}

export default GeneralInfo;
