import { useContext } from "react"
import { AppContext } from "../context/AppContext"

const BotChat = () => {
  const { botText, loading } = useContext(AppContext)
  return (
    <div
      className={`absolute bottom-0 left-0 w-fit max-w-[60%] h-auto break-words pb-4 bg-gray-800 p-3 rounded-md mb-4 ${
        loading ? "animate-pulse" : ""
      }`}
    >
      {loading ? "loading ....." : botText}
    </div>
  )
}

export default BotChat
