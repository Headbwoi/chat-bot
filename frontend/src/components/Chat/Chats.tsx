import BotChat from "./BotChat"
import UserChat from "./UserChat"

const Chats = () => {
  return (
    <div className="absolute bottom-0  text-white w-full -mb-1 lg:mb-5 h-full">
      <UserChat />
      <BotChat />
    </div>
  )
}

export default Chats
