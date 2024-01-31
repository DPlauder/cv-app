import { ChangeEvent, FormEvent, useState } from "react";
import ViewSchool from "./ViewSchool";

export default function Schoolinput() {
  const schoolData = {
    school: "",
    subject: "",
    diploma: "",
  };
  const [userData, setUserData] = useState(schoolData);

  const [show, setShow] = useState(false);

  const [schoolListData, setSchoolListData] = useState<
    { school: string; subject: string; diploma: string }[]
  >([]);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    type: string
  ) => {
    setUserData({ ...userData, [type]: e?.target?.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSchoolListData([
      ...schoolListData,
      {
        school: userData.school,
        subject: userData.subject,
        diploma: userData.diploma,
      },
    ]);
    setUserData(schoolData);
    console.log(schoolListData);
    console.log(userData.school);
  };

  const blockStyle = { display: "block" };
  const paddingStyle = { padding: "10px" };

  return (
    <div className="containerSchool">
      <button onClick={() => (show ? setShow(false) : setShow(true))}>
        School
      </button>
      {show && (
        <form onSubmit={handleSubmit}>
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
