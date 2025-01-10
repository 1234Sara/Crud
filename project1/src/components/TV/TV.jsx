import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react';
import Card from '../Card/Card';

export default function TV() {

    const [TV, setTV] = useState([])

    async function getTV() {

        try {

            const options = {
                method: 'GET',
                headers: {
                  accept: 'application/json',
                  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MjQ0MmYyNjNiYTYyODBhZDUwMDc1NjQ5YjU0ZGYwMiIsIm5iZiI6MTczNjM0OTIwOS4wNzcsInN1YiI6IjY3N2U5NjE5NDNmYzdiMmFlOGJiMGQwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9fvun9DrYWwbbaDHJpefYg4xxsFHrM0H_rnAwK_aCMo'
                }
              };
              
           const {data} =await axios.get('https://api.themoviedb.org/3/trending/tv/day', options)
           setTV(data.results)
           console.log(data.results);
        } 
        
        catch (error) {
            console.log(error);
        }
       
    }

    useEffect(() => {
      getTV()
    }, [])
    

  return (
    <section>
        <div className="container">
            <div className="row gy-4">
            {
            TV.map((item =>(
                <Card key={item.id} item = {item}/>
            )))}
            </div>
        </div>
    </section>
  )
}
