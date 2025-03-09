function GeneralInfo({ name, email, phone }) {
  return (
    <div className="general-info">
      <h1>General Information</h1>
      <h2>{name}</h2>
      <div>
        {email} | {phone}
      </div>
      <div className="buttons">
        <button>Edit</button>
        <button>Remove</button>
      </div>
    </div>
  );
}

export default GeneralInfo;
