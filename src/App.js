
import Digits from './components/digits/Digits';
import Display from './components/display/Display';
import Journal from './components/journal/Journal';
import { Row, Col } from 'react-bootstrap';

function App() {

  return (
    <Row>
      <Col md={{span: 4, offset: 3}}>
        <Display></Display>
        <Digits></Digits>
      </Col>
      <Col md={{span: 2}}>
        <Journal></Journal>
      </Col>
    </Row>
  );
}

export default App;
