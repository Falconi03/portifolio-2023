"use client";
import { useRef, useContext, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Youtube from "@/components/Youtube";
import { FaReact, FaCss3, FaHtml5, FaJs } from "react-icons/fa";
import Presentation from "@/components/Presentation";
import Spring from "@/components/Spring";
import { Carousel } from "@/components/Carousel";
import CardConhecimento from "@/components/CardConhecimento";
import LogoYoutube from "@/components/LogoYoutube";
import Contact from "@/components/Contact";
import LogoWhatsapp from "@/components/LogoWhatsapp";
import { PointerContext } from "@/context/SpringContext";
import Sidebar from "@/components/Sidebar";

let slides = [
  <img src="/br-0.png" alt="" key={0} />,
  <img src="/br-1.png" alt="" key={1} />,
  <img src="/br-2.png" alt="" key={2} />,
  <img src="/br-3.png" alt="" key={3} />,
  <img src="/br-4.png" alt="" key={4} />,
  <img src="/br-5.png" alt="" key={5} />,
  <img src="/br-6.png" alt="" key={6} />,
  <img src="/br-7.png" alt="" key={7} />,
  <img src="/br-8.png" alt="" key={8} />,
  <img src="/br-9.png" alt="" key={9} />,
  <img src="/br-10.png" alt="" key={10} />,
];

export default function Home() {
  const knowledge = useRef<HTMLDivElement>(null);
  const projects = useRef<HTMLDivElement>(null);
  const youtube = useRef<HTMLDivElement>(null);
  const contact = useRef<HTMLDivElement>(null);
  const { setPointer } = useContext(PointerContext);


  return (
    <main className="flex min-h-screen flex-col items-center justify-start pb-20 ">
      <div className="hidden lg:flex flex-col fixed z-0 pt-5 opacity-10 w-2/3 ">
        <img src="/plano-de-fundo-2.png" alt="" />
        <img src="/plano-de-fundo-2.png" alt="" />
      </div>
      <div className="w-full z-10 flex flex-col items-center gap-8 xl:gap-28">
        <Spring />
        <Header
          navigation={{
            knowledge: knowledge.current?.offsetTop,
            projects: projects.current?.offsetTop,
            youtube: youtube.current?.offsetTop,
            contact: contact.current?.offsetTop,
          }}
        />
        <Sidebar
          navigation={{
            knowledge: knowledge.current?.offsetTop,
            projects: projects.current?.offsetTop,
            youtube: youtube.current?.offsetTop,
            contact: contact.current?.offsetTop,
          }}
        />
        <div className="flex flex-col gap-12 lg:flex-row items-center justify-center pt-28 md:pt-40 p-6">
          <div>
            <div className="relative text-[#ffffff1f] ">
              <FaReact className="text-8xl absolute right-0 bottom-0 translate-x-6" />
              <FaCss3 className="text-8xl absolute left-0 bottom-0 origin-bottom -rotate-12 -translate-x-6" />
              <FaJs className="text-8xl absolute right-0 top-0 " />
              <FaHtml5 className="text-8xl absolute left-0 top-0 origin-bottom -rotate-12 " />
              <img
                src="/eu.png"
                className="rounded-full h-60 md:h-96 drop-shadow-[0px_0px_8px_rgba(39,39,40)]"
                alt=""
              />
            </div>
          </div>
          <motion.div
            className="box  lg:w-1/3"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1, font: "30px" }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            viewport={{ once: true, amount: 0.8 }}
          >
            <p className="text-justify text-sm md:text-lg drop-shadow-[0px_0px_8px_rgba(255,255,255)] first-letter:text-4xl first-letter:font-serif first-letter:text-emerald-300 ">
              Como programador web Fullstack, possuo especialização em HTML,
              CSS, JavaScript, React, Node.js e MySQL. Minhas habilidades
              abrangem tanto o front-end quanto o back-end, permitindo-me criar
              interfaces interativas e responsivas, e desenvolver sistemas
              robustos e escaláveis. Versátil e apaixonado por inovação atuo em
              múltiplas funções para entregar projetos digitais de sucesso.
              Estou sempre em busca de aprendizado para me manter atualizado nas
              tecnologias mais recentes e proporcionar a melhor experiência aos
              usuários.
            </p>
            <div className="flex justify-center">
              <a
                onMouseEnter={() => setPointer("scale-[5] animate-pulse")}
                onMouseLeave={() => setPointer("")}
                href="https://api.whatsapp.com/send?phone=5511985513451&text=Olá%2C%20gostaria%20de%20entrar%20em%20contato."
                target="_blank"
                className="animate-pulse mt-8 flex justify-center items-center gap-2 px-4 py-3 hover:scale-105 ease-in-out duration-300 text-lg rounded-md bg-gradient-to-r from-emerald-500 to-teal-700 hover:drop-shadow-[0px_0px_8px_rgba(48,171,176)]"
              >
                <div>
                  <LogoWhatsapp />
                </div>
                Whatsapp
              </a>
            </div>
          </motion.div>
        </div>
        <Presentation />
        <div
          className="w-full flex flex-col gap-20 items-center pb-12 p-6"
          ref={knowledge}
        >
          <div className="relative">
            <span className="text-4xl lg:text-7xl 2xl:text-9xl font-bold text-[#ffffff2b]">
              Tecnologias
            </span>
            <span className="absolute -bottom-1 left-1/2 translate-x-[-50%] text-lg lg:text-2xl 2xl:text-4xl font-bold">
              Conhecimentos
            </span>
          </div>
          <CardConhecimento />
        </div>
        <div
          className="w-full flex flex-col gap-5 lg:gap-10 items-center p-6"
          ref={projects}
        >
          <div className="relative">
            <span className="text-4xl lg:text-7xl 2xl:text-9xl font-bold text-[#ffffff2b]">
              Projetos
            </span>
            <span className="absolute -bottom-1 left-1/2 translate-x-[-50%] text-lg lg:text-2xl 2xl:text-4xl font-bold">
              Trabalhos
            </span>
          </div>
          <div className="w-full flex flex-col gap-10 items-center">
            <img src="/BRMS2.png" alt="" />
            <Carousel slides={slides} autoplay={true} interval={5000} />
          </div>
        </div>
        <div
          className="w-full flex flex-col gap-5 lg:gap-10 items-center p-6"
          ref={youtube}
        >
          <div className="relative">
            <span className="text-4xl lg:text-7xl 2xl:text-9xl font-bold text-[#ffffff2b]">
              Vídeos
            </span>
            <span className="absolute -bottom-1 left-1/2 translate-x-[-50%] ">
              <LogoYoutube />
            </span>
          </div>
          <Youtube />
        </div>
        <div
          className="w-full flex flex-col gap-5 lg:gap-10 items-center p-6"
          ref={contact}
        >
          <div className="relative">
            <span className="text-4xl lg:text-7xl 2xl:text-9xl font-bold text-[#ffffff2b]">
              Meus
            </span>
            <span className="absolute -bottom-1 left-1/2 translate-x-[-50%] text-lg lg:text-2xl 2xl:text-4xl font-bold">
              Contatos
            </span>
          </div>
          <Contact />
        </div>
      </div>
    </main>
  );
}
