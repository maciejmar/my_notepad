import React  from"react";
import './notes.css';
import Note from './../Note/note'
class Notes extends React.Component {
    constructor(props) {
        super(props);
        this.notes = [
            {
                id: 2323,
                title: 'pierwszy priorytet',
                body: 'najważniejszy'
            },
            {
                id:2324,
                title: 'drugi priorytet',
                body: 'mniej trochę ważny'
            }   

        ];
    }
    render(){

       



        return(
            <div>
               <p> Oto moje notatki:</p>
                {this.notes.map(note => {
                    return( 
                     <Note  title = {note.title}
                     body = {note.body}
                     id = {note.id}
                     />
                  
                    )} )}
            
            </div>
        );
    }
}

export default Notes;