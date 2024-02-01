import { ChangeEvent, FormEvent, useState } from "react";
import ViewSchool from "./ViewSchool";
import Form from "react-bootstrap/Form";

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
    setShow(false);
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
    <div className="containerSchools">
      <button
        onClick={() => (show ? setShow(false) : setShow(true))}
        className="btnSchoolAdd"
      >
        Add School
      </button>
      {show && (
        <Form.Label className="schoolForm">
          <div style={paddingStyle}>
            <label style={blockStyle}>Schoolname</label>
            <input
              className="textBox"
              type="text"
              value={userData.name}
              onChange={(e) => handleInputChange(e, "name")}
            ></input>
          </div>
          <div style={paddingStyle}>
            <label style={blockStyle}>Subject</label>
            <input
              className="textBox"
              type="text"
              value={userData.subject}
              onChange={(e) => handleInputChange(e, "subject")}
            ></input>
          </div>
          <div style={paddingStyle}>
            <label style={blockStyle}>Diploma</label>
            <input
              className="textBox"
              type="text"
              value={userData.diploma}
              onChange={(e) => handleInputChange(e, "diploma")}
            ></input>
          </div>
          <button className="formButton" onClick={handleSubmit}>
            Save
          </button>
        </Form.Label>
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
