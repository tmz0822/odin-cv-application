import { useState } from 'react';
import GeneralInfoForm from './components/GeneralInfoForm';
import './styles/App.css';
import Resume from './components/Resume';
import EducationInfoForm from './components/EducationInfoForm';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '+1 (123) 456-7890',
  });
  const [educations, setEducations] = useState([
    {
      id: 1,
      name: 'University of California, Los Angeles (UCLA)',
      titleOfStudy: 'Bachelor of Science in Computer Science',
      startDate: '2018-09',
      endDate: '2022-06',
    },
    {
      id: 2,
      name: 'Greenwood High School',
      titleOfStudy: 'High School Diploma',
      startDate: '2014-09',
      endDate: '2018-06',
    },
  ]);
  const [practicalExperiences, setPracticalExperiences] = useState([]);

  function handleEducationFormSubmit(formData) {
    const name = formData.get('name');
    const titleOfStudy = formData.get('titleOfStudy');
    const startDate = formData.get('startDate');
    const endDate = formData.get('endDate');

    const id = uuidv4();
    const newEducation = [
      ...educations,
      { id, name, titleOfStudy, startDate, endDate },
    ];
    setEducations(newEducation);

    console.log(newEducation);
  }

  function updateEducationInfo(newInfo) {
    const newEducation = educations.map((education) => {
      if (education.id === newInfo.id) {
        return newInfo;
      } else {
        return education;
      }
    });
    setEducations(newEducation);
  }

  function removeEducationInfo(id) {
    const newEducation = educations.filter((education) => education.id !== id);
    setEducations(newEducation);
  }

  const handleGeneralInfoFormSubmit = (e, inputs) => {
    e.preventDefault();
    const { name, email, phone } = inputs;
    setGeneralInfo({ name, email, phone });
  };

  const updateGeneralInfo = (editedInfo) => {
    setGeneralInfo(editedInfo);
  };

  return (
    <div className="container">
      <header>
        <h1>CV builder</h1>
      </header>
      <main>
        <div className="forms">
          <GeneralInfoForm handleSubmit={handleGeneralInfoFormSubmit} />
          <EducationInfoForm handleSubmit={handleEducationFormSubmit} />
        </div>

        <Resume
          generalInfo={generalInfo}
          updateGeneralInfo={updateGeneralInfo}
          educations={educations}
          updateEducationInfo={updateEducationInfo}
          removeEducationInfo={removeEducationInfo}
        />
      </main>
    </div>
  );
}

export default App;

