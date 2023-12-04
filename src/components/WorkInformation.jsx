import '../styles/WorkInformation.css';

export default function workInformation({ workKey, work }) {
  return (
    <div className='workInformation'>
      <div className='workInformationContent'>
        {work[workKey].start} - {work[workKey].end}
      </div>
      <div className='workInformationHeading'>{work[workKey].company}</div>
      <div className='workInformationContent'>{work[workKey].location}</div>
      <div className='workInformationContent'>{work[workKey].title}</div>
      <div></div>
      <div className='workInformationContent description'>{work[workKey].description}</div>
    </div>
  );
}
