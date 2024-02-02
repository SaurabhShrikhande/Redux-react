import './App.css';
import Home from './Home';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import { useEffect, useState} from 'react';
import axios from 'axios';
  import Movies from './Movies';
  import TVShows from './TVShows';




function App() {
  const [moviedata , setmoviedata] = useState([]);

  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc',
   {
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZDJmN2E0OTFjODMwNTJmOGYwYjgxNDQwZWVhNmVhNiIsInN1YiI6IjY1YmI5MmQ4YzE0NGRkMDE3Y2ZlZjhmOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cXsnR0cqAOdYRdaCAT3SCQM9xLswfs-MUVcCx8zpvQc'
    }
   }
    )
    .then((res) => {
      console.log(res.data.results)
     setmoviedata(res.data.results);
    } )
    .catch(err => console.log(err))
  
    // const options = {
    //   method: 'GET',
    //   headers: {
    //     accept: 'application/json',
    //     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZDJmN2E0OTFjODMwNTJmOGYwYjgxNDQwZWVhNmVhNiIsInN1YiI6IjY1YmI5MmQ4YzE0NGRkMDE3Y2ZlZjhmOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cXsnR0cqAOdYRdaCAT3SCQM9xLswfs-MUVcCx8zpvQc'
    //   }
    // };
    
    // fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
    //   .then(response => response.json())
    //   .then(response => console.log(response))
    //   .catch(err => console.error(err));
  }, [])
  

  const router =  createBrowserRouter([
    {
      path : "/",
      element : <Home/>
    },
    {
      path : "/movies",
      element : <Movies/>
    },
    {
      path : "/tvshows",
      element : <TVShows/>
    }
  ])

  return (
    <div className="App">
      <RouterProvider router ={router} />
       
       {
        moviedata.map((item, idx) =>{
     return (<div key={idx} style={{border:"1px solid black", margin:"10px"}}>
      <h1>{item.original_title}</h1>
      <p>{item.overview}</p>
     </div>)
        })
       }
      
    </div>
  );
}

export default App;
