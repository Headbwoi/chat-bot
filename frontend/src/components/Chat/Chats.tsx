import BotChat from "./BotChat"
import UserChat from "./UserChat"

const Chats = () => {
  return (
    <div className="absolute bottom-0  text-white w-full -mb-1 lg:mb-24 h-full p-3 md:p-0 bg-black/70">
      <UserChat />
      <BotChat />
    </div>
  )
}

export default Chats
