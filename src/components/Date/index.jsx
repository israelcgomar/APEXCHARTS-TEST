import React from 'react'
import moment from 'moment'
/**
 * Components
 */
import 'date-fns'
import Grid from '@material-ui/core/Grid'
import DateFnsUtils from '@date-io/date-fns'


/**
 * Styles
 */
import useStyles from './Styles'

/**
 * Date Picker
 */
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

export default function MaterialUIPickers({ dateOne, dateTwo }) {

  const classes = useStyles()

  function convert(str) {
    let date = new Date(str)
    const convert = moment(date).format('YYYY-MM-DD')
    return convert
  }

  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [setStartDate] = React.useState(convert(new Date()));
  // const [startDate, setStartDate] = React.useState(convert(new Date()));
  
  const [selectedEndDate, setSelectedEndDate] = React.useState();
  const [setEndDate] = React.useState(convert(new Date()));
  // const [endDate, setEndDate] = React.useState(convert(new Date()));
  
  const handleDateChange = date => {
    setSelectedDate(date);    
    setStartDate(convert(date))
    dateOne(convert(date))
  };

  const handleDateEndChange = date => {
    setSelectedEndDate(date);    
    setEndDate(convert(date))
    dateTwo(convert(date))
  };

  return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container direction='row' justify='center' alignItems='center'>
          <div className={classes.picker} >
            <KeyboardDatePicker
                margin='normal'
                id='date-picker-one'
                label='Fecha inicio'
                okLabel='Aceptar'
                cancelLabel='Cancelar'
                format='yyyy/MM/dd'
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
            />
          </div>
          <div className={classes.picker}>
            <KeyboardDatePicker
                 margin='normal'
                 id='date-picker-two'
                 label='Fecha inicio'
                 okLabel='Aceptar'
                 cancelLabel='Cancelar'
                 format='yyyy/MM/dd'
                 value={selectedEndDate}
                 onChange={handleDateEndChange}
                 KeyboardButtonProps={{
                   'aria-label': 'change date',
                 }}
            />
          </div>
        </Grid>
      </MuiPickersUtilsProvider>
  );
}
