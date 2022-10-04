
import React from 'react'
import ScheduleSelector from 'react-schedule-selector'


class App extends React.Component{

state = {schedule_1: [],
        schedule_2: [
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
        ]}

handleChange = newSchedule => {
  this.setState({ schedule_1: newSchedule
})


}

handleChange_2 =() => {
  // Second calendar isn't ediatble hence render is recalled 
this.render()


}


divReturn = (selected) => {
  // Function which returns a custom tag when a slot is selected or not, for the
  // first calendar (user input)
  if (selected){
    return <div style={{ backgroundColor: "green", opacity:0.8 }}>Yes</div> 
  }
  else {
    return <div style={{ backgroundColor: "red", opacity: 0.8 }}>No</div> 
  }
}

"2018-05-21T01:00:00.000Z"

divReturn_2 = (selected, time) => {
    // Function which returns a custom tag when a slot is selected or not, for the
  // second calendar (other invitees prefences)
   if (selected){
  return <div style={{ backgroundColor: "green", opacity:0.5 }}>Yes</div> 
  }

  else {
    return <div style={{ backgroundColor: "red", opacity: 0.5 }}>No</div> 
  }
}


renderCustomDateCell = (time, selected, innerRef) => (

  // Calls div return for generate custom div tags for 
  // first calendar based on whether box is selected or not

  <div style={{ textAlign: 'center' }} ref={innerRef}>
    {this.divReturn(selected)}
  </div>
)

renderCustomDateCell_2 = (time, selected, innerRef) => (

  // Calls div return for generate custom div tags for 
  // first calendar based on whether box is selected or not

  <div style={{ textAlign: 'center' }} ref={innerRef}>
    {this.divReturn_2(selected)}
  </div>
)


handleClick = () =>{
  alert('FormSubmitted')
}


render() {
  return (
    <div>


    <ScheduleSelector
      selection={this.state.schedule_1}
      numDays={3}
      minTime={8}
      maxTime={22}
      startDate={new Date('Fri May 18 2018 17:57:06 GMT-0700 (PDT)')}
      dateFormat="ddd M/D"
      renderDateCell={this.renderCustomDateCell}
      onChange={this.handleChange}
    />

    <p>The calendar below is not modifiable!</p>

    <ScheduleSelector className='second'
      selection={this.state.schedule_2}
      numDays={3}
      minTime={8}
      maxTime={22}
      startDate={new Date('Fri May 18 2018 17:57:06 GMT-0700 (PDT)')}
      dateFormat="ddd M/D"
      renderDateCell={this.renderCustomDateCell_2}
      onChange={this.handleChange_2}

    />

    <div style={{
       padding: "1em 0em",
       overflowX: "auto",
       width: "100%",
       direction: "rtl",
       boxSizing: "border-box" // <--- this line
     }}></div>

    <input className = 'NameInput' placeholder='Name'
    ></input>
    <input className = 'EmailInput' placeholder='Email' ></input>
    <button onClick={this.handleClick}>
        Submit
      </button>
    </div>


  )
}
}


export default App