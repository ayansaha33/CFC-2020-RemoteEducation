import React from "react";
import { Modal } from "react-bootstrap";
import CreateForm from "./CreateForm";

function LoginModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Create Your Account
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <CreateForm />
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}

LoginModal.propTypes = {};

export default LoginModal;
