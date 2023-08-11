import LogoWhatsapp from "./LogoWhatsapp";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { useContext } from "react";
import { PointerContext } from "@/context/SpringContext";

function Contact() {
  const { setPointer } = useContext(PointerContext);
  return (
    <div className=" flex flex-col items-center gap-20 font-semibold w-full">
      <span className="w-full lg:w-1/2 text-sm 2xl:text-3xl  text-justify text-[#ffffffb6]">
        Tem um projeto e precisa de ajuda? Me manda uma mensagem nas
        redes sociais ou entre em contato comigo através do Whatsapp!
      </span>
      <a
        onMouseEnter={() => setPointer("scale-[5] animate-pulse")}
        onMouseLeave={() => setPointer("")}
        href="https://api.whatsapp.com/send?phone=5511985513451&text=Olá%2C%20gostaria%20de%20entrar%20em%20contato."
        target="_blank"
        className="flex justify-center items-center w-2/3 lg:w-1/6 gap-2 py-3 hover:scale-105 ease-in-out duration-300 text-lg rounded-md bg-gradient-to-r from-emerald-500 to-teal-700 hover:drop-shadow-[0px_0px_8px_rgba(48,171,176)]"
      >
        <div className="animate-bounce">
          <LogoWhatsapp />
        </div>
        Whatsapp
      </a>
      <div className="flex gap-4 lg:gap-20">
        <a
          onMouseEnter={() => setPointer("scale-[5] animate-pulse")}
          onMouseLeave={() => setPointer("")}
          href="https://www.instagram.com/anderson.falconi.3/"
          target="_blank"
          className="instagram flex items-center gap-2 px-6 py-3 hover:scale-105 ease-in-out duration-300 text-lg rounded-md bg-[#fcfcfc11] border border-white hover:drop-shadow-[0px_0px_2px_rgba(255,255,255)]"
        >
          <FaInstagram className="text-3xl" />
          <span className="hidden md:block">Instagran</span>
        </a>
        <a
          onMouseEnter={() => setPointer("scale-[5] animate-pulse")}
          onMouseLeave={() => setPointer("")}
          href="https://www.linkedin.com/in/anderson-falconi-melo/"
          target="_blank"
          className="flex items-center gap-2 px-6 py-3 hover:scale-105 ease-in-out duration-300 text-lg rounded-md bg-[#fcfcfc11] border border-white hover:drop-shadow-[0px_0px_2px_rgba(255,255,255)] hover:bg-[#0a66c2]"
        >
          <FaLinkedin className="text-3xl" />
          <span className="hidden md:block">LinkedIn</span>
        </a>
        <a
          onMouseEnter={() => setPointer("scale-[5] animate-pulse")}
          onMouseLeave={() => setPointer("")}
          href="https://github.com/Falconi03"
          target="_blank"
          className="flex items-center gap-2 px-6 py-3 hover:scale-105 ease-in-out duration-300 text-lg  rounded-md bg-[#fcfcfc11] border border-white hover:drop-shadow-[0px_0px_2px_rgba(255,255,255)] "
        >
          <FaGithub className="text-3xl" />
          <span className="hidden md:block">GitHub</span>
        </a>
      </div>
    </div>
  );
}

export default Contact;
