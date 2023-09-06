import React from 'react';
import Video from './Video';
import Navbar from './Navbar';
import Show from './Show';
import './SearchResults.css'
import { Link, useParams } from "react-router-dom";

const SearchResults = ({ videoList, video }) => {

  return (
    <div className='searchResults'>
      {videoList.map((video) => (
        <Link key={video.id.videoId} to={`/show/${video.id.videoId}`}>
          <div className='videoCard'>
            <img src={video.snippet.thumbnails.default.url} alt={video.snippet.title} />
            <p>{video.snippet.title}</p>
          </div>
        </Link>

      ))}
    </div>
  );
}

export default SearchResults;
