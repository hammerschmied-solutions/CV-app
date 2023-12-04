//import { useState } from 'react';
import Education from './Education';
import PersonalInformationCard from './personalInformationCard';
import EducationInformationCard from './EducationInformationCard';
import WorkInformationCard from './WorkInformationCard';
import '../styles/CV.css';
import Work from './Work';

export default function CV({ generalInformation, education, work }) {
  return (
    <div className='cvContainer'>
      <PersonalInformationCard generalInformation={generalInformation} />
      <EducationInformationCard education={education} />
      <WorkInformationCard work={work} />
    </div>
  );
}
