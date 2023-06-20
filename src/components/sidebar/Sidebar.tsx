import * as React from "react";
import "./Sidebar.css";
import { SidebarComps } from "./SidebarComps";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";

export const Sidebar: React.FunctionComponent = () => {
  //   const [iconContainer, setIconContainer] = React.useState<string>("menu-icon");
  //   const [titleContainer, setTitleContainer] =
  //     React.useState<string>("menu-title");
  const handleHome = () => {
    console.log("home clicked");
  };
  const handleSearch = () => {
    console.log("search clicked");
  };
  const handleFav = () => {
    console.log("fav clicked");
  };
  const handlePlaylist = () => {
    console.log("playlist clicked");
  };
  return (
    <>
      <div
        className="text-white d-flex flex-column w-25 justify-content-center"
        style={{ height: "100vh", backgroundColor: "#5b3ede" }}
      >
        <SidebarComps
          title="Home"
          onClick={handleHome}
          Icon={MenuIcon}
          //   iconContainer={iconContainer}
          //   titleContainer={titleContainer}
        />
        <SidebarComps
          title="Search"
          onClick={handleSearch}
          Icon={SearchIcon}
          //   iconContainer={iconContainer}
          //   titleContainer={titleContainer}
        />
        <SidebarComps
          title="Favourites"
          onClick={handleFav}
          Icon={FavoriteIcon}
          //   iconContainer={iconContainer}
          //   titleContainer={titleContainer}
        />
        <SidebarComps
          title="Playlists"
          onClick={handlePlaylist}
          Icon={PlayCircleFilledWhiteIcon}
          //   iconContainer={iconContainer}
          //   titleContainer={titleContainer}
        />
      </div>
    </>
  );
};
