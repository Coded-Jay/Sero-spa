import React, { useState } from 'react';
import { Form, Button, Col } from 'react-bootstrap';

function SearchArea() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Search term:', searchTerm);
  };

  return (
    <Form className="d-flex" onSubmit={handleSubmit}>
      <Form.Control
        type="text"
        placeholder="Search Now"
        className="sea"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Button variant="outline-success" type="submit">
        Search
      </Button>
    </Form>
  );
}

export default SearchArea;

