import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import React, { ChangeEvent } from "react";

export interface Props {
  firstname: string;
  lastname: string;
  adress: string;
  city: string;
  zip: string;
  email: string;
  telefon: string;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>, type: string) => void;
  handleButtonClick: () => void;
}

export default function NewViewPersonal({
  firstname,
  lastname,
  adress,
  city,
  zip,
  email,
  telefon,
  handleInputChange,
  handleButtonClick,
}: Props) {
  return (
    <div>
      <Form className="personalFormField">
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridFirstname">
            <Form.Label>Firstname</Form.Label>
            <Form.Control
              readOnly
              type="firstname"
              value={firstname}
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
              readOnly
              type="lastname"
              value={lastname}
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
              readOnly
              type="email"
              value={email}
              onChange={(e) =>
                handleInputChange(e as ChangeEvent<HTMLInputElement>, "email")
              }
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridTel">
            <Form.Label>Telefon</Form.Label>
            <Form.Control
              readOnly
              type="telefon"
              value={telefon}
              onChange={(e) =>
                handleInputChange(e as ChangeEvent<HTMLInputElement>, "telefon")
              }
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control
            readOnly
            value={adress}
            onChange={(e) =>
              handleInputChange(e as ChangeEvent<HTMLInputElement>, "adress")
            }
          />
        </Form.Group>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control
              readOnly
              value={city}
              onChange={(e) =>
                handleInputChange(e as ChangeEvent<HTMLInputElement>, "city")
              }
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control
              readOnly
              value={zip}
              onChange={(e) =>
                handleInputChange(e as ChangeEvent<HTMLInputElement>, "zip")
              }
            />
          </Form.Group>
        </Row>

        <Button variant="primary" onClick={handleButtonClick}>
          Edit
        </Button>
      </Form>
      {/* {!show && <ViewPersonal {...userData}></ViewPersonal>} */}
    </div>
  );
}
