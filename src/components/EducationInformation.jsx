import '../styles/EducationInformation.css';

export default function EducationInformation({ eduKey, education }) {
  return (
    <div className='educationInformation'>
      <div className='educationInformationContent'>
        {education[eduKey].start} - {education[eduKey].end}
      </div>
      <div className='educationInformationHeading'>{education[eduKey].school}</div>
      <div className='educationInformationContent'>{education[eduKey].location}</div>
      <div className='educationInformationContent'>{education[eduKey].degree}</div>
    </div>
  );
}
