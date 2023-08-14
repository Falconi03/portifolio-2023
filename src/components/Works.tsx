import { Carousel } from "./Carousel";

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

function Works() {
  return (
    <div className="w-full flex flex-col gap-10 items-center">
      <a href="https://clienteportal.brms.com.br/login" target="_blank">
        <img src="/BRMS2.png" alt="" />
      </a>
      <div className="flex gap-4">
        <span className=" text-[#5ed3f3] text-xs font-semibold border border-[#5ed3f3] rounded-full px-2 py-1 ">
          react
        </span>
        <span className=" text-[#c76494] text-xs font-semibold border border-[#c76494] rounded-full px-2 py-1 ">
          sass
        </span>
        <span className=" text-[#7248b6] text-xs font-semibold border border-[#7248b6] rounded-full px-2 py-1 ">
          redux
        </span>
      </div>
      <Carousel slides={slides} autoplay={true} interval={5000} />
    </div>
  );
}

export default Works;
