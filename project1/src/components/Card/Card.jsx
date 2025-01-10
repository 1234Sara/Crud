import React from 'react'

export default function Card(props) {
    console.log(props);
    const {title, poster_path, overview, name} = props.item
  return (
    <div className="col-lg-3">
    <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} className='img-fluid' />
    <h2>{title ? title : name}</h2>
    <p>{overview}</p>
</div>  
  )
}
