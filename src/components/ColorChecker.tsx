import { useState } from "react"

enum ColorContrast {
  BACKGROUND,
  TEXT
}

const ColorCheckerCard = () => {

  const [backgroundColor, setBackgroundColor] = useState("#000000")
  const [textColor, setTextColor] = useState("#ffffff")

  function handleChange(value: string, colorContrast: ColorContrast) {
    if (colorContrast === ColorContrast.BACKGROUND) {
      setBackgroundColor(value)
    }

    if (colorContrast === ColorContrast.TEXT) {
      setTextColor(value)
    }
  }

  return (
    <div className="grid grid-cols-2 gap-4 p-4 border border-gray-200 rounded-lg mt-5">
      <div className="flex gap-4">
        <div>
          <p className="text-sm">
            Background Color
          </p>

          <div className="relative flex items-center">
            <input 
              type="text" 
              className="border border-gray-200 rounded-lg h-10 pl-2" 
              value={backgroundColor} 
              onChange={(e) => handleChange(e.target.value, ColorContrast.BACKGROUND)}
            />
            <input 
              type="color"
              value={backgroundColor}
              className="absolute right-2 w-7 border-none rounded-sm"  
              onChange={(e) => handleChange(e.target.value, ColorContrast.BACKGROUND)}
            />
          </div>

        </div>
        
        <div>
          <p className="text-sm">
            Text Color
          </p>
          <div className="relative flex items-center">
            <input 
              type="text" 
              className="border border-gray-200 rounded-lg h-10 pl-2" 
              value={textColor} 
              onChange={(e) => handleChange(e.target.value, ColorContrast.TEXT)}
            />
            <input
              value={textColor}
              type="color" className="absolute right-2 w-7 border-none rounded-sm" 
              onChange={(e) => handleChange(e.target.value, ColorContrast.BACKGROUND)}
            />
          </div>
        </div>

      </div>

      <div>

      </div>
    </div>
  )
}

export default ColorCheckerCard