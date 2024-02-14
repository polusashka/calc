import { Fab, Container, Box } from '@mui/material';
import BackspaceOutlinedIcon from '@mui/icons-material/BackspaceOutlined';
import { Row, Col } from 'react-bootstrap';
import {loadButton, del, ans} from '../../actions';
import { useDispatch } from 'react-redux';
import { alpha } from '@mui/material/styles';


const Digits = () => {

    const dispatch = useDispatch();

    const handleAnswer = (e) => {
        e.preventDefault()
        dispatch(ans())
    }

    return(
        <Container sx={{display:"flex", justifyContent:"center"}}>
            <Box sx={{
                bgcolor: alpha('#ff7961', 0.5),
                boxShadow: 3,
                borderRadius: 2,
                p: 3,
                width: 480,
                marginTop: '10px',
                }} 
            >
                <Row className="text-center pb-2"> 
                    <Col md={{span: 2, offset: 1}}  >
                        <Fab color="primary" onClick={() => dispatch(loadButton('('))}>&#x2329;</Fab>
                    </Col>
                    <Col md={{span: 2}}  >
                        <Fab color="primary" onClick={() => dispatch(loadButton(')'))}>&#9002;</Fab>
                    </Col>
                    <Col md={{span: 2}}  >
                        <Fab color="primary" onClick={() => dispatch(loadButton('cos'))}>cos</Fab>
                    </Col>
                    <Col md={{span: 2}}  >
                        <Fab color="primary" onClick={() => dispatch(loadButton('sin'))}>
                            sin
                        </Fab>
                    </Col>
                    <Col md={{span: 2}}  >
                        <Fab color="primary" onClick={() => dispatch(loadButton('*'))}>*</Fab>
                    </Col>
                </Row>
                <Row className="text-center pb-2"> 
                    <Col md={{span: 2, offset: 1}}  >
                        <Fab color="primary" onClick={() => dispatch(loadButton(1))}>1</Fab>
                    </Col>
                    <Col md={{span: 2}}  >
                        <Fab color="primary" onClick={() => dispatch(loadButton(2))}>2</Fab>
                    </Col>
                    <Col md={{span: 2}}  >
                        <Fab color="primary" onClick={() => dispatch(loadButton(3))}>3</Fab>
                    </Col>
                    <Col md={{span: 2}}  >
                        <Fab color="primary" onClick={() => dispatch(loadButton('ln'))}>ln</Fab>
                    </Col>
                    <Col md={{span: 2}}  >
                        <Fab color="primary" onClick={() => dispatch(loadButton(' + '))}>
                            +
                        </Fab>
                    </Col>
                </Row>
                <Row className="text-center pb-2"> 
                    <Col md={{span: 2, offset: 1}}  >
                        <Fab color="primary" onClick={() => dispatch(loadButton(4))}>4</Fab>
                    </Col>
                    <Col md={{span: 2}}  >
                        <Fab color="primary" onClick={() => dispatch(loadButton(5))}>5</Fab>
                    </Col>
                    <Col md={{span: 2}}  >
                        <Fab color="primary" onClick={() => dispatch(loadButton(6))}>6</Fab>
                    </Col>
                    <Col md={{span: 2}}  >
                        <Fab color="primary" onClick={() => dispatch(loadButton('^'))}>^</Fab>
                    </Col>
                    <Col md={{span: 2}}  >
                        <Fab color="primary" onClick={() => dispatch(loadButton(' - '))}>-</Fab>
                    </Col>
                </Row>
                <Row className="text-center pb-2"> 
                <Col md={{span: 2, offset: 1}}  >
                        <Fab color="primary" onClick={() => dispatch(loadButton(7))}>7</Fab>
                    </Col>
                    <Col md={{span: 2}}  >
                        <Fab color="primary" onClick={() => dispatch(loadButton(8))}>8</Fab>
                    </Col>
                    <Col md={{span: 2}}  >
                        <Fab color="primary" onClick={() => dispatch(loadButton(9))}>9</Fab>
                    </Col>
                    <Col md={{span: 2}}  >
                        <Fab color="primary" onClick={() => dispatch(loadButton('sqrt'))}>sqrt</Fab>
                    </Col>
                    <Col md={{span: 2}}  >
                        <Fab color="primary" onClick={() => dispatch(loadButton(' / '))}>/</Fab>
                    </Col>
                </Row>
                <Row className="text-center"> 
                    <Col md={{span: 2, offset: 1}}  >
                        <Fab color="primary" onClick={() => dispatch(loadButton(0))}>0</Fab>
                    </Col>
                    <Col md={{span: 2}}  >
                        <Fab color="primary" onClick={() => dispatch(loadButton(','))}>,</Fab>
                    </Col>
                    <Col md={{span: 2}}  >
                        <Fab color="primary" onClick={() => dispatch(del())}> <BackspaceOutlinedIcon fontSize='small'/></Fab>
                    </Col>
                    <Col md={{span: 2}}  >
                        <Fab color="primary" onClick={() => dispatch(loadButton('!'))}>!</Fab>
                    </Col>
                    <Col md={{span: 2}}  >
                        <Fab color="primary" onClick={handleAnswer}>=</Fab>
                    </Col>
                </Row>
            </Box>
        </Container>
    )
}

export default Digits;