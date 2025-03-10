import FormField from './FormField';

function EducationInfoForm({ handleSubmit }) {
  function handleClear() {}

  return (
    <form action={handleSubmit}>
      <h2>Education Information</h2>
      <FormField name="name" label="School/University Name" />
      <FormField name="titleOfStudy" label="Title of study" />
      <FormField name="startDate" label="Start Date" type="month" />
      <FormField name="endDate" label="End Date" type="month" />
      <button type="submit">Submit</button>
      <button onClick={handleClear}>Clear</button>
    </form>
  );
}

export default EducationInfoForm;
