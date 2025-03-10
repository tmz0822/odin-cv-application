import '../styles/Resume.css';

function GeneralInfo({ name, email, phone, toggleEdit, updateInfo }) {
  return (
    <section className="general-info">
      <h1 className="name">{name}</h1>
      <div>
        {email} | {phone}
      </div>
      <div className="buttons">
        <button onClick={toggleEdit}>Edit</button>
        <button onClick={() => updateInfo({})} className="warning">
          Remove
        </button>
      </div>
    </section>
  );
}

export default GeneralInfo;
