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
    // <div>
    //   <div className='navbar bg-primary'>
    //     <a href='/'>
    //       <p className='nav-title'>
    //         &nbsp;
    //         {title}
    //       </p>
    //     </a>
    //     {/* <div id='links'>
    //       <ul>
    //         <li>
    //           <Link to='/home'>Home</Link>
    //         </li>
    //         <li>
    //           <Link to='/guides'>Guides</Link>
    //         </li>
    //         <li>
    //           <Link to='/notes'>Notes</Link>
    //         </li>
    //         <li>
    //           <Link to='/contact'>Contact</Link>
    //         </li>
    //       </ul>
    //     </div> */}
    //   </div>
    // </div>
  );
};

Navigation.defaultProps = {
  title: 'AMASA MUSIC',
};

export default Navigation;
