import React from 'react'
import ScheduleSelector from 'react-schedule-selector'

 

export  class CalendarSecondary extends React.Component {

    // state = { schedule : [],
    // }
    constructor(props) {
        super(props);
        this.state = {
            schedule : [],
            SecondaryCalendarInput : props.SecondaryCalendarInput
        };
      }
    handleChange = newSchedule => {
      this.setState({ schedule: newSchedule })
    }
    

    SecondaryCalendarInput =[
        "2018-05-18T15:00:00.000Z",
        "2018-05-18T16:00:00.000Z",
        "2018-05-18T17:00:00.000Z",
        "2018-05-18T18:00:00.000Z",
        "2018-05-18T19:00:00.000Z",
        "2018-05-19T17:00:00.000Z",
        "2018-05-19T18:00:00.000Z",
        "2018-05-19T19:00:00.000Z",
        "2018-05-20T18:00:00.000Z",
        "2018-05-20T19:00:00.000Z"
      ]
    divReturn = (selected) => {
      // Function which returns a custom tag when a slot is selected or not
      if (selected){
        return <div style={{ backgroundColor: "green", opacity:0.7 }}>Yes</div> 
      }
      else {
        return <div style={{ backgroundColor: "red", opacity: 0.7 }}>No</div> 
      }
    }
    renderCustomDateCell = (time, selected, innerRef) => (
      <div style={{ textAlign: 'center' }} ref={innerRef}>
        {this.divReturn(selected)}
      </div>
    )
    alertUser = () =>{
      alert('This calendar is not for selection, it is only to get a view of other users availability!' )
    }

  
    render() {

            return  (<ScheduleSelector 

            selection={this.SecondaryCalendarInput}
            numDays={4}
            minTime={8}
            maxTime={20}
            startDate={new Date('Fri May 18 2018 17:57:06 GMT-0700 (PDT)')}
            dateFormat="ddd M/D"
            renderDateCell={this.renderCustomDateCell}
            onChange={this.handleChange}
          />)


           

    }
}


export  class Calendar extends React.Component {

    state = { schedule : [],
    }

    handleChange = newSchedule => {
      this.setState({ schedule: newSchedule })
    }
    

    SecondaryCalendarInput =[
        "2018-05-18T15:00:00.000Z",
        "2018-05-18T16:00:00.000Z",
        "2018-05-18T17:00:00.000Z",
        "2018-05-18T18:00:00.000Z",
        "2018-05-18T19:00:00.000Z",
        "2018-05-19T17:00:00.000Z",
        "2018-05-19T18:00:00.000Z",
        "2018-05-19T19:00:00.000Z",
        "2018-05-20T18:00:00.000Z",
        "2018-05-20T19:00:00.000Z"
      ]
    divReturn = (selected) => {
      // Function which returns a custom tag when a slot is selected or not
      if (selected){
        return <div style={{ backgroundColor: "green", opacity:0.7 }}>Yes</div> 
      }
      else {
        return <div style={{ backgroundColor: "red", opacity: 0.7 }}>No</div> 
      }
    }
    renderCustomDateCell = (time, selected, innerRef) => (
      <div style={{ textAlign: 'center' }} ref={innerRef}>
        {this.divReturn(selected)}
      </div>
    )
    alertUser = () =>{
      alert('This calendar is not for selection, it is only to get a view of other users availability!' )
    }

  
    render() {

            return  (<ScheduleSelector 

            selection={this.state.schedule}
            numDays={4}
            minTime={8}
            maxTime={20}
            startDate={new Date('Fri May 18 2018 17:57:06 GMT-0700 (PDT)')}
            dateFormat="ddd M/D"
            renderDateCell={this.renderCustomDateCell}
            onChange={this.handleChange}
            blockedTimes={this.blockedTimesList}
          />)


           

    }
}


export  class CalendarFinal extends React.Component {

    // state = { schedule : [],
    // }
    constructor(props) {
        super(props);
        this.state = {
            schedule : [],
            SecondaryCalendarInput : props.SecondaryCalendarInput
        };
      }
    handleChange = newSchedule => {
      this.setState({ schedule: newSchedule,
        SecondaryCalendarInput : newSchedule
    })
    this.render(newSchedule)
    }
    

    SecondaryCalendarInput =[
        "2018-05-18T15:00:00.000Z",
        "2018-05-18T16:00:00.000Z",
        "2018-05-18T17:00:00.000Z",
        "2018-05-18T18:00:00.000Z",
        "2018-05-18T19:00:00.000Z",
        "2018-05-19T17:00:00.000Z",
        "2018-05-19T18:00:00.000Z",
        "2018-05-19T19:00:00.000Z",
        "2018-05-20T18:00:00.000Z",
        "2018-05-20T19:00:00.000Z"
      ]
    divReturn = (selected) => {
      // Function which returns a custom tag when a slot is selected or not
      if (selected){
        return <div style={{ backgroundColor: "green", opacity:0.7 }}>Yes</div> 
      }
      else {
        return <div style={{ backgroundColor: "red", opacity: 0.7 }}>No</div> 
      }
    }
    renderCustomDateCell = (time, selected, innerRef) => (
      <div style={{ textAlign: 'center' }} ref={innerRef}>
        {this.divReturn(selected)}
      </div>
    )
    alertUser = () =>{
      alert('This calendar is not for selection, it is only to get a view of other users availability!' )
    }

  
    render(secondary_input) {

            return  (
            
            <div>

            <ScheduleSelector className='SecondaryClass'

            selection={secondary_input}
            numDays={4}
            minTime={8}
            maxTime={20}
            startDate={new Date('Fri May 18 2018 17:57:06 GMT-0700 (PDT)')}
            dateFormat="ddd M/D"
            renderDateCell={this.renderCustomDateCell}
            />

            <ScheduleSelector 
            selection={this.state.schedule}
            numDays={4}
            minTime={8}
            maxTime={20}
            startDate={new Date('Fri May 18 2018 17:57:06 GMT-0700 (PDT)')}
            dateFormat="ddd M/D"
            renderDateCell={this.renderCustomDateCell}
            onChange={this.handleChange}
            blockedTimes={this.blockedTimesList}
            />


            </div>)
            
}
}
