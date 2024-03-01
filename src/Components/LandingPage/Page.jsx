import React, { useEffect, useState } from 'react'
import './Page.css'
import { Col, Form, Row } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown';
import axios from 'axios';
import Home from '../Home/Home';



function Page() {

    const [displayPage, setdisplayPage] = useState(false)  // display sort component
    const [displaySearch, setSearch] = useState(true)  // to display filter page
    const [airlineData, setAirlineData] = useState([])  // store data
    const [departure, setDeparture] = useState('')   // departure
    const [arrival, setArrival] = useState('')   // arrival location
    const [filter, setfilter] = useState([])   // filtered data store


    // form submit to filter
    const formSubmit = (e) => {
        e.preventDefault()

        setSearch(prevStage => !prevStage)
        const filterData = airlineData
            .filter((item) => item.From_location.toLowerCase() === (departure.toLowerCase())
                && item.To_Location.toLowerCase() === (arrival.toLowerCase()))

if(filterData.length>0)
       { setfilter(filterData);
        setdisplayPage(prevStage => !prevStage)}
        else{
            setdisplayPage(false) 
        }
    }
    console.log(filter);

    // function to fetch

    useEffect(() => {
        const getAirline = async () => {
            try {
                const response = await axios.get('../../db.json');
                console.log(response.data);
            
                setAirlineData(response.data.airlines)
            
            

            } catch (error) {

                console.error('Error fetching data:', error);
            }

        }

        getAirline()
    }, [])

    return (

        <div  >
            {/* Area of Filter */}

            {displaySearch ?

                <div className='wrapper'>
                    <form >
                        <Row>

                            <Col>
                                <div className='input-box'>
                                    <input type="text" placeholder='Enter Departure Location' onChange={(e) => setDeparture(e.target.value)} required />
                                </div>
                            </Col>
                            <Col>
                                <div className='input-box'>
                                    <input type="text" placeholder='Enter Arrival Location' onChange={(e => setArrival(e.target.value))} required />
                                </div>
                            </Col>

                            <Col><button type='submit' onClick={(e) => formSubmit(e)}>Search</button></Col>
                        </Row>


                    </form>
                </div> : ""}

            {/*  area of Sort */}
            {displayPage ? <Home filter={filter}></Home> : "No details found"}



        </div>
    )
}

export default Page
