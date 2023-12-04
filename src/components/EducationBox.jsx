import { useState } from 'react';
import Icon from '@mdi/react';
import { mdiPencil, mdiChevronDown, mdiChevronUp, mdiTrashCan } from '@mdi/js';
import '../styles/EducationBox.css';

export default function EducationBox({ education, eduKey, setEducation, setCurrentEducation }) {
  const [isExpanded, setIsExpanded] = useState(false);

  function expandEducationBox() {
    if (isExpanded === false) {
      setIsExpanded(true);
    } else {
      setIsExpanded(false);
    }
  }
  function editCurrentEducation() {
    setCurrentEducation({ ...education[eduKey] });
    const { [eduKey]: unused, ...educationRemoved } = education;
    setEducation(educationRemoved);
  }
  function removeCurrentEducation() {
    const { [eduKey]: unused, ...educationRemoved } = education;
    setEducation(educationRemoved);
  }

  return (
    <div className='educationBox' key={eduKey}>
      <div>{education[eduKey].school}</div>
      <div style={{ cursor: 'pointer' }} onClick={removeCurrentEducation}>
        <Icon path={mdiTrashCan} size={1} />
      </div>
      <div style={{ cursor: 'pointer' }} onClick={editCurrentEducation}>
        <Icon path={mdiPencil} size={1} />
      </div>
      <div style={{ cursor: 'pointer' }} onClick={expandEducationBox}>
        {!isExpanded && <Icon path={mdiChevronDown} size={1} />}
        {isExpanded && <Icon path={mdiChevronUp} size={1} />}
      </div>
      {isExpanded && <div className='expandedInfo'>{education[eduKey].degree}</div>}
      {isExpanded && <div className='expandedInfo'>{education[eduKey].location}</div>}
      {isExpanded && (
        <div className='expandedInfo'>
          From: {education[eduKey].start} <span> </span>Until: {education[eduKey].end}
        </div>
      )}
    </div>
  );
}
