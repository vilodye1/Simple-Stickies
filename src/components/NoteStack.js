import React from 'react'
import { useTheme } from '../hooks/useTheme'
import { useFetch } from '../hooks/useFetch'
import './NoteStack.css'



export default function NoteStack({ notes, handleClick }) {
  const {error, isPending, data} = useFetch('http://localhost:3000/notes')
  const {color} = useTheme()
  
  return (
    <div className = "note-stack">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && notes.map((note) => (
            <div key={note.id} className = "sticky-note" style= {{ background: color}}>
                <button className="close" onClick={() =>{handleClick(note.id)}} style= {{ background: color}}>X</button>
                <p>{note.newNote}</p>
            </div>
        ))}
    </div>
  )
}
