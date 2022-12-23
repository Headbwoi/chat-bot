import { useContext } from "react"
import { AppContext } from "../context/AppContext"

const BotChat = () => {
  const { botText } = useContext(AppContext)
  return <div className=" absolute bottom-0 w-fit">{botText}</div>
}

export default BotChat
