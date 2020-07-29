import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";

const AddReview = ({ refreshData }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [form, setForm] = useState({
    user: "anonymous",
    reviewRating: 2,
    flightRating: 5,
    flight: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const handleDropDownChange = (e) => {
    setForm({
      ...form,
      [e.currentTarget.name]: parseInt(e.currentTarget.value),
    });
  };

  const handleSubmit = async (event) => {
    await axios.post("http://localhost:8080/reviews", form);
    handleClose();
    refreshData(true);
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Review
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <form>
            <div>
              <label>Flight Name</label>
              <input type="text" name="flight" value={form.flight} onChange={handleChange} />
              <label>
                Flight Rating
                <select name="flightRating" onChange={handleDropDownChange}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </label>
            </div>
            <div>
              <label>Comment</label>
              <input type="text" name="comment" value={form.comment} onChange={handleChange} />
            </div>
            <button type="button" onClick={handleSubmit}>
              Submit
            </button>
          </form> */}
          <Form>
            <div>
              <Form.Label>Flight Name</Form.Label>
              <Form.Control
                type="text"
                name="flight"
                value={form.flight}
                onChange={handleChange}
              />
              <Form.Label>
                Flight Rating
                <Form.Control as="select" name="flightRating" onChange={handleDropDownChange}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </Form.Control>
              </Form.Label>
            </div>
            <div>
              <Form.Label>Comment</Form.Label>
              <Form.Control
                type="text"
                name="comment"
                value={form.comment}
                onChange={handleChange}
              />
            </div>
            <br></br>
            <Button type="button" onClick={handleSubmit}>
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default AddReview;
