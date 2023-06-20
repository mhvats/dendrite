import * as React from 'react';
import './Sidebar.css'
import {SidebarComps} from './SidebarComps'
interface Props {
    name ?: string;
}

export const Sidebar: React.FunctionComponent<Props> = (props) => {
    const handleHome = ()=>{
        console.log("This is Home");
    }
    const handleSearch = ()=>{
        console.log("This is search");
    }
    const handleFav = ()=>{
        console.log("This is favourtie");
    }
    const handlePlaylist = ()=>{
        console.log("This is playlists");
    }
  return (
    <>
    <div>
       <SidebarComps title='Home' onClick ={handleHome}/>
       <SidebarComps title='Search' onClick = {handleSearch}/>
       <SidebarComps title='Favourites' onClick = {handleFav}/>
       <SidebarComps title='Playlists' onClick = {handlePlaylist}/>
    </div>
    </>
  );
};
