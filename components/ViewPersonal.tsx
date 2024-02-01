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
        <label>Firstname</label>
        <div>{props.firstname}</div>
      </div>
      <div>
        <label>Lastname</label>
        <div>{props.lastname}</div>
      </div>
      <div>
        <label>Adress</label>
        <div>{props.adress}</div>
      </div>
      <div>
        <label>City</label>
        <div>{props.city}</div>
      </div>
      <div>
        <label>Zip</label>
        <div>{props.zip}</div>
      </div>
      <div>
        <label>email</label>
        <div>{props.email}</div>
      </div>
      <div>
        <label>Telefon</label>
        <div>{props.telefon}</div>
      </div>
    </div>
  );
}
