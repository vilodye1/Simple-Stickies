import { useState } from 'react'
import { useFetch } from '../hooks/useFetch'
import './NewNoteForm.css'


export default function NewNoteForm({ addNote }) {
  const [newNote, setNewNote] = useState('')

  const resetForm = () => {
    setNewNote('')
  }

    const handleSubmit = (e) => {
        e.preventDefault()
        const note = {
          newNote: newNote,
          id: Math.floor(Math.random()*10000)
        }

        if(newNote === '') {
           alert('Please enter a value')
        } else {
            addNote(note)
            resetForm()
        }
    }

  return (

    <form className="new-note-form" onSubmit = {handleSubmit}>
        <textarea 
          maxLength="150" 
          onChange ={(e) => setNewNote(e.target.value)}
          value={newNote}>
          Type new note here...
        </textarea>
        <button className="submit-btn">Submit</button>
    </form>
  )
}
