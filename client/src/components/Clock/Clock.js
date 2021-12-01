import './Clock.css'
import { useState, useEffect } from 'react'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import Col from 'react-bootstrap/Col'
const Clock = () =>{

  const [clock, setClock] = useState(moment().format('LT'));

  useEffect(() => {
    setInterval(() => {
      setClock(moment().format('LT'));
      
    }, 1000);
  }, []);




  return (
    <Col
      md="auto"
      className='clock'
    >
      {clock}
      <FontAwesomeIcon icon={faCoffee}/>
      


    </Col>
  )
}

export default Clock