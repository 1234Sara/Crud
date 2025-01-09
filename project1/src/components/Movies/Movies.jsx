import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Movies() {

    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [apiError, setApiError] = useState(null)

    async function getMovies() {
        setIsLoading(true)
        try {

            const options = {
                method: 'GET',
                headers: {
                  accept: 'application/json',
                  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MjQ0MmYyNjNiYTYyODBhZDUwMDc1NjQ5YjU0ZGYwMiIsIm5iZiI6MTczNjM0OTIwOS4wNzcsInN1YiI6IjY3N2U5NjE5NDNmYzdiMmFlOGJiMGQwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9fvun9DrYWwbbaDHJpefYg4xxsFHrM0H_rnAwK_aCMo'
                }
              };    
            
            const {data} = await axios.get('https://api.themoviedb.org/3/trending/movie/day', options)
            
            // const movies = data.results  "We can't make local define here we should make use state"
            
            setMovies(data.results)
            setIsLoading(false)
            console.log(data.results);
        } 
        
        catch (error) {
            console.log(error);
            setIsLoading(false)
            setApiError(error.response.data.status_message)
        }
        
        }

        useEffect(() => {
            getMovies();
        }, [])
        

  return (
    <section>
        
        <div className="container">
         <div className="row gy-4">
            {isLoading ? (<h1>Loading...</h1>) : 
            
            apiError ?
            <div className='alert alert-danger'>{apiError}</div>
            : 
            (
                movies && movies.length > 0 ?
                // movies.length === 0 ? <h1>No Movies Found</h1>
                // :
                movies.map((movie) => (
                <div key={movie.id} className="col-lg-3">
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className='img-fluid' />
                    <h2>{movie.title}</h2>
                    <p>{movie.overview}</p>
                </div>    
                ))
                : <h1>No Movies Found</h1>
            )} 
            </div>
        </div> 
    </section>
  )
}


// We should call API in the UseEffect.

// We use axios in react instead of fetch, always the return is an object is data.

// We should make useState because useState makes re-render for the data.

// In the image we should get the path from the API in the basics guide.

// Initial value of useState is defined as the return of data type,if it's array put [], string put '', number put 0 & if it's object put null

// If you need to make loading so, you need to re-render the data so, we make another useState.

// We put setIsLoading(true) before try to make loading & make it false after the data is getting after setMovies to stop loading & put the loading tag condition inside after return if it's loading make this tag else return the API data.

// We need to handle error so, we make useState for the errors.

// We make setError of API after catch to handle error and put error.response.data.status_message to display error message & put apiError condition if there is an error put the error message.