import { useState } from 'react';
import '../styles/PersonalInformationCard.css';

export default function PersonalInformationCard({ generalInformation }) {
  return (
    <div className='personalInformationCard'>
      <h2>{generalInformation.firstName + ' ' + generalInformation.lastName}</h2>
      <p>
        <span>E-Mail: {generalInformation.email}</span>
        <span>Phone: {generalInformation.phone}</span>
      </p>
    </div>
  );
}
