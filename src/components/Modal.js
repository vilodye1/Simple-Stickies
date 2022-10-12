
import './Modal.css'


export default function modal({children, color}) {

  return (
    <div className="overlay">
        <div className="modal" style= {{ background: color}}>
            {children}
        </div> 
    </div>
  )
}
