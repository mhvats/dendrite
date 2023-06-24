import React, { FC, useState } from "react";
// import { CreateNewPlaylist } from "./CreateNewPlaylist";
import "./AddTopPlaylist.css";
interface Props {
  onAddNewPlaylist: (e: React.MouseEvent<Element, MouseEvent>) => void;
  onAddExistingPlaylist: (e: React.MouseEvent<Element, MouseEvent>) => void;
}
export const AddToPlaylistTile: FC<Props> = ({
  onAddNewPlaylist,
  onAddExistingPlaylist,
}) => {
  console.log("added to playlist triggered");
  const handleNewPlaylist = (e: React.MouseEvent<Element, MouseEvent>) => {
    e.stopPropagation();
    console.log("create new playlist");
    onAddNewPlaylist(e);
    console.log(`create new playlist component render`);
  };
  const handleExistingPlaylist = (e: React.MouseEvent<Element, MouseEvent>) => {
    e.stopPropagation();
    onAddExistingPlaylist(e);
    console.log("Add to existing playlist");
  };
  return (
    <>
      <div className="add-to-playlist">
        <div className="create-new border" onClick={handleNewPlaylist}>
          Create new playlist
        </div>
        <div
          className="existing-playlist border"
          onClick={handleExistingPlaylist}
        >
          Add to existing playlist
        </div>
      </div>
    </>
  );
};
