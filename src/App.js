import { useState, useEffect } from "react";

import { getMovie } from './services/omdbapi';

import Form from "./components/Form";
import MovieDisplay from "./components/MovieDisplay";
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'

import "./App.css";

function App() {
  // Store the data about a movie
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data =  await getMovie("");
    
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <Navbar bg = "light" expand = "md">
        <Container>
          <Navbar.Brand>
        Movies App Database
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="https://www.imdb.com/">IMDb</Nav.Link>
            <Nav.Link href="https://www.rogerebert.com/">Roger Ebert</Nav.Link>
            <Nav.Link href="https://www.criterion.com/">Criterion</Nav.Link>
            <Nav.Link href="https://www.rottentomatoes.com/">Rotten Tomatoes</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>

      </Navbar>
      <Form movieSearch={getMovie} setMovie={setMovie}/>

      <MovieDisplay movie={movie} />
    </div>
  );
}

export default App;