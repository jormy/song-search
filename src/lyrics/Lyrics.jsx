function Lyrics({ lyricsData }) {
    return (
      <div>
        <div className='flex'>
          <img className="h-24 w-24 rounded-lg" src={lyricsData.albumArt} alt="Album art" />
          <div>
            <h2 className='font-bold'>{lyricsData.title}</h2>
            <h3>{lyricsData.artist}</h3>
          </div>
        </div>
        <pre>{lyricsData.lyrics}</pre>
      </div>
    );
  }
  
  export default Lyrics;
  