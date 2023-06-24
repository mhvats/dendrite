import React, { FC } from "react";
import "./SongTile.css";
interface Props {
  title: string;
  id: number;
}
export const FavSongTile: FC<Props> = ({ title, id }) => {
  console.log("fav tile triggered");
  return (
    <>
      <>
        <div className="song-tile-container mx-3 border" key={id}>
          <div className="song-tile-cover">
            <p>song cover img</p>
          </div>
          <div className="song-tile-title">{title}</div>
        </div>
      </>
    </>
  );
};
