import { useState } from 'react';
import '../styles/Resume.css';

function EditableGeneralInfo({ generalInfo, updateInfo, toggleEdit }) {
  const [editedInfo, setEditedInfo] = useState(generalInfo);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setEditedInfo((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateInfo(editedInfo);
    toggleEdit();
  };

  return (
    <form className="general-info" onSubmit={handleSubmit}>
      <input
        name="name"
        label="Name"
        onChange={handleChange}
        value={editedInfo.name}
      />
      <div>
        <input
          type="email"
          name="email"
          label="Email"
          onChange={handleChange}
          value={editedInfo.email}
        />
        <input
          type="tel"
          name="phone"
          label="Phone number"
          onChange={handleChange}
          value={editedInfo.phone}
        />
      </div>
      <div className="buttons">
        <button type="submit">Save</button>
        <button onClick={toggleEdit}>Cancel</button>
      </div>
    </form>
  );
}

export default EditableGeneralInfo;
