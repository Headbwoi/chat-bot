import Chats from "../Chat/Chats"
import InputForm from "./InputForm"

const Layout = () => {
  return (
    <section className="w-full layout md:max-w-xl lg:max-w-3xl mx-auto bg-gray-700 relative">
      <div className="p-3 relative min-h-[32.25rem] lg:h-full overflow-hidden">
        <Chats />
      </div>
      <InputForm />
    </section>
  )
}

export default Layout
