import { useTheme } from '../hooks/useTheme'
// styles
import './ColorSelector.css'

const themeColors = ['#ffb0b0','#ffd9b0','khaki', '#b0ffb9','#b0e3ff','#edb0ff', '#ffb0df']

export default function ColorSelector() {
    const { changeColor } = useTheme()

  return (
    <div className="theme-selector">
        <div className="theme-buttons">
            {themeColors.map(color => (
                <div 
                    key={color}
                    onClick = {() => changeColor(color)}
                    style={{ background: color}}
                
                />
            ))}
        </div>
    </div>
  )
}
