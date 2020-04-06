import React from 'react'
import Loader from 'react-loader-spinner'

import useStyles from './Styles';

export default function Loading() {
    
    let classes = useStyles();
    
    return(
     <Loader
        type="Watch"
        color="#e10998"
        height={100}
        width={100}
        timeout={3000} //3 secs
        className={classes.loader}
     >
     </Loader>

    );
}