import React, { useEffect, useState } from 'react'
import Sidenav from './partials/Sidenav'
import Topnav from './partials/Topnav'
import axios from "../utils/axios";

import HorizontalCards from "./partials/HorizontalCards";
import Dropdown from "./partials/Dropdown";
import Header from './partials/Header';
import Loading from './Loading';


const Home = () => {
    document.title="MAHI | HomePage"

      const [wallpaper, setWallpaper] = React.useState(null);
  const [trending, setTrending] = useState(null);
  const [category, setCategory] = useState("all");

  const GetHeaderWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);

      let randomdata =
        data.results[(Math.random() * data.results.length).toFixed()];
      setWallpaper(randomdata);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const GetTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);
      setTrending(data.results);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  useEffect(() => {
    GetTrending();
    !wallpaper && GetHeaderWallpaper();
  }, [category]);


  return wallpaper  ?(

    <>
      <Sidenav/>
      <div className='ml-[20%] w-[80%] h-full overflow-auto overflow-x-hidden '>
          <Topnav/>
             <Header data={wallpaper} />
            <div className="p-5 flex justify-between">
              <h1 className="text-3xl font-semibold text-zinc-400 ">Trending</h1>
          <Dropdown
            title="Filter"
            options={["tv", "movie", "all"]}
            func={(e) => setCategory(e.target.value)}
          />
          
        </div>
        <HorizontalCards data={trending} />
      </div>
    </>
  ):(<Loading/>)
}

export default Home;