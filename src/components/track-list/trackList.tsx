import React from 'react';
import './trackList.css';
import {Track} from '../track/track';
import {TrackModel} from '../../types/track';
import { connect, ConnectedProps } from "react-redux";

interface RootState{
    loading: boolean;
    result: TrackModel[];
}

interface RootDispatch{
}

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & RootDispatch;

const TrackList:React.FC<Props> = ({loading, result}:Props) => {
    if (loading) {
        return <p className='loading-message'>Загрузка...</p>
    }

    if (!loading && result && result.length === 0) {
        return <p className='no-result-message'>Ничего не найдено :(</p>
    }

    const durationSum = result ? result.reduce((amount: number, track: TrackModel) => amount + track.duration, 0) : 0;
    const minutes = durationSum/60;
    const seconds = durationSum%60;

    return (
        <div className='track-list'>
            {result &&
            <>
                <div className='tracks-container'>
                    {result.map((track: TrackModel) =>
                        <Track track={track}/>
                    )}
                </div>
                <div className='tracks-footer'>
                    Общая длительность<span style={{color: '#c7c7c7'}}>:</span> {minutes.toFixed()}:{seconds < 10 ? '0' + seconds : seconds}
                </div>
            </>
            }
        </div>
        
    )
}

const mapStateToProps:({loading, result}:RootState) => RootState = ({loading, result}:RootState) => ({
    loading,
    result
});

const mapDispatchToProps = () => ({
});

const connector = connect(
    mapStateToProps,
    mapDispatchToProps
);

export default connector(TrackList);
