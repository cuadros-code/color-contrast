import AlertIcon from "../icons/AlertIcon"


interface NotificationExampleProps {
  backgroundColor: string
  textColor: string
}

const NotificationExample = ({ backgroundColor, textColor }: NotificationExampleProps) => {
  return (
    <div className="p-3 rounded-lg border border-gray-300" style={{ backgroundColor }}>
      <div className="flex items-center gap-2">
        <AlertIcon color={textColor} />
        <p className="text-sm" style={{ color: textColor }}>
          This is a notification
        </p>
      </div>
      <div>
        <p className="text-sm" style={{ color: textColor }}>
          This is a warning message, make sure it is visible and legible.
        </p>
      </div>
    </div>
  )
}

export default NotificationExample