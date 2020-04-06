import React, {useEffect} from 'react';


/**
 * Component NavBar
 */
import DenseAppBar from './AppBar'

/**
 * Query Graphql
 */
import { GET_TICKETS } from '../graphql/Querys/Tickets'
import { useQuery } from '@apollo/react-hooks';

/**
 * Components
 */
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

// import Table from './Table'
import Table from './Table'
import DatePicker from './Date'
import Loader from './Loader'

/**
 * Styles
 */
import useStyles from './Styles'

/**
 * F@Firebase
 */
import * as firebase from 'firebase/app'
import 'firebase/performance'
import { firebaseConfig } from '../monitoring/config'

firebase.initializeApp(firebaseConfig);
const perf = firebase.performance();

export default function App() {

  // const [startDate, setStartDate] = useState('');
  // const [ endDate, setEndDate ] = useState('')

  // useEffect(() => {
  //   console.log("componentDidMount");
  // }, [startDate])
  let screenTrace = firebase.performance.Trace

  useEffect(() => {
    


    screenTrace = perf.trace('dashboardFee')

  }, [])



  // perf.

  const classes = useStyles();

  const { loading, error, data } = useQuery(GET_TICKETS, {
    variables: {
      date_start: '2019-12-31',
      hour_start: '00:00:00',
      date_end: '2019-12-31',
      hour_end: '00:05:00'
    }
  }
  );

  // function dateOne(startDate) {
  //   // console.log("startDate ", startDate);
  //   setStartDate(startDate);
  // } 

  // function dateTwo(endDate) {
  //   // console.log("endDate ", endDate);
  //   setEndDate(endDate);
  // } 

  
  


  if (loading) return <Loader></Loader>

  if (error) return `Error! ${error}`

  return (
    <div>
      <DenseAppBar></DenseAppBar>
      <Grid className={classes.root}>
        <div className={classes.datePicker} >
          <DatePicker 
            // dateOne={dateOne}
            // dateTwo={dateTwo}
          />
        </div>
        <div className={classes.searchPicker}>
          <Button 
              variant="outlined" 
              color="secondary"
          >
            Buscar
          </Button>
        </div>
        <div>
          <Table data={data} />
        </div>
      </Grid>
    </div>
  );
}


