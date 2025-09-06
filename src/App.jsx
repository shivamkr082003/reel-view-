import { Route, Routes } from "react-router-dom"
import Home from "./components/home"
import Trending from './components/Trending'
import Popular from './components/Popular'
import Movies from './components/Movies'
import Tvshows from './components/Tvshows'
import People from './components/People'
import MovieDetails from './components/MovieDetails'
import TvDetails from './components/TvDetails'
import PersonDetails from './components/PersonDetails'


function App() {
 

  return (
    <div className='w-screen  bg-[#1F1E24] flex '>
       
       <Routes>
        <Route path="/" element={<Home/>} />
         <Route path="/trending" element={<Trending/>} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/movie" element={<Movies />}/>
           <Route path="/movie/details/:id" element={<MovieDetails />} ></Route>
          <Route path="/tv" element={<Tvshows/>}/> 
           <Route path="/tv/details/:id" element={<TvDetails/>}></Route> 
            <Route path="/person" element={<People />} />
              <Route path="/person/details/:id" element={<PersonDetails />} />
       </Routes>
    </div>
  )
}

export default App