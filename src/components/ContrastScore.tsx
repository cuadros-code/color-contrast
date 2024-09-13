import { useMemo, useState } from 'react';

interface ContrastScoreProps {
  ratio: number
}

const ContrastScore = ( { ratio }: ContrastScoreProps ) => {

  const [accessiblityColor, setAccessibilityColor] = useState("#D2FBD0")

  const accessibilityLevel = useMemo(() => {
    if (ratio < 1.4) {
      setAccessibilityColor("#F2D2D0")
      return "Fail"
    } else if (ratio < 4.5) {
      setAccessibilityColor("#FBF5D0")
      return "AA"
    } else {
      setAccessibilityColor("#D2FBD0")
      return "AAA"
    }
  }, [ratio])

  return (
    <div className="flex flex-col gap-1 p-5 rounded-lg" style={{ backgroundColor: accessiblityColor }}>
      <div>
        <p className="text-3xl font-bold">
          {ratio.toFixed(2)}
        </p>
        <div className="text-lg flex items-center gap-2">
          Accessibility Level:
          <p
            style={{color: accessibilityLevel}}
            className="text-lg font-bold"
          >
            {accessibilityLevel}
          </p> 
        </div>
      </div>
    </div>
  )
}

export default ContrastScore