import React from "react";
import { Modal } from "react-bootstrap";
import LoginForm from "./LoginForm";

function LoginModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Log In</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <LoginForm />
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Log In</Button>
      </Modal.Footer> */}
    </Modal>
  );
}

LoginModal.propTypes = {};

export default LoginModal;
