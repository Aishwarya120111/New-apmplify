//import logo from './logo.svg';
import './App.css';
import {Container, Button, Form} from 'react-bootstrap';
import Amplify from "aws-amplify";
import { API } from 'aws-amplify';

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

async function addContact() {
  const data = {
    body: {
      Name: formState.Name,
      
      Email: formState.Email,
      FeedbackMessage: formState.FeedbackMessage
    }
  };

  console.log(data);
  const apiData = await API.post('feedbackmap', '/feedform', data);
  console.log({ apiData });
  alert('Mail sent');
}

const formState = { Name: '', Email: '',  FeedbackMessage: '' };

function updateFormState(key, value) {
  formState[key] = value;
}

function App() {
  const {search} = useLocation()
    console.log(search);
    const {name,email} = queryString.parse(search)
    
    console.log('name is',typeof name);
  return (
    <Container>
    <div>
      <h3>Get in touch</h3>
      <br/>
        <Form>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control placeholder="Name" value={name} onChange={updateFormState('Name', name)} />
          </Form.Group>
          
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control placeholder="MailId" value={email} onChange={updateFormState('Email', email)} />
          </Form.Group>
          <Form.Group>
            <Form.Label>FeedbackMessage</Form.Label>
            <Form.Control placeholder="FeedbackMessage" onChange={e => updateFormState('FeedbackMessage', e.target.value)} />
          </Form.Group>
          <Button onClick={addContact}>Send a message</Button>
        </Form>
      </div>
    </Container>
  );
}

export default App;
