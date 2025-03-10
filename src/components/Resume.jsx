import { useState } from 'react';
import '../styles/Resume.css';
import EditableGeneralInfo from './EditableGeneralInfo';
import GeneralInfo from './GeneralInfo';
import EducationInfo from './EducationInfo';

function Resume({
  generalInfo,
  updateGeneralInfo,
  educations,
  updateEducationInfo,
  removeEducationInfo,
}) {
  const { name, email, phone } = generalInfo;

  const [isEditingGeneralInfo, setIsEditingGeneralInfo] = useState(false);

  const hasGeneralInfo = Object.keys(generalInfo).length > 0;

  const toggleEditGeneralForm = () => {
    setIsEditingGeneralInfo(!isEditingGeneralInfo);
  };

  return (
    <div className="resume">
      {!hasGeneralInfo && <div>Empty</div>}
      <div>
        {isEditingGeneralInfo ? (
          <EditableGeneralInfo
            generalInfo={generalInfo}
            updateInfo={updateGeneralInfo}
            toggleEdit={toggleEditGeneralForm}
          />
        ) : (
          <GeneralInfo
            name={name}
            email={email}
            phone={phone}
            toggleEdit={toggleEditGeneralForm}
            updateInfo={updateGeneralInfo}
          />
        )}
      </div>
      <hr />
      <h2 className="title">Education</h2>
      <section className="education">
        {educations.map((education) => (
          <EducationInfo
            key={education.id}
            education={education}
            updateEducationInfo={updateEducationInfo}
            removeEducationInfo={removeEducationInfo}
          />
        ))}
      </section>
      <hr />
      <h2 className="title">Practical Experience</h2>
      <section className="experience"></section>
    </div>
  );
}

export default Resume;
