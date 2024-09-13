import { useCallback, useState } from "react"
import { calculateContrast } from "../utils/colorContrast"
import ContrastScore from "./ContrastScore"
import NotificationExample from "./NotificationExample"
import Formxample from "./FormExample"

enum ColorContrast {
  BACKGROUND,
  TEXT
}

const ColorCheckerCard = () => {

  const [backgroundColor, setBackgroundColor] = useState("#FFFFFF")
  const [textColor, setTextColor] = useState("#000000")

  const contrast = useCallback((color1: string, color2: string) => {
    return calculateContrast(color1, color2)
  }, [])

  function handleChange(value: string, colorContrast: ColorContrast) {
    if (colorContrast === ColorContrast.BACKGROUND) {
      setBackgroundColor(value)
    }

    if (colorContrast === ColorContrast.TEXT) {
      setTextColor(value)
    }
  }
  

  return (
    <div>
      <div className="grid md:grid-cols-2 border border-gray-200 rounded-lg mt-12">

        <div className="flex flex-col gap-1 p-10">
          <div className="flex gap-8">
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
                  onChange={(e) => handleChange(e.target.value, ColorContrast.TEXT)}
                  />
              </div>
            </div>
          </div>

          <p className="text-sm mt-7">
            Contrast
          </p>
          <ContrastScore ratio={contrast(backgroundColor, textColor)} />

        </div>

        <div 
          className="p-10 flex flex-col rounded-r-lg items-center justify-center" 
          style={{ backgroundColor: backgroundColor }}
        >
          <h1 
            className="text-3xl font-bold text-center"
            style={{ color: textColor, }}
          >
            Contrast title
          </h1>
          <p className="text-center text-lg mt-5" style={{ color: textColor }}>
            This is a simple website that <br /> demonstrates the contrast color of the text.
          </p>

          <div className="mt-5 flex justify-center">
            <button
              style={{ backgroundColor: textColor, color: backgroundColor }}
              className="font-bold py-2 px-4 rounded">
              Click me
            </button>
          </div>

        </div>
      </div>

      <div className="mt-10 grid md:grid-cols-2 grid-cols-1 gap-5">
        <div className="border border-gray-200 rounded-lg p-5 max-h-[150px]">
          <p className="text-sm mb-2 font-bold">
            Notification Example
          </p>
          <NotificationExample backgroundColor={backgroundColor} textColor={textColor} />
        </div>

        <div className="border border-gray-200 rounded-lg p-5">
          <p className="text-sm mb-2 font-bold">
            Form Example
          </p>
          <Formxample backgroundColor={backgroundColor} textColor={textColor} />
        </div>
      </div>

    </div>

  )
}

export default ColorCheckerCard