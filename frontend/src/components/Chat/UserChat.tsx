import { useContext } from "react"
import { AppContext } from "../context/AppContext"

const UserChat = () => {
  const { userText } = useContext(AppContext)
  return (
    <div
      className={`right-0 absolute bottom-0 w-fit ${
        userText === "" ? "" : "bg-gray-800"
      } p-4 mb-48 md:mb-28 max-w-[60%] break-words h-auto rounded-md`}
    >
      {userText}
    </div>
  )
}

export default UserChat
