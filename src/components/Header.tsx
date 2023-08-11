import { SidebarContext } from "@/context/SidebarContext";
import { PointerContext } from "@/context/SpringContext";
import { useContext } from "react";
import { FaBars } from "react-icons/fa";

function Header(props: {
  navigation: {
    knowledge: number | undefined;
    projects: number | undefined;
    youtube: number | undefined;
    contact: number | undefined;
  };
}) {
  const { knowledge, projects, youtube, contact } = props.navigation;
  const { setPointer } = useContext(PointerContext);
  const { showSidebar, setShowSidebar } = useContext(SidebarContext);

  return (
    <header className="background-gradient w-full flex items-center justify-between text-zinc-300 font-serif fixed p-2 md:p-6 xl:p-8">
      <div className="flex items-end drop-shadow-[0px_0px_8px_rgba(48,171,176)] ">
        <span className="text-2xl xl:text-4xl">{"<>"}</span>
        <div className="flex flex-col">
          <span className="uppercase tracking-widest xl:tracking-[0.3em] xl:text-xl">
            Anderson
          </span>
          <span className="uppercase text-2xl xl:text-4xl text-emerald-300">
            Falconi
          </span>
        </div>
        <span className="text-2xl xl:text-4xl">{"</>"}</span>
      </div>
      <div className="hidden lg:flex w-full justify-center absolute ">
        <nav>
          <ul className="flex gap-6 2xl:text-2xl text-white hover:text-zinc-400 transition-colors  hover:transition-colors ">
            <li>
              <button
                onMouseEnter={() => setPointer("scale-[5]")}
                onMouseLeave={() => setPointer("")}
                className="hover:text-white hover:transition-all bg-gradient-to-r from-emerald-300 to-transparent bg-left-bottom bg-[length:0%] bg-no-repeat
               transition-all duration-700 hover:bg-[length:100%]  border-b border-l border-zinc-600 py-2 rounded-lg 2xl:w-44 w-28"
                onClick={() =>
                  knowledge && window.scrollTo({ top: 0, behavior: "smooth" })
                }
              >
                Inicio
              </button>
            </li>
            <li>
              <button
                onMouseEnter={() => setPointer("scale-[5]")}
                onMouseLeave={() => setPointer("")}
                className="hover:text-white hover:transition-all bg-gradient-to-r from-emerald-300 to-transparent bg-left-bottom bg-[length:0%] bg-no-repeat
               transition-all duration-700 hover:bg-[length:100%]  border-b border-l border-zinc-600 py-2 rounded-lg  2xl:w-44 w-28"
                onClick={() =>
                  knowledge &&
                  window.scrollTo({ top: knowledge - 150, behavior: "smooth" })
                }
              >
                Conhecimento
              </button>
            </li>
            <li>
              <button
                onMouseEnter={() => setPointer("scale-[5]")}
                onMouseLeave={() => setPointer("")}
                className="hover:text-white hover:transition-all bg-gradient-to-r from-emerald-300 to-transparent bg-left-bottom bg-[length:0%] bg-no-repeat
               transition-all duration-700 hover:bg-[length:100%]  border-b border-l border-zinc-600 py-2 rounded-lg  2xl:w-44 w-28"
                onClick={() =>
                  projects &&
                  window.scrollTo({ top: projects - 150, behavior: "smooth" })
                }
              >
                Trabalhos
              </button>
            </li>
            <li>
              <button
                onMouseEnter={() => setPointer("scale-[5]")}
                onMouseLeave={() => setPointer("")}
                className="hover:text-white hover:transition-all bg-gradient-to-r from-emerald-300 to-transparent bg-left-bottom bg-[length:0%] bg-no-repeat
               transition-all duration-700 hover:bg-[length:100%]  border-b border-l border-zinc-600 py-2 rounded-lg 2xl:w-44 w-28"
                onClick={() =>
                  youtube &&
                  window.scrollTo({ top: youtube - 150, behavior: "smooth" })
                }
              >
                Youtube
              </button>
            </li>
            <li>
              <button
                onMouseEnter={() => setPointer("scale-[5]")}
                onMouseLeave={() => setPointer("")}
                className="hover:text-white hover:transition-all bg-gradient-to-r from-emerald-300 to-transparent bg-left-bottom bg-[length:0%] bg-no-repeat
               transition-all duration-700 hover:bg-[length:100%]  border-b border-l border-zinc-600 py-2 rounded-lg 2xl:w-44 w-28"
                onClick={() =>
                  contact &&
                  window.scrollTo({ top: contact - 100, behavior: "smooth" })
                }
              >
                Contato
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <button
        onClick={()=>setShowSidebar(!showSidebar)}
        className="text-xl hover:text-white hover:transition-all bg-gradient-to-r from-emerald-300 to-transparent bg-left-bottom bg-[length:0%] bg-no-repeat
               transition-all duration-700 hover:bg-[length:100%]  border-b border-l border-zinc-600 px-3 py-2 rounded-lg lg:hidden"
      >
        <FaBars />
      </button>
    </header>
  );
}

export default Header;
