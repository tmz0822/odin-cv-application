import { useState } from 'react';
import GeneralInfoForm from './components/GeneralInfoForm';
import './styles/App.css';
import Resume from './components/Resume';

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '+1 (123) 456-7890',
  });
  const [education, setEducation] = useState([]);
  const [practicalExperience, setPracticalExperience] = useState([]);

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
        <div>
          <GeneralInfoForm handleSubmit={handleGeneralInfoFormSubmit} />
        </div>

        <Resume generalInfo={generalInfo} updateInfo={updateGeneralInfo} />
      </main>
    </div>
  );
}

export default App;

