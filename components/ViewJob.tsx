import "./Jobs.css";

export interface Props {
  jobs: {
    company: string;
    position: string;
    task: string;
    start: string;
    end: string;
  }[];
  onDelete: (index: number) => void;
}

const ViewJob = ({ jobs, onDelete }: Props) => {
  return (
    <div className="containerJobs">
      {jobs.map((job, index) => (
        <div key={index} className="jobContainer">
          <label>Comany</label>
          <div className="textBox">{job.company}</div>
          <label>Position</label>
          <div className="textBox">{job.position}</div>
          <label>Tasks</label>
          <div className="textBox">{job.task}</div>
          <label>Start</label>
          <div className="textBox">{job.start}</div>
          <label>End</label>
          <div className="textBox">{job.end}</div>
          <button onClick={() => onDelete(index)}>X</button>
        </div>
      ))}
    </div>
  );
};
export default ViewJob;
