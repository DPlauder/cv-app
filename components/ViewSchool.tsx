export interface Props {
  school: string;
  subject: string;
  diploma: string;
}

export default function ViewSchool(props: Props) {
  return (
    <div className="container">
      <div>
        <label>school</label>
        <div>{props.school}</div>
      </div>
      <div>
        <label>subject</label>
        <div>{props.subject}</div>
      </div>
      <div>
        <label>email</label>
        <div>{props.diploma}</div>
      </div>
    </div>
  );
}
