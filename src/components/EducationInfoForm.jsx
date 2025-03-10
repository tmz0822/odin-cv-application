import { useState } from 'react';
import FormField from './FormField';

function EducationInfoForm({ handleEducationFormSubmit }) {
  const [education, setEducation] = useState({
    name: '',
    titleOfStudy: '',
    startDate: '',
    endDate: '',
  });

  function handleClear(e) {
    e.preventDefault();
    clearInputs();
  }

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setEducation((values) => ({ ...values, [name]: value }));
  }

  function handleSubmit(formData) {
    handleEducationFormSubmit(formData);
    clearInputs();
  }

  function clearInputs() {
    setEducation({
      name: '',
      titleOfStudy: '',
      startDate: '',
      endDate: '',
    });
  }

  return (
    <form action={handleSubmit}>
      <h2>Education Information</h2>
      <FormField
        name="name"
        label="School/University Name"
        value={education.name}
        onChange={handleChange}
      />
      <FormField
        name="titleOfStudy"
        label="Title of study"
        value={education.titleOfStudy}
        onChange={handleChange}
      />
      <FormField
        name="startDate"
        label="Start Date"
        type="month"
        value={education.startDate}
        onChange={handleChange}
      />
      <FormField
        name="endDate"
        label="End Date"
        type="month"
        value={education.endDate}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
      <button type="reset" onClick={handleClear}>
        Clear
      </button>
    </form>
  );
}

export default EducationInfoForm;
