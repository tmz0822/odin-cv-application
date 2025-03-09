import '../styles/Resume.css';
import GeneralInfo from './GeneralInfo';

function Resume({ generalInfo }) {
  const { name, email, phone } = generalInfo;

  return (
    <div className="resume">
      <GeneralInfo name={name} email={email} phone={phone} />
    </div>
  );
}

export default Resume;
