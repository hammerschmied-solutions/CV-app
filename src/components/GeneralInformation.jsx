import { useState } from 'react';
import '../styles/GeneralInformation.css';
import Icon from '@mdi/react';
import { mdiChevronDown, mdiChevronUp } from '@mdi/js';

export default function GeneralInformation({ setGeneralInformation }) {
  const [person, setPerson] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });
  const [displayButton, setDisplayButton] = useState('none');
  const [personSave, setPersonSave] = useState();
  const [isExpanded, setIsExpanded] = useState([true, 'block']);

  function focusInput(e) {
    e.target.parentNode.classList.add('inputHighlight');
  }
  function unfocusInput(e) {
    e.target.parentNode.classList.remove('inputHighlight');
  }
  function handleFirstNameChange(e) {
    setPerson({ ...person, firstName: e.target.value });
  }
  function handleLastNameChange(e) {
    setPerson({ ...person, lastName: e.target.value });
  }
  function handleEmailChange(e) {
    setPerson({ ...person, email: e.target.value });
  }
  function handlePhoneChange(e) {
    setPerson({ ...person, phone: e.target.value });
  }
  function submitGeneralInformation(e) {
    e.preventDefault();
    setGeneralInformation({ ...person });
    setPersonSave({ ...person });
    setPerson({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    });
    setDisplayButton('inline-block');
    setIsExpanded([false, 'none']);
  }
  function editGeneralInformation() {
    setPerson({ ...personSave });
  }

  function expandGeneralInformation() {
    if (isExpanded[0]) {
      setIsExpanded([false, 'none']);
    } else {
      setIsExpanded([true, 'block']);
    }
  }

  return (
    <form className='personForm'>
      <div className='personFormHeadingContainer' onClick={expandGeneralInformation}>
        <h1>Personal Information</h1>
        {!isExpanded[0] && <Icon path={mdiChevronDown} size={1.5} />}
        {isExpanded[0] && <Icon path={mdiChevronUp} size={1.5} />}
      </div>
      <fieldset style={{ display: isExpanded[1] }}>
        <legend>First Name</legend>
        <input
          type='text'
          value={person.firstName}
          onFocus={focusInput}
          onBlur={unfocusInput}
          onChange={handleFirstNameChange}
        />
      </fieldset>
      <fieldset style={{ display: isExpanded[1] }}>
        <legend>Last Name</legend>
        <input
          type='text'
          value={person.lastName}
          onFocus={focusInput}
          onBlur={unfocusInput}
          onChange={handleLastNameChange}
        />
      </fieldset>
      <fieldset style={{ display: isExpanded[1] }}>
        <legend>E-Mail</legend>
        <input
          type='e-mail'
          value={person.email}
          onFocus={focusInput}
          onBlur={unfocusInput}
          onChange={handleEmailChange}
        />
      </fieldset>
      <fieldset style={{ display: isExpanded[1] }}>
        <legend>Telephone Number</legend>
        <input
          type='tel'
          value={person.phone}
          onFocus={focusInput}
          onBlur={unfocusInput}
          onChange={handlePhoneChange}
        />
      </fieldset>
      <button type='submit' onClick={submitGeneralInformation} style={{ display: isExpanded[1] }}>
        Submit
      </button>
      {isExpanded[0] && (
        <button type='button' onClick={editGeneralInformation} style={{ display: displayButton }}>
          Edit
        </button>
      )}
    </form>
  );
}
