import { SidebarContext } from "@/context/SidebarContext";
import { PointerContext } from "@/context/SpringContext";
import { useContext } from "react";

function Sidebar(props: {
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
    <aside
      className={`flex lg:hidden fixed z-[101] h-screen overflow-hidden left-0 transition-all  font-serif duration-500 ${
        showSidebar ? "w-full" : "w-0"
      } `}
    >
      <div className="w-60 md:w-80 background-gradient ">
        <div className="flex items-end drop-shadow-[0px_0px_8px_rgba(48,171,176)] p-2 md:p-6">
          <span className="text-2xl lg:text-4xl">{"<>"}</span>
          <div className="flex flex-col">
            <span className="uppercase tracking-widest lg:tracking-[0.3em] lg:text-xl">
              Anderson
            </span>
            <span className="uppercase text-2xl lg:text-4xl text-emerald-300">
              Falconi
            </span>
          </div>
          <span className="text-2xl lg:text-4xl">{"</>"}</span>
        </div>
        <nav>
          <ul className="flex flex-col pt-8 gap-6 text-2xl text-white hover:text-zinc-400 transition-colors  hover:transition-colors ">
            <li>
              <button
                onMouseEnter={() => setPointer("scale-[5]")}
                onMouseLeave={() => setPointer("")}
                className="hover:text-white hover:transition-all bg-gradient-to-r from-emerald-300 to-transparent bg-left-bottom bg-[length:0%] bg-no-repeat
               transition-all duration-700 hover:bg-[length:100%] py-2 w-full text-start pl-4"
                onClick={() => {
                  setShowSidebar(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Inicio
              </button>
            </li>
            <li>
              <button
                onMouseEnter={() => setPointer("scale-[5]")}
                onMouseLeave={() => setPointer("")}
                className="hover:text-white hover:transition-all bg-gradient-to-r from-emerald-300 to-transparent bg-left-bottom bg-[length:0%] bg-no-repeat
               transition-all duration-700 hover:bg-[length:100%] py-2 w-full text-start pl-4"
                onClick={() => {
                  setShowSidebar(false);
                  knowledge &&
                    window.scrollTo({
                      top: knowledge - 150,
                      behavior: "smooth",
                    });
                }}
              >
                Conhecimento
              </button>
            </li>
            <li>
              <button
                onMouseEnter={() => setPointer("scale-[5]")}
                onMouseLeave={() => setPointer("")}
                className="hover:text-white hover:transition-all bg-gradient-to-r from-emerald-300 to-transparent bg-left-bottom bg-[length:0%] bg-no-repeat
               transition-all duration-700 hover:bg-[length:100%] py-2 w-full text-start pl-4"
                onClick={() => {
                  setShowSidebar(false);
                  projects &&
                    window.scrollTo({
                      top: projects - 150,
                      behavior: "smooth",
                    });
                }}
              >
                Trabalhos
              </button>
            </li>
            <li>
              <button
                onMouseEnter={() => setPointer("scale-[5]")}
                onMouseLeave={() => setPointer("")}
                className="hover:text-white hover:transition-all bg-gradient-to-r from-emerald-300 to-transparent bg-left-bottom bg-[length:0%] bg-no-repeat
               transition-all duration-700 hover:bg-[length:100%] py-2 w-full text-start pl-4"
                onClick={() => {
                  setShowSidebar(false);
                  youtube &&
                    window.scrollTo({ top: youtube - 150, behavior: "smooth" });
                }}
              >
                Youtube
              </button>
            </li>
            <li>
              <button
                onMouseEnter={() => setPointer("scale-[5]")}
                onMouseLeave={() => setPointer("")}
                className="hover:text-white hover:transition-all bg-gradient-to-r from-emerald-300 to-transparent bg-left-bottom bg-[length:0%] bg-no-repeat
               transition-all duration-700 hover:bg-[length:100%] py-2 w-full text-start pl-4 "
                onClick={() => {
                  setShowSidebar(false);
                  contact &&
                    window.scrollTo({ top: contact - 100, behavior: "smooth" });
                }}
              >
                Contato
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <button
        className="w-full h-screen bg-transparent"
        onClick={() => setShowSidebar(false)}
      />
    </aside>
  );
}

export default Sidebar;
