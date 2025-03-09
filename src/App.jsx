import { useState } from 'react';
import GeneralInfoForm from './components/GeneralInfoForm';
import './styles/App.css';
import Resume from './components/Resume';
import EducationInfoForm from './components/EducationInfoForm';

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '+1 (123) 456-7890',
  });
  const [education, setEducation] = useState([]);
  const [practicalExperience, setPracticalExperience] = useState([]);

  function handleEducationFormSubmit(formData) {
    const name = formData.get('name');
    const titleOfStudy = formData.get('titleOfStudy');
    const startDate = formData.get('startDate');
    const endDate = formData.get('endDate');
    const newEducation = [
      ...education,
      { name, titleOfStudy, startDate, endDate },
    ];
    console.log(newEducation);
    setEducation(newEducation);
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

        <Resume generalInfo={generalInfo} updateInfo={updateGeneralInfo} />
      </main>
    </div>
  );
}

export default App;

