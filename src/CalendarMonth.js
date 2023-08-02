import { useState } from 'react'
import Calendar from 'react-calendar'

function CalendarMonth(){
  const [date, setDate] = useState(new Date())

  let today = new Date()
  let month = today.getMonth()
  let year = today.getFullYear()

  return (
    <div>
      <h1 className='text-center'>React Calendar</h1>
      <div className='calendar-container'>
        <Calendar 
        onChange={setDate} 
        value={date}
        minDate={new Date()}
        />
      </div>
      <p className='text-center'>
        <span className='bold'>Selected Date:</span>{' '}
        {date.toDateString()}
      </p>
    </div>
  )
}

export default CalendarMonth