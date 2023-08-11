import {
  FaReact,
  FaCss3,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaDatabase,
  FaBootstrap,
  FaSass,
} from "react-icons/fa";

function CardConhecimento() {
  return (
    <div className="flex flex-col md:grid grid-cols-2 md:w-2/3 text-sm md:text-base">
      <div className="relative border border-white p-6 2xl:p-12 flex flex-col gap-4 justify-center">
        <FaReact className="text-4xl 2xl:text-8xl drop-shadow-[0px_0px_8px_rgba(94,211,243)] text-[#5ed3f3] absolute left-[-18px] top-[-18px] 2xl:left-[-50px] 2xl:top-[-50px] z-10" />
        <span className="2xl:text-2xl font-semibold">Next.js / React</span>
        <p className=" lg:text-justify ">
          Ao longo de três anos, tenho me dedicado ao estudo e aperfeiçoamento
          do React, React Native e Next.js, participando de cursos e projetos
          que envolvem essas bibliotecas. Através dessa jornada, adquiri
          proficiência em criar projetos responsivos e interativos, aplicando
          meus conhecimentos tanto em âmbito educacional quanto profissional..
        </p>
      </div>
      <div className="row-span-2 relative border border-white p-6 2xl:p-12 flex flex-col gap-4 justify-center">
        <FaCss3 className="text-4xl 2xl:text-8xl drop-shadow-[0px_0px_8px_rgba(94,211,243)] text-[#5ed3f3] absolute right-[-18px] bottom-[-18px] 2xl:right-[-50px] 2xl:bottom-[-50px] z-10" />
        <FaJs className="text-4xl 2xl:text-8xl drop-shadow-[0px_0px_8px_rgba(240,219,85)] text-[#f0db55] absolute left-[-18px] top-[-18px] 2xl:left-[-50px] 2xl:top-[-50px] z-10" />
        <FaHtml5 className="text-4xl 2xl:text-8xl drop-shadow-[0px_0px_8px_rgba(229,85,45)] text-[#e5552d] absolute right-[-18px] top-[-18px] 2xl:right-[-50px] 2xl:top-[-50px] z-10" />
        <span className="2xl:text-2xl font-semibold">
          JavaScript / CSS / HTML
        </span>
        <p className="lg:text-justify ">
          Nos últimos três anos, minha trajetória como desenvolvedor web tem
          sido marcada por uma profunda imersão no universo do HTML, CSS e
          JavaScript. Com dedicação incansável, participei de cursos e projetos
          que me permitiram dominar essas tecnologias fundamentais. Através da
          prática constante, aprimorei minha habilidade em criar interfaces
          interativas e responsivas, tornando-me capaz de projetar experiências
          envolventes para os usuários. Com HTML, dou forma ao conteúdo; com
          CSS, empresto estilo e design; e com JavaScript, trago interatividade
          e dinamismo às aplicações. Essas linguagens poderosas e complementares
          tornaram-me um desenvolvedor web completo, preparado para enfrentar
          novos desafios e oferecer soluções inovadoras para o mundo digital em
          constante evolução.
        </p>
      </div>
      <div className="relative border border-white p-6 2xl:p-12 flex flex-col gap-4  justify-center">
        <FaNodeJs className="text-4xl 2xl:text-8xl drop-shadow-[0px_0px_8px_rgba(144,197,63)] text-[#90c53f] absolute left-[-18px] bottom-[-18px] 2xl:left-[-50px] 2xl:bottom-[-50px] z-10" />
        <FaDatabase className="text-4xl 2xl:text-8xl drop-shadow-[0px_0px_8px_rgba(255,255,255)] text-[#fff] absolute right-[-18px] bottom-[-18px] 2xl:right-[-50px] 2xl:bottom-[-50px] z-10" />
        <span className="2xl:text-2xl font-semibold">Node.js / MySQL</span>
        <p className="lg:text-justify ">
          Em um ano de experiência, mergulhei no desenvolvimento web com Node.js
          e MySQL. Através de projetos desafiadores, explorei a criação de
          aplicações robustas no lado do servidor e a integração eficiente com o
          banco de dados MySQL. Com o Node.js, construí APIs interativas e
          versáteis, enquanto o MySQL garantiu o armazenamento e recuperação de
          dados de forma segura. Essa combinação poderosa de tecnologias me
          tornou um desenvolvedor web Fullstack pronto para enfrentar novos
          desafios e contribuir com projetos digitais inovadores.
        </p>
      </div>
      <div className="col-span-2 relative border border-white p-6 2xl:p-12 flex flex-col gap-4  justify-center">
        <FaBootstrap className="text-4xl 2xl:text-8xl drop-shadow-[0px_0px_8px_rgba(110,16,238)] text-[#6e10ee] absolute left-[-18px] bottom-[-18px] 2xl:left-[-50px] 2xl:bottom-[-50px] z-10" />
        <FaSass className="text-4xl 2xl:text-8xl drop-shadow-[0px_0px_8px_rgba(199,100,148)] text-[#c76494] absolute right-[-18px] bottom-[-18px] 2xl:right-[-50px] 2xl:bottom-[-50px] z-10" />
        <span className="md:text-2xl font-semibold">
          Styled-components / Tailwind / Sass /Bootstrap
        </span>
        <p className="lg:text-justify ">
          Domino tecnologias essenciais como Styled-Components, Sass, Tailwind e
          Bootstrap. Através do uso habilidoso do Styled-Components e Sass,
          consigo criar estilos elegantes e reutilizáveis para minhas
          interfaces, proporcionando uma experiência visualmente atraente aos
          usuários. O Tailwind e o Bootstrap também são aliados valiosos,
          permitindo-me construir layouts responsivos e componentes prontos para
          uso de forma rápida e eficiente. Com essa combinação de ferramentas,
          sou capaz de desenvolver aplicações web modernas e atraentes,
          agregando valor aos projetos que abraço.
        </p>
      </div>
    </div>
  );
}

export default CardConhecimento;
