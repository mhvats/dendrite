import React, { FC, useState } from "react";
import "./HomePage.css";
import { Data } from "../../Data";
import { SongTile } from "./SongTile";
import { FavSongTile } from "./FavsongTile";
import { AddToPlaylistTile } from "./AddToPlaylistTile";
import { CreateNewPlaylist } from "./CreateNewPlaylist";
export const HomePage: FC = () => {
  const [favSongArray, setFavSongArray] = useState<number[]>([]);
  const [playlistArray, setPlaylistArray] = useState<number[]>([]);
  const [addToPlaylist, setAddToPlaylist] = useState<boolean>(false);
  const [createNewPlaylist, setCreateNewPlaylist] = useState<boolean>(false);
  const onAddFav = (id: number, e: React.MouseEvent<Element, MouseEvent>) => {
    e.stopPropagation();
    setFavSongArray((prevState: number[]) => [...prevState, id]);
    // console.log(favSongArray);
  };
  const onAddPlaylist = (
    id: number,
    e: React.MouseEvent<Element, MouseEvent>
  ) => {
    e.stopPropagation();
    setAddToPlaylist((prevState) => {
      return !prevState;
    });
    console.log(addToPlaylist);
    setPlaylistArray((prevState: number[]) => [...prevState, id]);
    // console.log(playlistArray);
  };
  const renderedSongs = Data.map((song) => (
    <SongTile
      key={song.id}
      id={song.id}
      title={song.title}
      onAddFav={onAddFav}
      onAddPlaylist={onAddPlaylist}
    />
  ));
  const renderFavSongs = Data.filter((song) =>
    favSongArray.includes(song.id)
  ).map((song) => (
    <FavSongTile key={song.id} id={song.id} title={song.title} />
  ));

  const onAddNewPlaylist = (e: React.MouseEvent<Element, MouseEvent>) => {
    e.stopPropagation();
    setCreateNewPlaylist((prevState) => {
      return !prevState;
    });
  };
  const onAddExistingPlaylist = (e: React.MouseEvent<Element, MouseEvent>) => {
    e.stopPropagation();
    setAddToPlaylist((prevState) => {
      return !prevState;
    });
  };
  const onClosePlaylist = (e: React.MouseEvent<Element, MouseEvent>) => {
    e.stopPropagation();
    setCreateNewPlaylist((prevState) => {
      return !prevState;
    });
    console.log("closing is working");
  };
  return (
    <div className="homepage-container">
      <div className="homepage-img-container">
        <p>This is cover image</p>
      </div>
      <div className="homepage-song-tile">
        <div className="song-tile-heading d-flex align-items-center">
          <p className="border py-3">Released This Week</p>
        </div>
        <div className="song-tile-component d-flex">{renderedSongs}</div>
        <div className="fav-song-tile-component d-flex">{renderFavSongs}</div>
        {addToPlaylist ? (
          <AddToPlaylistTile
            onAddNewPlaylist={onAddNewPlaylist}
            onAddExistingPlaylist={onAddExistingPlaylist}
          />
        ) : null}
        {createNewPlaylist ? (
          <CreateNewPlaylist onClosePlaylist={onClosePlaylist} />
        ) : null}
      </div>
    </div>
  );
};
