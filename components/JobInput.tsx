import { ChangeEvent, FormEvent, useState } from "react";
import ViewJob from "./ViewJob";

export default function JobInput() {
  const jobData = {
    company: "",
    position: "",
    tasks: "",
    start: "",
    end: "",
  };
  const [userData, setUserData] = useState(jobData);
  const [show, setShow] = useState(false);
  const [jobList, setJobList] = useState<
    {
      company: string;
      position: string;
      task: string;
      start: string;
      end: string;
    }[]
  >([]);

  const blockStyle = { display: "block" };
  const paddingStyle = { padding: "10px" };
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    type: string
  ) => {
    setUserData({ ...userData, [type]: e?.target?.value });
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setJobList([
      ...jobList,
      {
        company: userData.company,
        position: userData.position,
        task: userData.tasks,
        start: userData.start,
        end: userData.end,
      },
    ]);
    setUserData(jobData);
  }; /* 
  const handleEdit = (index: number) => {

  } */
  const handleDelete = (index: number) => {
    const updateJobsList = [...jobList];
    updateJobsList.splice(index, 1);
    setJobList(updateJobsList);
  };

  return (
    <div className="containerJob">
      <button onClick={() => (show ? setShow(false) : setShow(true))}>
        Job
      </button>
      {show && (
        <form onSubmit={handleSubmit}>
          <div style={paddingStyle}>
            <label style={blockStyle}>Company</label>
            <input
              type="text"
              value={userData.company}
              onChange={(e) => handleInputChange(e, "company")}
            ></input>
          </div>
          <div style={paddingStyle}>
            <label style={blockStyle}>Position</label>
            <input
              type="text"
              value={userData.position}
              onChange={(e) => handleInputChange(e, "position")}
            ></input>
          </div>
          <div style={paddingStyle}>
            <label style={blockStyle}>Task</label>
            <input
              type="text"
              value={userData.tasks}
              onChange={(e) => handleInputChange(e, "tasks")}
            ></input>
          </div>
          <div style={paddingStyle}>
            <label style={blockStyle}>Start Date</label>
            <input
              type="date"
              value={userData.start}
              onChange={(e) => handleInputChange(e, "start")}
            ></input>
          </div>
          <div style={paddingStyle}>
            <label style={blockStyle}>End Date</label>
            <input
              type="date"
              value={userData.end}
              onChange={(e) => handleInputChange(e, "end")}
            ></input>
          </div>
          <button className="formButton" type="submit">
            Save
          </button>
        </form>
      )}
      {!show && <ViewJob jobs={jobList} onDelete={handleDelete}></ViewJob>}
    </div>
  );
}
