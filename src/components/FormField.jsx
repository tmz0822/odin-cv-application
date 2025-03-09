import '../styles/FormField.css';

function FormField({ type = 'text', label, onChange, value, name }) {
  return (
    <div className="form-field">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export default FormField;
