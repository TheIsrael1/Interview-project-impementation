import React, { useState, useContext} from 'react';


const notesViewContext = React.createContext();
const notesViewUpdateContext = React.createContext();

export function useView(){
    return useContext(notesViewContext)
}

export function useViewUpdate(){
    return useContext(notesViewUpdateContext)
}

export function NotesViewProvider({children}){
    const [newview, setnewView] = useState(true)

    const updateView = () =>{
        setnewView(!newview)
    }

    return(
        <notesViewContext.Provider value={newview}>
            <notesViewUpdateContext.Provider value={updateView}>
                {children}
            </notesViewUpdateContext.Provider>
        </notesViewContext.Provider>
    )

}