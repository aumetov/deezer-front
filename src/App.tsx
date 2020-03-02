import React from 'react';
import './App.css';
import SearchInput from './components/search-input/searchInput';
import TrackList from './components/track-list/trackList';

export const App: React.FC<{}> = () => {
  return (
      <div className="App">
        <div className="header">
          <SearchInput/>
        </div>
        <TrackList/>
      </div>
  );
}