import axios from "axios";

const fetchLyrics = async (title, artist) => {
  try {
    const response = await axios.get(
      `https://api.lyrics.ovh/v1/${artist}/${title}`,
    );
    let lyrics = response.data.lyrics;

    // api occasionally returns "Paroles de la chanson" before the lyrics. might migrate to genius api eventually to remove this issue
    if (lyrics.startsWith("Paroles de la chanson")) {
      const lines = lyrics.split("\n");
      lines.shift(); // Remove the first line
      lyrics = lines.join("\n"); // Join the lines back together
    }

    // fix inconsistent line breaks in lyrics
    // another api issue lmfao
    lyrics = lyrics.replace(/\n{1,2}/g, "\n");

    return {
      lyrics: lyrics,
      title: title,
      artist: artist,
      albumArt: "", // album art passed from SongSuggest
      albumName: "", // album name passed from SongSuggest
    };
  } catch (error) {
    console.error("Error fetching lyrics:", error);
    return {
      lyrics: "Lyrics not found",
      title: title,
      artist: artist,
      albumArt: "",
      albumName: "",
    };
  }
};

export default fetchLyrics;
