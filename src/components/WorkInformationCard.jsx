import WorkInformation from './WorkInformation';
import '../styles/Work.css';

export default function workInformationCard({ work }) {
  let workPrint;
  if (work) {
    const works = Object.keys(work);
    workPrint = works.map((workKey) => {
      return <WorkInformation key={workKey} workKey={workKey} work={work} />;
    });
  }
  return (
    <div className='work'>
      <div className='workHeading'>Work Experience</div>
      {workPrint}
    </div>
  );
}
