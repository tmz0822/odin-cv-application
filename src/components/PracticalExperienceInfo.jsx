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
    </div>
  );
}

export default PracticalExperienceInfo;
