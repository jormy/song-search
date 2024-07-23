import Axios from 'axios'; 
import { useState } from 'react'; 

function App() {
  const [song, setSong] = useState(""); 
  const [lyrics, setLyrics] = useState(""); 
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [albumArt, setAlbumArt] = useState("");

  function searchLyrics() { 
    if (song === "") {
      setLyrics("Please enter a song name");
    }

      Axios.get(`https://lyrics-finder-api.vercel.app/lyrics?song=${song}`).then(res => { 
          setLyrics(res.data.lyrics); 
          setTitle(res.data.title);
          setArtist(res.data.artist);
          setAlbumArt(res.data.albumArt);
      }) 
      console.log(setLyrics)
  } 

  return ( 
      <div className="flex justify-center"> 
        <div>
          <div className="mt-96">
            <h1 className="font-bold text-3xl">Lyrics Finder :3</h1>

            <input className="border-2 border-gray-300 rounded-md" type="text" 
                placeholder="Enter the song name"
                onChange={(e) => { setSong(e.target.value) }} /> 
            <button 
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
              onClick={() => searchLyrics()}
            > 
              Search
            </button> 
          </div>

          <div>
            <div className='flex'>
              <img className="h-24 w-24 rounded-lg" src={albumArt} alt="Album art"/>
              <div>
                <h2 className='font-bold'>{title}</h2>
                <h3>{artist}</h3>
              </div>
            </div>
            <pre>{lyrics}</pre> 
          </div>
        </div>
      </div> 
  )
}

export default App
