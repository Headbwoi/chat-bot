import { useContext } from "react"
import { AppContext } from "../context/AppContext"

const UserChat = () => {
  const { userText } = useContext(AppContext)
  return <div className="right-10 absolute bottom-0 w-fit pb-8">{userText}</div>
}

export default UserChat
