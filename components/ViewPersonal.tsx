export interface Props {
  firstname: string;
  lastname: string;
  adress: string;
  city: string;
  zip: string;
  email: string;
  telefon: string;
}

export default function ViewPersonal(props: Props) {
  return (
    <div className="containerPersonalView">
      <div>
        <label>Name</label>
        <div>{props.firstname}</div>
      </div>
      <div>
        <label>Adress</label>
        <div>{props.adress}</div>
      </div>
      <div>
        <label>email</label>
        <div>{props.email}</div>
      </div>
      <div>
        <label>Tel</label>
        <div>{props.telefon}</div>
      </div>
    </div>
  );
}
