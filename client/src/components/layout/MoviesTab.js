import React, { useState } from 'react'
import '../../App.scss';
import Search from '../layout/Search';
import Results from '../layout/Results';
import Popup from '../layout/Popup';

const APIURL = 'http://www.omdbapi.com/?apikey=7805adc9';

export const MoviesTab = () => {
    const [state, setState] = useState({
        // s stand for search
        s: '',
        results: [],
        selected: {},
    });

    const search = (e) => {
        if (e.key === 'Eneter') {
            fetch(APIURL + state.s)
                .then((res) => res.json())
                .then((data) => {
                    setState((prevState) => {
                        return { ...setState, results: data.Search };
                    });
                });
        }
    };

    const handleInput = (e) => {
        let s = e.target.vale;
        setState((prevState) => {
            return { ...prevState, s: s};
        });
    };

    const openePopup = (id) => {
        fetch(APIURL + '&i=' + id)
            .then((res) => res.json())
            .then((data) => {
                setState((prevState) => {
                    return { ...prevState, selected: {} };
                });
            });
    };

    const closePopup = () => {
        setState((prevState) => {
            return { ...prevState, selected: {} };
        });
    };

    return (
        <div>
            <header>

                <h1>
                    <img src = 'https://fontmeme.com/permalink/210423/54ae7669563b07c8272f0d1579872696.png' alt='movies'></img>
                </h1>
            </header>
            <Search handleInput = {handleInput} search = {search} />
            <Results results={state.results} openePopup={openePopup} />
            {typeof state.selected.Title != 'undefined' ? (
                <Popup selected={state.selected} closePopup={closePopup} />
            ) : (false)}
        </div>
    );
}

export default MoviesTab;

