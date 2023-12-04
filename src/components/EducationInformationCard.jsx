import EducationInformation from './EducationInformation';
import '../styles/Education.css';

export default function EducationInformationCard({ education }) {
  let eduPrint;
  if (education) {
    const educations = Object.keys(education);
    eduPrint = educations.map((eduKey) => {
      return <EducationInformation key={eduKey} eduKey={eduKey} education={education} />;
    });
  }
  return (
    <div className='education'>
      <div className='educationHeading'>Education</div>
      {eduPrint}
    </div>
  );
}
