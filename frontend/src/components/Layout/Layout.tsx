import Chats from "../Chat/Chats"
import InputForm from "./InputForm"

const Layout = () => {
  return (
    <section className="w-full layout md:max-w-xl lg:max-w-3xl mx-auto px-3 md:px-0 relative">
      <div className="relative h-full overflow-hidden">
        <Chats />
      </div>
      <InputForm />
    </section>
  )
}

export default Layout
