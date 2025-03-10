import FormField from './FormField';
import plusSvg from '../assets/plus-solid.svg';
import { useState } from 'react';

function PracticalExperienceForm() {
  const [responsibility, setResponsibility] = useState('');
  const [responsibilities, setResponsibilities] = useState([]);

  console.log(responsibilities);

  function handleAddResponsibility() {
    const newResponsibilities = responsibilities.concat(responsibility);
    setResponsibilities(newResponsibilities);

    // Clear input after add
    setResponsibility('');
  }

  function handleResponsibilityChange(e) {
    setResponsibility(e.target.value);
  }

  return (
    <form className="add-responsibility-form">
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
      <button>Clear</button>
    </form>
  );
}

export default PracticalExperienceForm;
