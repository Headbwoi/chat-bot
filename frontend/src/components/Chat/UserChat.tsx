import { useContext } from "react"
import { AppContext } from "../context/AppContext"

const UserChat = () => {
  const { userText } = useContext(AppContext)
  return (
    <div
      className={`right-0 absolute bottom-0 w-fit ${
        userText === "" ? "" : "bg-gray-800"
      } p-4 mb-20 rounded-md`}
    >
      {userText}
    </div>
  )
}

export default UserChat
