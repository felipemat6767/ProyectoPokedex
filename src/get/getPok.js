import { useContext } from 'react';
import { Context } from '../store/appContext';


export const GetPokbyId = (name) => {
    const {store} = useContext(Context)
    return store.event.find(pokemon => pokemon.name === name)
}

