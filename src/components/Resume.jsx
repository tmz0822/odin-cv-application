import { useState } from 'react';
import '../styles/Resume.css';
import EditableGeneralInfo from './EditableGeneralInfo';
import GeneralInfo from './GeneralInfo';

function Resume({ generalInfo, updateInfo }) {
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
            updateInfo={updateInfo}
            toggleEdit={toggleEditGeneralForm}
          />
        ) : (
          <GeneralInfo
            name={name}
            email={email}
            phone={phone}
            toggleEdit={toggleEditGeneralForm}
            updateInfo={updateInfo}
          />
        )}
      </div>
      <hr />
      <h2 className="title">Education</h2>

      <hr />
      <h2 className="title">Practical Experience</h2>
    </div>
  );
}

export default Resume;
