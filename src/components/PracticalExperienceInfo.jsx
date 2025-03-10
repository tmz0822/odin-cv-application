function PracticalExperienceInfo({ experience }) {
  const formatter = new Intl.DateTimeFormat('default', {
    month: 'long',
    year: 'numeric',
  });

  const formattedStartDate = formatter.format(
    new Date(experience.startDate + '-01')
  );

  return (
    <div className="practical-experience">
      <h2>{experience.name}</h2>
      <div>{experience.position}</div>
      <div>
        {formattedStartDate} - {experience.endDate}
      </div>
      <ul className="responsibility-list">
        {experience.responsibilities.map((responsibility, index) => (
          <li key={index}>
            <div className="content">
              <span>{responsibility}</span>
              <div className="buttons">
                <button className="edit">✎</button>
                <button className="warning">❌</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PracticalExperienceInfo;
