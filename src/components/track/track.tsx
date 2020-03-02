import React from 'react';
import './track.css';
import { Contributor } from '../../types/track';
import { ContributorRoles } from '../../consts/contributorRoles';

export const Track = (props) => {
    const minutes = props.track.duration/60;
    const seconds = props.track.duration%60;
    const contributors: string[] = props.track.contributors.filter((singer: Contributor) => singer.role === ContributorRoles.FEATURED).map((singer: Contributor) => singer.name);
    const artists: string[] = props.track.contributors.map((singer: Contributor) => singer.name);
    return (
        <div className='track'>
            <div className='track-album-cover'>
                <img alt="cover" src={props.track.album.cover}/>
            </div>
            <div className='track-info'>
                <div className='track-titles'>
                    <p className='track-title'>{props.track.title} <span className='feat-info'>{contributors.length ? 'feat.' : null} {contributors.join(', ')}</span></p>
                    <p className='track-contributors'>
                        <span className='contributors-title'>Исполнители:</span> {artists.join(', ')}
                    </p>
                </div>
                <div className='track-duration'><p>{minutes.toFixed()}:{seconds < 10 ? '0'+seconds : seconds}</p></div>
            </div>
        </div>
        
    )
}