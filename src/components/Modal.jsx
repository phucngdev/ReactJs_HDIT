import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function Example() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [job, setJob] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSaveUser = () => {
    console.log(">>> name ", name, ">>> job ", job);
  };
  return (
    <>
      <Button
        className="btn bg-success border-0"
        variant="primary"
        onClick={handleShow}
      >
        Add new user
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="bg-[#212529] text-[#acb5bd]">
          <Modal.Title>Add New User</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-[#212529] text-[#acb5bd]">
          <Form>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Job</Form.Label>
              <Form.Control
                type="text"
                placeholder="Job"
                value={job}
                onChange={(event) => setJob(event.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="bg-[#212529] text-[#acb5bd]">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSaveUser()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;
