import React, { FC, useState, ChangeEvent } from "react";

interface Props {
  onClosePlaylist: (e: React.MouseEvent<Element, MouseEvent>) => void;
}

export const CreateNewPlaylist: FC<Props> = ({ onClosePlaylist }) => {
  const [playlistName, setPlaylistName] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPlaylistName(e.target.value);
  };

  const handleCreatePlaylistButton = (
    e: React.MouseEvent<Element, MouseEvent>
  ) => {
    setPlaylistName("");
    onClosePlaylist(e);
    console.log(`playlist created name = ${playlistName}`);
  };

  return (
    <>
      <div className="create-new-playlist-container border">
        <label htmlFor="playlist-name">Enter Playlist name</label>
        <input
          value={playlistName}
          onChange={handleChange}
          placeholder="playlist name"
        />
        <button onClick={handleCreatePlaylistButton}>create</button>
      </div>
    </>
  );
};
