import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


const Onboard = () => {

  return(
  <div>
    <Form>

      <FormGroup>
        <Label for="exampleEmail">Name</Label>
        <Input type="name" name="name" id="exampleName" placeholder="what's your name" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="email" />
      </FormGroup>

      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="password" />
      </FormGroup>

      <FormGroup check>
        <Label check>
        <Input type="checkbox" />{' '}
        I agree to the terms of service
        </Label>
      </FormGroup>

      <Button>Submit</Button>
    </Form>
  </div>
  )

}

export default Onboard;