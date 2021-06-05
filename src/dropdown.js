import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

export default function DropDown() {

    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const [show,setShow]=useState(false)
    const handleDateChange = (date) => {
      setSelectedDate(date);
    };

    const data = [
        { title: '1 Date 2020-08-20',value:'2020-08-20'},
        { title: '2 Date 018-05-10',value:'2018-05-10'},
        { title: '3 Date 018-05-11',value:'2018-05-11'},
        { title: '4 Date 018-05-12',value:'2018-05-12'},
        { title: '5 Date 018-05-13',value:'2018-05-13'},
      ];


      function renderDate(){
          if(show){
            return(
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-around">
                <KeyboardDatePicker
                    margin="normal"
                    id="date-picker-dialog"
                    label="Date picker dialog"
                    format="MM/dd/yyyy"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                    'aria-label': 'change date',
                    }}
                />
                </Grid>
          </MuiPickersUtilsProvider>
            )
          }
      }
  return (
        <>
            <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:30}}>
                <Autocomplete
                    id={"combo-box-demo"}
                    options={data}
                    getOptionLabel={(option) => option.title}
                    onChange={(e,v)=>{
                        setShow(true)
                        if(v){
                            setSelectedDate(new Date(v.value))
                        }
                    }}
                    style={{ width: 300 }}
                    renderInput={(params) =><TextField {...params} label="Search Date" variant="outlined" />}
                />
            </div>
            {renderDate()}
        </>
  );
}
