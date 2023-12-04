import { useState } from 'react';
import '../styles/GeneralInformation.css';
import EducationBox from './EducationBox';
import Icon from '@mdi/react';
import { mdiChevronDown, mdiChevronUp } from '@mdi/js';

export default function Education({ education, setEducation }) {
  const [currentEducation, setCurrentEducation] = useState({
    school: '',
    degree: '',
    start: '',
    end: '',
    location: '',
  });
  //const [displayButton, setDisplayButton] = useState('none');
  const [currentId, setCurrentId] = useState(0);
  const [isExpanded, setIsExpanded] = useState([true, 'block']);

  function focusInput(e) {
    e.target.parentNode.classList.add('inputHighlight');
  }
  function unfocusInput(e) {
    e.target.parentNode.classList.remove('inputHighlight');
  }
  function handleSchoolChange(e) {
    setCurrentEducation({ ...currentEducation, school: e.target.value });
  }
  function handleDegreeChange(e) {
    setCurrentEducation({ ...currentEducation, degree: e.target.value });
  }
  function handleStartChange(e) {
    setCurrentEducation({ ...currentEducation, start: e.target.value });
  }
  function handleEndChange(e) {
    setCurrentEducation({ ...currentEducation, end: e.target.value });
  }
  function handleLocationChange(e) {
    setCurrentEducation({ ...currentEducation, location: e.target.value });
  }
  function submitEducation(e) {
    let idString = 'edu' + currentId.toString();
    e.preventDefault();
    setEducation({ ...education, [idString]: { ...currentEducation } });
    setCurrentEducation({
      school: '',
      degree: '',
      start: '',
      end: '',
      location: '',
    });
    //setDisplayButton('inline-block');
    setCurrentId(currentId + 1);
  }
  //   function editGeneralInformation() {
  //     setCurrentEducation({ ...currentEducationSave });
  //   }

  let eduPrint;
  if (education) {
    const educations = Object.keys(education);
    eduPrint = educations.map((eduKey) => {
      return (
        <EducationBox
          key={eduKey}
          eduKey={eduKey}
          education={education}
          setEducation={setEducation}
          setCurrentEducation={setCurrentEducation}
        />
      );
    });
  }

  function expandEducationInformation() {
    if (isExpanded[0]) {
      setIsExpanded([false, 'none']);
    } else {
      setIsExpanded([true, 'block']);
    }
  }

  return (
    <form className='currentEducationForm'>
      <div className='educationFormHeadingContainer' onClick={expandEducationInformation}>
        <h1>Education</h1>
        {!isExpanded[0] && <Icon path={mdiChevronDown} size={1.5} />}
        {isExpanded[0] && <Icon path={mdiChevronUp} size={1.5} />}
      </div>
      <div style={{ display: isExpanded[1] }}>{eduPrint}</div>
      <fieldset style={{ display: isExpanded[1] }}>
        <legend>School</legend>
        <input
          type='text'
          value={currentEducation.school}
          onFocus={focusInput}
          onBlur={unfocusInput}
          onChange={handleSchoolChange}
        />
      </fieldset>
      <fieldset style={{ display: isExpanded[1] }}>
        <legend>Degree</legend>
        <input
          type='text'
          value={currentEducation.degree}
          onFocus={focusInput}
          onBlur={unfocusInput}
          onChange={handleDegreeChange}
        />
      </fieldset>
      <fieldset style={{ display: isExpanded[1] }}>
        <legend>Start Date</legend>
        <input
          type='text'
          value={currentEducation.start}
          onFocus={focusInput}
          onBlur={unfocusInput}
          onChange={handleStartChange}
        />
      </fieldset>
      <fieldset style={{ display: isExpanded[1] }}>
        <legend>End Date:</legend>
        <input
          type='text'
          value={currentEducation.end}
          onFocus={focusInput}
          onBlur={unfocusInput}
          onChange={handleEndChange}
        />
      </fieldset>
      <fieldset style={{ display: isExpanded[1] }}>
        <legend>Location</legend>
        <input
          type='text'
          value={currentEducation.location}
          onFocus={focusInput}
          onBlur={unfocusInput}
          onChange={handleLocationChange}
        />
      </fieldset>
      <button type='submit' onClick={submitEducation} style={{ display: isExpanded[1] }}>
        Submit
      </button>
      {/* <button type='button' onClick={editGeneralInformation} style={{ display: displayButton }}>
        Edit
      </button> */}
    </form>
  );
}
