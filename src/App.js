import './App.css';
import Home from './Home';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import Movies from './Movies';
import TVShows from './TVShows';

function App() {
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
       
       

    </div>
  );
}

export default App;
