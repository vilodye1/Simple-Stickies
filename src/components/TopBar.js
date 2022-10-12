import ColorSelector from './ColorSelector'
import './TopBar.css'

export default function TopBar() {
  return (
    <div className="topbar">
        <h2 className="title">Simple Stickies</h2>
        <ColorSelector />
    </div>
  )
}
