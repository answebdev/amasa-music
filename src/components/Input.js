import React from 'react';
import {
  Row,
  Col,
  Form,
  Button,
  FormControl,
  InputGroup,
} from 'react-bootstrap';
import classes from '../styles/Input.module.css';

const Input = (props) => {
  return (
    // <div className={classes.Container}>
    //   <input
    // className={classes.Input}
    // type='text'
    // placeholder='Search Artists'
    // value={props.searchTerm}
    // onChange={(e) => props.setSearchTerm(e.target.value)}
    //   ></input>
    // </div>
    <div className={classes.OuterContainer}>
      <div className={classes.Container}>
        <Row>
          <Col md={12}>
            <p>Search for your favorite artists</p>
            <InputGroup className='mb-3'>
              <FormControl
                type='text'
                placeholder='Search Artists'
                value={props.searchTerm}
                onChange={(e) => props.setSearchTerm(e.target.value)}
              />
            </InputGroup>

            {/* <Button
                variant='primary'
                type='submit'
                onClick={() => fetchMusic()}
              >
                Search
              </Button> */}
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Input;
