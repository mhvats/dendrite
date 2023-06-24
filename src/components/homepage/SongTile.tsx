import React, { FC, useState, useEffect } from "react";
import "./SongTile.css";
import MenuIcon from "@mui/icons-material/Menu";
interface Props {
  title: string;
  id: number;
  onAddFav: (id: number, e: React.MouseEvent<Element, MouseEvent>) => void;
  onAddPlaylist: (id: number, e: React.MouseEvent<Element, MouseEvent>) => void;
}
export const SongTile: FC<Props> = ({ title, id, onAddFav, onAddPlaylist }) => {
  const [menu, setMenu] = useState<boolean>(false);
  const handleClick = (e: React.MouseEvent<Element, MouseEvent>) => {
    e.stopPropagation();
    // console.log("Tile has been clicked");
  };
  const handleMenuClick = (e: React.MouseEvent<Element, MouseEvent>) => {
    e.stopPropagation();
    setMenu((prevState) => {
      return !prevState;
    });
    // console.log(menu);
  };
  const handleAddToFavClick = (e: React.MouseEvent<Element, MouseEvent>) => {
    e.stopPropagation();
    onAddFav(id, e);
    setMenu(false);
    // console.log(`Fav added ${id}`);
    // console.log(favSongArray);
  };
  const handleAddToPlaylist = (e: React.MouseEvent<Element, MouseEvent>) => {
    e.stopPropagation();
    // console.log(`Playlist added ${id}`);
    onAddPlaylist(id, e);
    setMenu(false);
  };
  const handleMenuHide = (e: React.MouseEvent<Element, MouseEvent>) => {
    e.stopPropagation();
    setMenu(false);
  };
  return (
    <>
      <div
        className="song-tile-container mx-3 border"
        onClick={handleClick}
        key={id}
      >
        <div className="song-tile-cover" onClick={handleMenuHide}>
          <div className="song-tile-menu" onClick={handleMenuClick}>
            <MenuIcon />
            {menu ? (
              <div className="song-tile-menu-list">
                <p onClick={handleAddToFavClick}>Add to Favourite</p>
                <p onClick={handleAddToPlaylist}>Add to Playlist</p>
              </div>
            ) : null}
          </div>
          <p>song cover img</p>
        </div>
        <div className="song-tile-title">{title}</div>
      </div>
    </>
  );
};
