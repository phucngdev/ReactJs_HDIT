import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { postCreateUser } from "../services/UserServices.jsx";
import { toast } from "react-toastify";

const Example = () => {
  const [show, setShow] = useState(false);
  const [nameUser, setName] = useState("");
  const [job, setJob] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSaveUser = async () => {
    let res = await postCreateUser(nameUser, job);
    if (res.data && res.data.id) {
      console.log(">>>>> name: ", nameUser, ">>>> job: ", job);
      handleClose();
      setName("");
      setJob("");
    }
  };
  const notify = () => toast.success("Add new user!");

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
                value={nameUser}
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
          <Button
            variant="primary"
            onClick={() => handleSaveUser() && notify()}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Example;
