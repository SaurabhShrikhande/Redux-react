import './App.css';
import Home from './Home';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"

function App() {
  const router =  createBrowserRouter([
    {
      path : "/",
      element : <Home/>
    },
    {
      path : "movies",
      element : <h1>Movies</h1>
    },
    {
      path : "tvshows",
      element : <h1>TV Shows</h1>
    }
  ])

  return (
    <div className="App">
      <RouterProvider router ={router} />
       
       

    </div>
  );
}

export default App;
