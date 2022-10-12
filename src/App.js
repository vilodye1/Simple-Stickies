
import { useState } from 'react';
import './App.css';
import ColorSelector from './components/ColorSelector';
import Modal from './components/Modal';
import NewNoteForm from './components/NewNoteForm';
import NoteStack from './components/NoteStack';
import TopBar from './components/TopBar';
import { useTheme } from './hooks/useTheme';
import { useFetch } from './hooks/useFetch';

function App() {

  const [notes, setNotes] = useState([])
  const [showModal, setShowModal] = useState(false)
  const { color } = useTheme()

  const addNote = (note) => {
    setNotes(prevNotes => {
      return [...prevNotes, note]
    })
    setShowModal(false)
  }

  const handleClick = (id) => {
    setNotes(prevNotes => {
      return prevNotes.filter(note => {
        return id !== note.id
      })
    })
  }



  return (

    <div className="App">
        <TopBar />
        
        <button 
          className='create-new-btn' 
          onClick = {() => setShowModal(true)} >
            Create New
          </button>
       
        <div>

          <NoteStack notes={notes} handleClick = {handleClick} />
          {showModal && <Modal color={color}>
            <button 
              className="cancel-btn" 
              onClick = {() => setShowModal(false)} 
              style= {{ background: color}}>
                X
            </button>
            <NewNoteForm addNote={addNote} />
          </Modal>}
        </div>
    </div>
  );

}

export default App;
