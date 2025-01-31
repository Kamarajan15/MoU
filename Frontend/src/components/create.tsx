import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Create() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Create New
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New MoU</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="id">
              <Form.Label>MoU ID</Form.Label>
              <Form.Control type="text" placeholder="Enter MoU ID" />
            </Form.Group>
            <Form.Group controlId="startDate">
              <Form.Label>Start Date</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
            <Form.Group controlId="endDate">
              <Form.Label>End Date</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
            <Form.Group controlId="about">
              <Form.Label>About MoU</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter details about the MoU"
              />
            </Form.Group>
            <Form.Group controlId="department">
              <Form.Label>Department</Form.Label>
              <Form.Control type="text" placeholder="Enter department name" />
            </Form.Group>
            <Form.Group controlId="partner">
              <Form.Label>Partner</Form.Label>
              <Form.Control type="text" placeholder="Enter partner name" />
            </Form.Group>
            <Form.Group controlId="outcome">
              <Form.Label>Outcome</Form.Label>
              <Form.Control type="text" placeholder="Enter outcome" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Create;
