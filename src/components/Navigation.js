import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import classes from '../styles/Navigation.module.css';

const Navigation = ({ title }) => {
  return (
    <div>
      <Navbar className={classes.NavBar} bg='dark' expand='lg'>
        <Container>
          <Navbar.Brand href='/' className={classes.Nav}>
            AMASA MUSIC
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};

Navigation.defaultProps = {
  title: 'AMASA MUSIC',
};

export default Navigation;
