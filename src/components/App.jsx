import { useState } from 'react';
import GeneralInformation from './GeneralInformation';
import Education from './Education';
import Work from './Work';
import CV from './CV';
import '../styles/App.css';

export default function App() {
  const [generalInformation, setGeneralInformation] = useState({
    firstName: 'First Name',
    lastName: 'Last Name',
    email: 'E-Mail Address',
    phone: 'Telephone Number',
  });
  const [education, setEducation] = useState();
  const [work, setWork] = useState();

  return (
    <div className='appContainer'>
      <div className='inputContainer'>
        <GeneralInformation setGeneralInformation={setGeneralInformation} />
        <Education education={education} setEducation={setEducation} />
        <Work work={work} setWork={setWork} />
      </div>
      <CV generalInformation={generalInformation} education={education} work={work} />
    </div>
  );
}
