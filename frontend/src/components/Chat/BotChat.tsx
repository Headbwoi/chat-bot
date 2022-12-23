import { useContext } from "react"
import { AppContext } from "../context/AppContext"

const BotChat = () => {
  const { botText, loading } = useContext(AppContext)
  return (
    <div className=" absolute bottom-0 w-fit pb-4">
      {loading === true ? "loading" : botText}
    </div>
  )
}

export default BotChat
