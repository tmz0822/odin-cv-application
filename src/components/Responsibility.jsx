import { useState } from 'react';

function Responsibility({
  index,
  initialResponsibility,
  updateResponsibility,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [responsibility, setResponsibility] = useState(initialResponsibility);

  function handleResponsibilityChange(e) {
    setResponsibility(e.target.value);
  }

  function handleSave() {
    updateResponsibility(index, responsibility);
    setIsEditing(!isEditing);
  }

  return (
    <li className="responsibility">
      {!isEditing ? (
        <div className="content">
          <span>{responsibility}</span>

          <div className="buttons">
            <button onClick={() => setIsEditing(!isEditing)} className="edit">
              ✎
            </button>
            <button className="warning">❌</button>
          </div>
        </div>
      ) : (
        <div className="content editable">
          <input
            type="text"
            name="responsibility"
            value={responsibility}
            onChange={handleResponsibilityChange}
          />
          <div className="buttons">
            <button onClick={handleSave}>Save</button>
            <button onClick={() => setIsEditing(!isEditing)}>Cancel</button>
          </div>
        </div>
      )}
    </li>
  );
}

export default Responsibility;
