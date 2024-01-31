import { ChangeEvent, FormEvent, useState } from "react";
import ViewSchool from "./ViewSchool";

export default function Schoolinput() {
  const schoolData = {
    name: "",
    subject: "",
    diploma: "",
  };
  const [userData, setUserData] = useState(schoolData);

  const [show, setShow] = useState(false);

  const [schoolListData, setSchoolListData] = useState<
    { name: string; subject: string; diploma: string }[]
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
        name: userData.name,
        subject: userData.subject,
        diploma: userData.diploma,
      },
    ]);
    setUserData(schoolData);
    console.log(schoolListData);
    console.log(userData.name);
  };
  const handleDelete = (index: number) => {
    const updateSchoolListData = [...schoolListData];
    updateSchoolListData.splice(index, 1);
    setSchoolListData(updateSchoolListData);
  };

  const handleEdit = (
    index: number,
    updateSchool: { name: string; subject: string; diploma: string }
  ) => {
    console.log(updateSchool.name);

    const updateSchoolList = [...schoolListData];
    updateSchoolList[index] = updateSchool;
    setSchoolListData(updateSchoolList);
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
              value={userData.name}
              onChange={(e) => handleInputChange(e, "name")}
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
      {!show && (
        <ViewSchool
          schools={schoolListData}
          onDelete={handleDelete}
          onEdit={handleEdit}
        ></ViewSchool>
      )}
    </div>
  );
}
