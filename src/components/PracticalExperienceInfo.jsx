import { useState } from 'react';
import Responsibility from './Responsibility';

function PracticalExperienceInfo({ experience, updatePracticalExperience }) {
  const [isEditing, setIsEditing] = useState(false);

  const formatter = new Intl.DateTimeFormat('default', {
    month: 'long',
    year: 'numeric',
  });

  const formattedStartDate = formatter.format(
    new Date(experience.startDate + '-01')
  );

  const formattedEndDate = formatter.format(
    new Date(experience.endDate + '-01')
  );

  function handleSubmit(formData) {
    const newExperience = {
      id: experience.id,
      name: formData.get('name'),
      position: formData.get('position'),
      startDate: formData.get('startDate'),
      endDate: formData.get('endDate'),
      responsibilities: experience.responsibilities,
    };
    updatePracticalExperience(newExperience);
    setIsEditing(false);
  }

  function updateResponsibility(index, newResponsibility) {
    const newResponsibilities = experience.responsibilities.map(
      (responsibility, i) => {
        if (index === i) {
          return newResponsibility;
        } else {
          return responsibility;
        }
      }
    );

    const newExperience = {
      ...experience,
      responsibilities: newResponsibilities,
    };
    updatePracticalExperience(newExperience);
  }

  return (
    <>
      <div className="practical-experience">
        {!isEditing ? (
          <div className="top-section">
            <div>
              <h2>{experience.name}</h2>
              <div>
                <i>{experience.position}</i>
              </div>
              <div>
                <i>
                  {formattedStartDate} - {formattedEndDate}
                </i>
              </div>
            </div>

            <div className="buttons">
              <button onClick={() => setIsEditing(!isEditing)}>Edit</button>
              <button className="warning">Remove</button>
            </div>
          </div>
        ) : (
          <form className="editable-top-section" action={handleSubmit}>
            <div>
              <input name="name" defaultValue={experience.name} />
              <input name="position" defaultValue={experience.position} />
              <div className="date">
                <input
                  name="startDate"
                  type="month"
                  defaultValue={experience.startDate}
                />
                -
                <input
                  name="endDate"
                  type="month"
                  defaultValue={experience.endDate}
                />
              </div>
            </div>

            <div className="buttons">
              <button type="submit">Save</button>
              <button type="button" onClick={() => setIsEditing(!isEditing)}>
                Cancel
              </button>
            </div>
          </form>
        )}

        <ul className="responsibility-list">
          {experience.responsibilities.map((responsibility, index) => (
            <Responsibility
              key={index}
              index={index}
              initialResponsibility={responsibility}
              updateResponsibility={updateResponsibility}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

export default PracticalExperienceInfo;
