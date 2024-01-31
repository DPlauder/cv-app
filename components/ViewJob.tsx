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
    <div className="container">
      {jobs.map((job, index) => (
        <div key={index} className="jobContainer">
          <label>Comany</label>
          <div>{job.company}</div>
          <label>Position</label>
          <div>{job.position}</div>
          <label>Tasks</label>
          <div>{job.task}</div>
          <label>Start</label>
          <div>{job.start}</div>
          <label>End</label>
          <div>{job.end}</div>
          <button onClick={() => onDelete(index)}>X</button>
        </div>
      ))}
    </div>
  );
};
export default ViewJob;
