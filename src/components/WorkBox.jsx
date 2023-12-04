import { useState } from 'react';
import Icon from '@mdi/react';
import { mdiPencil, mdiChevronDown, mdiChevronUp, mdiTrashCan } from '@mdi/js';
import '../styles/WorkBox.css';

export default function WorkBox({ work, workKey, setWork, setCurrentWork }) {
  const [isExpanded, setIsExpanded] = useState(false);

  function expandWorkBox() {
    if (isExpanded === false) {
      setIsExpanded(true);
    } else {
      setIsExpanded(false);
    }
  }
  function editCurrentWork() {
    setCurrentWork({ ...work[workKey] });
    const { [workKey]: unused, ...workRemoved } = work;
    setWork(workRemoved);
  }
  function removeCurrentWork() {
    const { [workKey]: unused, ...workRemoved } = work;
    setWork(workRemoved);
  }

  return (
    <div className='workBox' key={workKey}>
      <div>{work[workKey].company}</div>
      <div style={{ cursor: 'pointer' }} onClick={removeCurrentWork}>
        <Icon path={mdiTrashCan} size={1} />
      </div>
      <div style={{ cursor: 'pointer' }} onClick={editCurrentWork}>
        <Icon path={mdiPencil} size={1} />
      </div>
      <div style={{ cursor: 'pointer' }} onClick={expandWorkBox}>
        {!isExpanded && <Icon path={mdiChevronDown} size={1} />}
        {isExpanded && <Icon path={mdiChevronUp} size={1} />}
      </div>
      {isExpanded && <div className='expandedInfo'>{work[workKey].title}</div>}
      {isExpanded && <div className='expandedInfo'>{work[workKey].location}</div>}
      {isExpanded && (
        <div className='expandedInfo'>
          From: {work[workKey].start} <span> </span>Until: {work[workKey].end}
        </div>
      )}
    </div>
  );
}
