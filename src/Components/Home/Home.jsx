import React, { useEffect, useState } from 'react'
import './Home.css'
import { FaLocationDot } from "react-icons/fa6";
import { PiAirplaneInFlightFill } from "react-icons/pi";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MdFlight } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
function Home({ filter }) {

  console.log(filter);
  const [sortitems, setsortitems] = useState([]) // to store filtered array
  const [cheaprate, setCheapRate] = useState(null)  // to display cheap rate
  const [fast, setFast] = useState("")      // to display fastest

  // const sortPrice=()=>{
  //   const response = [...filter].sort((a, b) => b.price - a.price);
  //   setsortitems(response)

  // }
  // function to load componenet open

  const setData = () => {
    setsortitems(filter)
    //  display cheapest
    const updatedfilter = [...filter]
    const cheap = updatedfilter.sort((a, b) => a.price - b.price)[0]

    setCheapRate(cheap.price)


    console.log(cheaprate);
    //  display fastest
    const fastest = updatedfilter.sort((a, b) => a.total_duration - b.total_duration)[0]
    setFast(fastest.total_duration)
  }

  // function to sort

  const handleSort = (sort) => {
    console.log(sort);
    // price sorting
    if (sort === "price") {
      const response = [...filter].sort((a, b) => a.price - b.price);
      setsortitems(response)

    }
    //  hour sorting
    else if (sort === "hour") {
      const response = [...filter].sort((a, b) => a.total_duration - b.total_duration);
      setsortitems(response)
    }
  }

  useEffect(() => {
    setData()



  }, [])

  console.log(sortitems);
  return (
    <div className='body'>

      <div className='container py-4'>
        <div className="row sortingbox d-flex">
          <div className="col-2">
            <Form.Select onChange={(e) => handleSort(e.target.value)} className=' sort-btn  bg-primary text-light' aria-label="Default select example">
              <option>Sort by</option>
              <option value="price">price</option>
              <option value="hour">hours</option>
            </Form.Select>
          </div>

          <div className="col-10">
            <Row className='offers ' style={{ height: '50px' }}>
              <Col className='main-option' >

                <MdFlight className='flight' />  <p>Cheapest:{cheaprate}</p>

              </Col>
              <Col className='option ms-1'>
                <MdFlight className='flight' />  <p>Fastest:{fast}</p>

              </Col>
              <Col className='option ms-1'>
                <AiOutlineLike className='flight' /><p>Best Value:{1000}</p>
              </Col>
            </Row>
          </div>

        </div>
      </div>







      {
        sortitems.map((i, index) =>

          <div className="container ticket-display mb-4">
            <div className="row ticket-row  ">
              <div className="col-2 py-5">
                <img style={{ height: '90px' }} src={i.Airline_logo} alt="" />
              </div>
              <div className="col-2  py-5">
                <h3>{i.Airline_name}</h3>
              </div>
              <div className="col-2  py-5">
                {i.From_location}<br />
                <h5 className='time'>{i.Departure_time}</h5>
              </div>
              <div className="col-2   py-5">
                <FaLocationDot className='text-primary' /><span className='text-primary'>...............................</span><PiAirplaneInFlightFill className='text-primary' /> <br />
                <h5 className='text-center'>{i.total_duration} hrs</h5>
              </div>
              <div className="col-2  py-5">
                {i.To_Location} <br />
                <h5 className='time'>   {i.Arrival_time}</h5>
              </div>
              <div className="col-2   py-5" style={{ height: '150px', borderRadius: '20px' }}>
                <h4 className='text-center '> amount:{i.price}</h4>
                <div className='btn mx-3'>
                  <Button >Select +</Button>{' '}
                </div>
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Home
