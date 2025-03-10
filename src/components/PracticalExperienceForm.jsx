import FormField from './FormField';
import plusSvg from '../assets/plus-solid.svg';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function PracticalExperienceForm({ handlePracticalExperienceFormSubmit }) {
  const [responsibility, setResponsibility] = useState('');
  const [responsibilities, setResponsibilities] = useState([]);

  function handleAddResponsibility() {
    const newResponsibilities = responsibilities.concat(responsibility);
    setResponsibilities(newResponsibilities);

    // Clear input after add
    setResponsibility('');
  }

  function handleResponsibilityChange(e) {
    setResponsibility(e.target.value);
  }

  function handleSubmit(formData) {
    const practicalExperience = {
      id: uuidv4(),
      name: formData.get('name'),
      position: formData.get('position'),
      startDate: formData.get('startDate'),
      endDate: formData.get('endDate'),
      responsibilities: responsibilities,
    };
    handlePracticalExperienceFormSubmit(practicalExperience);

    clearInputs();
  }

  function clearInputs() {
    setResponsibility('');
    setResponsibilities([]);
  }

  return (
    <form className="add-responsibility-form" action={handleSubmit}>
      <h2>Practical Experience</h2>
      <FormField label="Company Name" name="name" />
      <FormField label="Position" name="position" />
      <FormField label="Start Date" name="startDate" type="month" />
      <FormField label="End Date" name="endDate" type="month" />

      <div className="responsibilities">
        <FormField
          label="Responsibilities"
          name="responsibility"
          value={responsibility}
          onChange={handleResponsibilityChange}
        />
        <button
          onClick={handleAddResponsibility}
          type="button"
          className="add-responsibility-button"
        >
          <img src={plusSvg} alt="Add responsibility" />
        </button>
      </div>

      {responsibilities.length > 0 && (
        <ul>
          {responsibilities.map((responsibility, index) => (
            <li key={index}>{responsibility}</li>
          ))}
        </ul>
      )}
      <button type="submit">Submit</button>
      <button type="reset" onClick={clearInputs}>
        Clear
      </button>
    </form>
  );
}

export default PracticalExperienceForm;
