import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { ChangeEvent, useState } from "react";
import NewViewPersonal from "./NewViewPersonal";
import "./NewPersonalView.css";

export default function NewPersonalInput() {
  const UserInfo = {
    firstname: "",
    lastname: "",
    adress: "",
    city: "",
    zip: "",
    email: "",
    telefon: "",
  };
  const [userData, setUserData] = useState(UserInfo);
  const [show, setShow] = useState(true);

  const handleButtonClick = () => {
    show ? setShow(false) : setShow(true);
  };
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    type: string
  ) => {
    setUserData({ ...userData, [type]: e.target.value });
  };
  const handleSubmit = () => {
    console.log("hello submit");
    //e.preventDefault();
    show ? setShow(false) : setShow(true);
  };
  return (
    <div>
      {show && (
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridFirstname">
              <Form.Label>Firstname</Form.Label>
              <Form.Control
                type="firstname"
                placeholder="Enter Firstname"
                value={userData.firstname}
                onChange={(e) =>
                  handleInputChange(
                    e as ChangeEvent<HTMLInputElement>,
                    "firstname"
                  )
                }
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridLastname">
              <Form.Label>Lastname</Form.Label>
              <Form.Control
                type="lastname"
                placeholder="Lastname"
                value={userData.lastname}
                onChange={(e) =>
                  handleInputChange(
                    e as ChangeEvent<HTMLInputElement>,
                    "lastname"
                  )
                }
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                value={userData.email}
                onChange={(e) =>
                  handleInputChange(e as ChangeEvent<HTMLInputElement>, "email")
                }
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridTel">
              <Form.Label>Telefon</Form.Label>
              <Form.Control
                type="telefon"
                placeholder="Telefon"
                value={userData.telefon}
                onChange={(e) =>
                  handleInputChange(
                    e as ChangeEvent<HTMLInputElement>,
                    "telefon"
                  )
                }
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control
              placeholder="1234 Main St"
              value={userData.adress}
              onChange={(e) =>
                handleInputChange(e as ChangeEvent<HTMLInputElement>, "adress")
              }
            />
          </Form.Group>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control
                value={userData.city}
                onChange={(e) =>
                  handleInputChange(e as ChangeEvent<HTMLInputElement>, "city")
                }
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control
                value={userData.zip}
                onChange={(e) =>
                  handleInputChange(e as ChangeEvent<HTMLInputElement>, "zip")
                }
              />
            </Form.Group>
          </Row>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      )}
      {!show && (
        <NewViewPersonal
          {...userData}
          handleInputChange={handleInputChange}
          handleButtonClick={handleButtonClick}
        ></NewViewPersonal>
      )}
    </div>
  );
}
