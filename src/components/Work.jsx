import { useState } from 'react';
import '../styles/GeneralInformation.css';
import WorkBox from './WorkBox';
import Icon from '@mdi/react';
import { mdiChevronDown, mdiChevronUp } from '@mdi/js';

export default function Work({ work, setWork }) {
  const [currentWork, setCurrentWork] = useState({
    company: '',
    title: '',
    start: '',
    end: '',
    location: '',
    description: '',
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
  function handleCompanyChange(e) {
    setCurrentWork({ ...currentWork, company: e.target.value });
  }
  function handleTitleChange(e) {
    setCurrentWork({ ...currentWork, title: e.target.value });
  }
  function handleStartChange(e) {
    setCurrentWork({ ...currentWork, start: e.target.value });
  }
  function handleEndChange(e) {
    setCurrentWork({ ...currentWork, end: e.target.value });
  }
  function handleLocationChange(e) {
    setCurrentWork({ ...currentWork, location: e.target.value });
  }
  function handleDescriptionChange(e) {
    setCurrentWork({ ...currentWork, description: e.target.value });
  }
  function submitWork(e) {
    let idString = 'work' + currentId.toString();
    e.preventDefault();
    setWork({ ...work, [idString]: { ...currentWork } });
    setCurrentWork({
      company: '',
      title: '',
      start: '',
      end: '',
      location: '',
      description: '',
    });
    //setDisplayButton('inline-block');
    setCurrentId(currentId + 1);
  }
  //   function editGeneralInformation() {
  //     setCurrentWork({ ...currentWorkSave });
  //   }

  let eduPrint;
  if (work) {
    const works = Object.keys(work);
    eduPrint = works.map((workKey) => {
      return (
        <WorkBox
          key={workKey}
          workKey={workKey}
          work={work}
          setWork={setWork}
          setCurrentWork={setCurrentWork}
        />
      );
    });
  }

  function expandWorkInformation() {
    if (isExpanded[0]) {
      setIsExpanded([false, 'none']);
    } else {
      setIsExpanded([true, 'block']);
    }
  }

  return (
    <form className='currentWorkForm'>
      <div className='workFormHeadingContainer' onClick={expandWorkInformation}>
        <h1>Work Experience</h1>
        {!isExpanded[0] && <Icon path={mdiChevronDown} size={1.5} />}
        {isExpanded[0] && <Icon path={mdiChevronUp} size={1.5} />}
      </div>
      <div style={{ display: isExpanded[1] }}>{eduPrint}</div>
      <fieldset style={{ display: isExpanded[1] }}>
        <legend>Company Name</legend>
        <input
          type='text'
          value={currentWork.company}
          onFocus={focusInput}
          onBlur={unfocusInput}
          onChange={handleCompanyChange}
        />
      </fieldset>
      <fieldset style={{ display: isExpanded[1] }}>
        <legend>Position Title</legend>
        <input
          type='text'
          value={currentWork.title}
          onFocus={focusInput}
          onBlur={unfocusInput}
          onChange={handleTitleChange}
        />
      </fieldset>
      <fieldset style={{ display: isExpanded[1] }}>
        <legend>Start Date</legend>
        <input
          type='text'
          value={currentWork.start}
          onFocus={focusInput}
          onBlur={unfocusInput}
          onChange={handleStartChange}
        />
      </fieldset>
      <fieldset style={{ display: isExpanded[1] }}>
        <legend>End Date:</legend>
        <input
          type='text'
          value={currentWork.end}
          onFocus={focusInput}
          onBlur={unfocusInput}
          onChange={handleEndChange}
        />
      </fieldset>
      <fieldset style={{ display: isExpanded[1] }}>
        <legend>Location</legend>
        <input
          type='text'
          value={currentWork.location}
          onFocus={focusInput}
          onBlur={unfocusInput}
          onChange={handleLocationChange}
        />
      </fieldset>
      <fieldset style={{ display: isExpanded[1] }}>
        <legend>Description</legend>
        <textarea
          value={currentWork.description}
          onFocus={focusInput}
          onBlur={unfocusInput}
          onChange={handleDescriptionChange}
          className='workDescription'
        />
      </fieldset>
      <button type='submit' onClick={submitWork} style={{ display: isExpanded[1] }}>
        Submit
      </button>
      {/* <button type='button' onClick={editGeneralInformation} style={{ display: displayButton }}>
        Edit
      </button> */}
    </form>
  );
}
