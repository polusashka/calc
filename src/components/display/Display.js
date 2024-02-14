import { useSelector, useDispatch} from 'react-redux';
import { CALCULATOR_KEY } from '../../reducer';
import { InputAdornment, IconButton, FormControl, OutlinedInput, Box, Container, InputBase } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { Row, Col } from 'react-bootstrap';
import { clear } from '../../actions';
import ClearIcon from '@mui/icons-material/Clear';


const Display = () => {

    const dispatch = useDispatch();
    const calc = useSelector((state) => {
        return state[CALCULATOR_KEY]
    })

    if (calc.ans === 'Incorrect input'){
        return(
            <Row>
                <Col md = {{span:4, offset: 4}} className='text-center'>  
                    <FormControl>
                        <OutlinedInput 
                            error
                            sx={{ marginTop: '50px', width: '38ch' }}
                            value={(calc.ans).length === 0 ? calc.number : calc.ans}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="clear"
                                        onClick={() => dispatch(clear())}
                                        edge="end"
                                    >
                                        <ClearIcon/>
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                </Col>
            </Row>
        )
    } else {
        return(
            <Container sx={{display:"flex", justifyContent:"center"}}>
                <Box sx={{
                    bgcolor: alpha('#ff7961', 0.05),
                    boxShadow: 3,
                    borderRadius: 2,
                    p: 3,
                    width: 480,
                    marginTop: '50px',
                 }}>
                    <Row>
                        <FormControl fullWidth={true} sx={{paddingLeft: '20px', paddingRight: '20px'}}>
                            <InputBase
                                value={(calc.ans).length === 0 ? calc.number : calc.ans}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="clear"
                                            onClick={() => dispatch(clear())}
                                            edge="end"
                                        >
                                            <ClearIcon/>
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                    </Row>
                </Box>
            </Container>
        )
    }
    


    // return(
    //     <div className=' h-20 '>
    //     <input
    //     type='text'
    //     placeholder='0'
    //     value={(calc.ans).length === 0 ? calc.number : calc.ans}
    //     className=' w-full h-full border border-white bg-white text-gray-900 text-4xl text-right pr-5 '

    //      />
    //     </div>
    // )
}

export default Display;