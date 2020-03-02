import * as React from 'react';
import './searchInput.css';
import { connect, ConnectedProps } from "react-redux";
import { getSongsRequest } from '../../actions';

interface RootState{
    loading: boolean;
    result: [];
}

interface RootDispatch{
    getSongs: (query: string) => void;
}

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & RootDispatch;

const SearchInput:React.FC<Props> = ({loading, result, getSongs}:Props) => {
    const input = React.createRef<HTMLInputElement>();

    const searchSubmit = (e: React.KeyboardEvent<HTMLInputElement>):void => {
        if(e.key === 'Enter' && input.current && input.current.value) {
            getSongs(input.current.value);
            input.current.value = '';
            return;
        }
    }

    return (
        <div className={`search-field ${loading ? 'state-loading' : 'state-still'}`}>
            <input
                ref={input}
                placeholder='Введите исполнителя'
                className='search-input'
                onKeyDown={searchSubmit}
            />
        </div>
        
    )
}

const mapStateToProps: ({loading,result}:RootState) => RootState = ({loading,result}:RootState) => ({
    loading,
    result
});

const mapDispatchToProps:RootDispatch = ({
    getSongs: getSongsRequest,
});

const connector = connect(
    mapStateToProps,
    mapDispatchToProps
);

export default connector(SearchInput);