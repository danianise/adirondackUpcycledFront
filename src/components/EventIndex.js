import React, {useEffect, useState} from 'react'
import '../css/EventIndex.css'
import {AiOutlineClockCircle} from 'react-icons/ai'

function EventIndex() {
    const [eventData, setEventData] = useState([])

    useEffect(() => {
      const url = process.env.REACT_APP_API_URL + '/events/'
      const opts = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }
      fetch(url, opts)
      .then(res => res.json())
      .then(data => setEventData(data))
    }, [])
  
    return (
      <div className='eventIndex'>
        {/* <h1>[Events] <Link to='/addevent'>(+)</Link></h1> */}
  
        {eventData.map((each) => {
          let dateTime = each.dateTime
          let date = dateTime.slice(0, 10)
          let year = date.slice(0, 4)
          console.log(parseInt(year))
          let month = date.slice(5, 7)
          let months = ["None", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
          let day = date.slice(8, 10)
          let time = dateTime.slice(11, 16)
          let hour = time.slice(0, 2)
          let minutes = time.slice(3, 5)
          let amPM = "AM"
          if(month.slice(0,1) == 0){
            month = month.slice(1,2)
          }
          if (hour > 12){
            hour = hour-12
            amPM = "PM"
          }
          else if(hour==12){
            amPM = "PM"
          } 

          // to check if event happened before today, generate today's date
          let currentDate = new Date()
          currentDate = JSON.stringify(currentDate)
          console.log(currentDate)
          // split current date into year, month, date
          let currentYear = parseInt(currentDate.substr(1, 4))
          console.log({currentYear})
          let currentMonth = parseInt(currentDate.substr(6, 2))
          console.log({currentMonth})
          let currentDay = parseInt(currentDate.substr(9, 2))
          console.log({currentDay})
          // compare to date of event
          if (currentYear > parseInt(year)){
            each.archive = true
          } else if(currentYear === parseInt(year) && currentMonth > parseInt(month)){
            each.archive = true
          } else if(currentYear === parseInt(year) && currentMonth === parseInt(month) && currentDay > parseInt(day)){
            each.archive = true
          }

          if (each.archive === false){
            return (
              <>
                <div className="event-container">
                  <div className="event">
                      <div className="event-left">
                          <div className="event-date">
                              <div className="date">
                                  {day}
                              </div>
                              <div className="month">
                                  {months[month]}
                              </div>
                              <div className="year">
                                {year}
                              </div>
                          </div>
                      </div>
                      <div className="event-right">
                        <a href={each.url}>
                          <h3 className="event-title">{each.eventName}</h3>
                        </a>
                        <h4>{each.location}</h4>
                        <div className="event-description">
                          {each.description}
                        </div>
                        <div className="event-timing">
                          <AiOutlineClockCircle className = "timeIcon"/>
                          {hour}:{minutes} {amPM} EST
                        </div>
                      </div>
                  </div>
                </div>
              </>
              )
          }
            
        })}
        
      </div>
  )
}

export default EventIndex