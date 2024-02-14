import {Box, Container} from '@mui/material';
import { alpha } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { CALCULATOR_KEY } from '../../reducer';


const Journal = () => {

    const calc = useSelector((state) => {
        return state[CALCULATOR_KEY]
    })

    return(
        <Container>
            <Box sx={{
                bgcolor: alpha('#ff7961', 0.5),
                boxShadow: 3,
                borderRadius: 2,
                p: 3,
                width: '200px',
                height: '450px',
                marginLeft: '10px',
                marginTop: '50px'
                }} 
            >
                {calc.Journal}
            </Box>
        </Container>
    )
};

export default Journal;