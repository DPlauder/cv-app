import { ChangeEvent, useState } from "react";
import ViewPersonal from "./ViewPersonal";
import "./PersonalInput.css";

export default function PersonalInput() {
  const UserInfo = {
    name: "",
    adress: "",
    email: "",
    tel: "",
  };
  const [userData, setUserData] = useState(UserInfo);
  const [show, setShow] = useState(false);

  const blockStyle = { display: "block" };
  const paddingStyle = { padding: "10px" };
  const handleButtonClick = () => {
    show ? setShow(false) : setShow(true);
  };
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    type: string
  ) => {
    setUserData({ ...userData, [type]: e?.target?.value });
  };
  return (
    <div className="containerPersonal">
      <button
        onClick={() => {
          handleButtonClick();
        }}
      >
        Personal Info
      </button>
      {show && (
        <form className="userInfo">
          <div className="personalInput">
            <div style={paddingStyle}>
              <label style={blockStyle}>Name</label>
              <input
                type="text"
                value={userData.name}
                onChange={(e) => handleInputChange(e, "name")}
              ></input>
            </div>
            <div style={paddingStyle}>
              <label style={blockStyle}>Adress</label>
              <input
                type="text"
                value={userData.adress}
                onChange={(e) => handleInputChange(e, "adress")}
              ></input>
            </div>
            <div style={paddingStyle}>
              <label style={blockStyle}>Email</label>
              <input
                type="text"
                value={userData.email}
                onChange={(e) => handleInputChange(e, "email")}
              ></input>
            </div>
            <div style={paddingStyle}>
              <label style={blockStyle}>Tel</label>
              <input
                type="number"
                value={userData.tel}
                onChange={(e) => handleInputChange(e, "tel")}
              ></input>
            </div>
          </div>
        </form>
      )}
      {!show && <ViewPersonal {...userData}></ViewPersonal>}
    </div>
  );
}
