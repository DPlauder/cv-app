import { ChangeEvent, useState } from "react";
import ViewSchool from "./ViewSchool";

export default function Schoolinput() {
  const schoolData = {
    school: "",
    subject: "",
    diploma: "",
  };
  const [userData, setUserData] = useState(schoolData);
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    type: string
  ) => {
    setUserData({ ...userData, [type]: e?.target?.value });
  };

  const [show, setShow] = useState(false);
  /* const [SchoolListData, SchoolListDataSet] = useState<{school: string, subject: string, diploma: string}[]>([]);
  const handleSubmit() = () => {
    setSchoolListData(userData)
  }
 */
  const blockStyle = { display: "block" };
  const paddingStyle = { padding: "10px" };

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
              value={userData.school}
              onChange={(e) => handleInputChange(e, "school")}
            ></input>
          </div>
          <div style={paddingStyle}>
            <label style={blockStyle}>Subject</label>
            <input
              type="text"
              value={userData.subject}
              onChange={(e) => handleInputChange(e, "subject")}
            ></input>
          </div>
          <div style={paddingStyle}>
            <label style={blockStyle}>Diploma</label>
            <input
              type="text"
              value={userData.diploma}
              onChange={(e) => handleInputChange(e, "diploma")}
            ></input>
          </div>
          <button className="formButton" type="submit">
            Save
          </button>
        </form>
      )}
      {!show && <ViewSchool {...userData}></ViewSchool>}
    </div>
  );
}
