export interface Props {
  company: string;
  position: string;
  tasks: string;
  start: string;
  end: string;
}

export default function ViewJob(props: Props) {
  return (
    <div className="container">
      <div>
        <label>Company</label>
        <div>{props.company}</div>
      </div>
      <div>
        <label>Position</label>
        <div>{props.position}</div>
      </div>
      <div>
        <label>Tasks</label>
        <div>{props.tasks}</div>
      </div>
      <div>
        <label>Start</label>
        <div>{props.start}</div>
      </div>
      <div>
        <label>End</label>
        <div>{props.end}</div>
      </div>
    </div>
  );
}
