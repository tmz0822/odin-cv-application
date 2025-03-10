import { useState } from 'react';
import FormField from './FormField';

function GeneralInfoForm({ handleGeneralInfoFormSubmit }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleClear = (e) => {
    e.preventDefault();
    setName('');
    setEmail('');
    setPhone('');
  };

  function handleSubmit(e) {
    handleGeneralInfoFormSubmit(e, { name, email, phone });
    setName('');
    setEmail('');
    setPhone('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>General Information</h2>

      <FormField
        name="name"
        label="Name"
        onChange={handleNameChange}
        value={name}
      />

      <div></div>
      <FormField
        type="email"
        name="email"
        label="Email"
        onChange={handleEmailChange}
        value={email}
      />
      <FormField
        type="tel"
        name="phone"
        label="Phone number"
        onChange={handlePhoneChange}
        value={phone}
      />
      <button type="submit">Submit</button>
      <button onClick={handleClear}>Clear</button>
    </form>
  );
}

export default GeneralInfoForm;
