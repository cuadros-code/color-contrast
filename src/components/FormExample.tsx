interface FormxampleProps {
  backgroundColor: string
  textColor: string
}

const Formxample = ({ backgroundColor, textColor }: FormxampleProps) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm" style={{ color: textColor }}>
        Name
      </p>
      <input placeholder="John Doe" type="text" className="border border-gray-300 rounded-lg p-2" style={{ color: textColor }} />
      <p className="text-sm mt-2" style={{ color: textColor }}>
        Email
      </p>
      <input placeholder="john@doe.com" type="email" className="border border-gray-300 rounded-lg p-2" style={{ color: textColor }} />
      
      <button className="font-bold py-2 px-4 rounded" style={{ backgroundColor: textColor, color: backgroundColor }}>
        Submit
      </button>
    </div>
  )
}

export default Formxample