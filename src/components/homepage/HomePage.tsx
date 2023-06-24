import { FC, useState } from "react";
import "./HomePage.css";
import { Data } from "../../Data";
import { SongTile } from "./SongTile";
import { FavSongTile } from "./FavsongTile";
import { AddToPlaylistTile } from "./AddToPlaylistTile";
export const HomePage: FC = () => {
  const [favSongArray, setFavSongArray] = useState<number[]>([]);
  const [playlistArray, setPlaylistArray] = useState<number[]>([]);
  const [addToPlaylist, setAddToPlaylist] = useState<boolean>(false);
  const onAddFav = (id: number, e: React.MouseEvent<Element, MouseEvent>) => {
    e.stopPropagation();
    setFavSongArray((prevState: number[]) => [...prevState, id]);
    console.log(favSongArray);
  };
  const onAddPlaylist = (
    id: number,
    e: React.MouseEvent<Element, MouseEvent>
  ) => {
    setAddToPlaylist((prevState) => {
      return !prevState;
    });
    e.stopPropagation();
    setPlaylistArray((prevState: number[]) => [...prevState, id]);
    console.log(playlistArray);
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
        {addToPlaylist ? <AddToPlaylistTile /> : null}
      </div>
    </div>
  );
};
