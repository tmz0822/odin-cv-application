import { useState } from 'react';
import '../styles/Resume.css';
import EditableGeneralInfo from './EditableGeneralInfo';
import GeneralInfo from './GeneralInfo';

function Resume({ generalInfo, updateInfo }) {
  const { name, email, phone } = generalInfo;

  const [isEditingGeneralInfo, setIsEditingGeneralInfo] = useState(false);

  const toggleEdit = () => {
    setIsEditingGeneralInfo(!isEditingGeneralInfo);
  };

  return (
    <div className="resume">
      <h1>General Information</h1>
      <div>
        {isEditingGeneralInfo ? (
          <EditableGeneralInfo
            generalInfo={generalInfo}
            updateInfo={updateInfo}
            toggleEdit={toggleEdit}
          />
        ) : (
          <GeneralInfo
            name={name}
            email={email}
            phone={phone}
            toggleEdit={toggleEdit}
          />
        )}
      </div>
    </div>
  );
}

export default Resume;
