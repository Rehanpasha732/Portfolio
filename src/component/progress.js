import * as React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function LinearProgressWithLabel(props) {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: '100%', mr: 1, color:'red', }}>
                <LinearProgress variant="determinate" {...props} />
            </Box>
            <Box sx={{ minWidth: 35 }}>
                <Typography variant="body2" color="white">{`${Math.round(
                    props.value,
                )}%`}</Typography>
            </Box>
        </Box>
    );
}



export default function LinearWithValueLabel() {


    return (
        <Box sx={{ width: '100%'}}>
            <b>HTML</b>
            <LinearProgressWithLabel sty value={90}/>
            <b>CSS</b>
            <LinearProgressWithLabel value={70}/>
            <b>JAVA-SCRIPT</b>
            <LinearProgressWithLabel value={65}/>
            <b>REACT-JS</b>
            <LinearProgressWithLabel value={60}/>
        </Box>
        
    );
}
