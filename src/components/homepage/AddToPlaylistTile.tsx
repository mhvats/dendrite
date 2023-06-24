import React, { FC } from "react";
import "./AddTopPlaylist.css";
export const AddToPlaylistTile: FC = () => {
  console.log("added to playlist triggered");
  return (
    <>
      <div className="add-to-playlist">
        <div className="create-new border">Create new playlist</div>
        <div className="existing-playlist border">Add to existing playlist</div>
      </div>
    </>
  );
};
