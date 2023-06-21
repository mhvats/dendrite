import { FC } from "react";
import "./HomePage.css";
import { SongTile } from "./SongTile";
// import coverImageHomePage from "../../assets/images/coverImageHomePage.jpg";
// const coverImageHomePage = require("../../assets/images/coverImageHomePage.jpg");
export const HomePage: FC = () => {
  return (
    <div className="homepage-container">
      <div className="homepage-img-container">
        <p>This is cover image</p>
      </div>
      <div className="homepage-song-tile">
        <div className="song-tile-heading d-flex align-items-center">
          <p className="border py-3">Released This Week</p>
        </div>
        <div className="song-tile-component d-flex">
          <SongTile />
          <SongTile />
          <SongTile />
          <SongTile />
          <SongTile />
          <SongTile />
          <SongTile />
          <SongTile />
          <SongTile />
          <SongTile />
          <SongTile />
          <SongTile />
        </div>
      </div>
    </div>
  );
};
