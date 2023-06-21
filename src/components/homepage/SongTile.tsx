import { FC } from "react";
import "./SongTile.css";
export const SongTile: FC = () => {
  const handleClick = () => {
    console.log("Tile has been clicked");
  };
  return (
    <>
      <div className="song-tile-container mx-3 border" onClick={handleClick}>
        <div className="song-tile-cover">song cover img</div>
        <div className="song-tile-title">Song 1</div>
      </div>
    </>
  );
};
