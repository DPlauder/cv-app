import { useState } from "react";
import "./School.css";

export interface Props {
  schools: {
    name: string;
    subject: string;
    diploma: string;
  }[];
  onDelete: (index: number) => void;
  onEdit: (
    index: number,
    updateSchool: { name: string; subject: string; diploma: string }
  ) => void;
}

const ViewSchool = ({ schools, onDelete, onEdit }: Props) => {
  const [editedValues, setEditedValues] = useState<{ [key: string]: string }>(
    {}
  );
  const handleInputChange = (box: string, value: string) => {
    setEditedValues((prevValues) => ({
      ...prevValues,
      [box]: value,
    }));
  };
  const handleEditClick = (index: number) => {
    const editedSchool = {
      name: editedValues.name || schools[index].name,
      subject: editedValues.subject || schools[index].subject,
      diploma: editedValues.diploma || schools[index].diploma,
    };

    onEdit(index, editedSchool);
    setEditedValues({});
  };
  return (
    <div className="container">
      {schools.map((school, index) => (
        <div key={index} className="schoolContainer">
          <label>School</label>
          <div
            contentEditable
            onInput={(e) =>
              handleInputChange("name", e.currentTarget.textContent!)
            }
          >
            {school.name}
          </div>
          <label>Subject</label>
          <div
            contentEditable
            onInput={(e) =>
              handleInputChange("subject", e.currentTarget.textContent!)
            }
          >
            {school.subject}
          </div>
          <label>Diploma</label>
          <div
            contentEditable
            onInput={(e) =>
              handleInputChange("diploma", e.currentTarget.textContent!)
            }
          >
            {school.diploma}
          </div>
          <button onClick={() => handleEditClick(index)}>Edit</button>
          <button onClick={() => onDelete(index)}>X</button>
        </div>
      ))}
    </div>
  );
};

export default ViewSchool;
