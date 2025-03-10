import { useState } from 'react';

function EducationInfo({
  education,
  updateEducationInfo,
  removeEducationInfo,
}) {
  const formatter = new Intl.DateTimeFormat('default', {
    month: 'long',
    year: 'numeric',
  });
  const [isEditing, setIsEditing] = useState(false);

  function handleSubmit(formData) {
    updateEducationInfo({
      id: education.id,
      name: formData.get('name'),
      titleOfStudy: formData.get('titleOfStudy'),
      startDate: formData.get('startDate'),
      endDate: formData.get('endDate'),
    });
    setIsEditing(false);
  }

  return (
    <div className="education-info">
      {isEditing ? (
        <form className="editable-content" action={handleSubmit}>
          <input type="text" name="name" defaultValue={education.name} />
          <input
            type="text"
            name="titleOfStudy"
            defaultValue={education.titleOfStudy}
          />
          <input
            type="month"
            name="startDate"
            defaultValue={education.startDate}
          />
          <input type="month" name="endDate" defaultValue={education.endDate} />
          <button type="submit">Save</button>
          <button onClick={() => setIsEditing(!isEditing)}>Cancel</button>
        </form>
      ) : (
        <>
          <div className="content">
            <h2>{education.name}</h2>
            <div>
              <i>{education.titleOfStudy}</i>
            </div>
            <div>
              <i>
                {formatter.format(new Date(education.startDate + '-01'))} -{' '}
                {formatter.format(new Date(education.endDate + '-01'))}
              </i>
            </div>
          </div>
          <div className="buttons">
            <button onClick={() => setIsEditing(!isEditing)}>Edit</button>
            <button
              onClick={() => removeEducationInfo(education.id)}
              className="warning"
            >
              Remove
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default EducationInfo;
