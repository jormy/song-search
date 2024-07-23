import axios from 'axios';

const fetchLyrics = async (title, artist) => {
  try {
    const response = await axios.get(`https://api.lyrics.ovh/v1/${artist}/${title}`);
    return {
      lyrics: response.data.lyrics,
      title: title,
      artist: artist,
      albumArt: '', // Album art will be passed from SongSuggest
    };
  } catch (error) {
    console.error('Error fetching lyrics:', error);
    return {
      lyrics: 'Lyrics not found',
      title: title,
      artist: artist,
      albumArt: '',
    };
  }
};

export default fetchLyrics;
