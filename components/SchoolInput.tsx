import { useState } from "react";
import ViewSchool from "./ViewSchool";

export default function Schoolinput() {
  const schoolData = {
    school: "",
    subject: "",
    diploma: "",
  };
  const [UserData, setUserData] = useState(schoolData);
  const [show, setShow] = useState(false);

  const blockStyle = { display: "block" };
  const paddingStyle = { padding: "10px" };
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    type: string
  ) => {
    setUserData({ ...UserData, [type]: e?.target?.value });
  };

  return (
    <div className="containerSchool">
      <button onClick={() => (show ? setShow(false) : setShow(true))}>
        School
      </button>
      {show && (
        <form>
          <div style={paddingStyle}>
            <label style={blockStyle}>Schoolname</label>
            <input
              type="text"
              value={UserData.school}
              onChange={(e) => handleInputChange(e, "school")}
            ></input>
          </div>
          <div style={paddingStyle}>
            <label style={blockStyle}>Subject</label>
            <input
              type="text"
              value={UserData.subject}
              onChange={(e) => handleInputChange(e, "subject")}
            ></input>
          </div>
          <div style={paddingStyle}>
            <label style={blockStyle}>Diploma</label>
            <input
              type="text"
              value={UserData.diploma}
              onChange={(e) => handleInputChange(e, "diploma")}
            ></input>
          </div>
        </form>
      )}
      {!show && <ViewSchool {...UserData}></ViewSchool>}
    </div>
  );
}
