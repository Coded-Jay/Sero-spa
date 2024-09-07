import React, { useState } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';

function MultiInputForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    date: '',
    time: '',
    gender: '',
    terms: false,
    feedback: '',
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formTel">
        <Form.Label>Date of Arrival</Form.Label>
        <Form.Control
          type="date"
          name="arrival"
          placeholder="Date of Arrival"
          value={formData.date}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formTel">
        <Form.Label>Time of Arrival</Form.Label>
        <Form.Control
          type="time"
          name="arrivalTime"
          placeholder="Time of Arrival"
          value={formData.time}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formAge">
        <Form.Label>Age</Form.Label>
        <Form.Control
          type="number"
          name="age"
          placeholder="Enter your age"
          value={formData.age}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formGender">
        <Form.Label>Gender</Form.Label>
        <Form.Check
          type="radio"
          name="gender"
          label="Male"
          value="male"
          checked={formData.gender === 'male'}
          onChange={handleChange}
        />
        <Form.Check
          type="radio"
          name="gender"
          label="Female"
          value="female"
          checked={formData.gender === 'female'}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formSelect">
        <Form.Label>Book a Service</Form.Label>
        <Form.Select name="selectOption" value={formData.selectOption} onChange={handleChange}>
          <option value="">Select...</option>
          <option value="option1">Aromatheraphy</option>
          <option value="option2">Deep Tissue Massage</option>
          <option value="option3">Relaxation Massage</option>
          <option value="option4">Hot Stone  Massage</option>
          <option value="option5">Foot Massage</option>
          <option value="option6">Loml Loml</option>
          <option value="option7">Back Massage</option>
          <option value="option8">Pedicure and Manicure</option>
        </Form.Select>
      </Form.Group>

      <Form.Group controlId="formFeedback">
        <Form.Label>Feedback</Form.Label>
        <Form.Control
          as="textarea"
          name="feedback"
          rows={3}
          placeholder="Enter your feedback"
          value={formData.feedback}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formTerms">
        <Form.Check
          type="checkbox"
          name="terms"
          label="I agree to the terms and conditions"
          checked={formData.terms}
          onChange={handleChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default MultiInputForm;

