export interface Props {
  name: string;
  adress: string;
  email: string;
  tel: string;
}

export default function ViewPersonal(props: Props) {
  return (
    <div className="containerPersonalView">
      <div>
        <label>Name</label>
        <div>{props.name}</div>
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
        <div>{props.tel}</div>
      </div>
    </div>
  );
}
