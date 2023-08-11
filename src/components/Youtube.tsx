import { PointerContext } from "@/context/SpringContext";
import { motion, Variants } from "framer-motion";
import { FaYoutube } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

interface Props {
  video: { img: string; link: string };
  part: number;
}

const cardVariants: Variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 0,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

function Card(props: { video: IVideos }) {
  console.log(props.video);
  return (
    <motion.div
      className="overflow-hidden flex items-center justify-center relative drop-shadow-[0px_0px_8px_rgba(255,255,255)] rounded-lg overflow-hidden"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.8 }}
    >
      <div className="absolute bottom-0 left-0 h-52" />
      <motion.div
        className=" flex flex-col items-center justify-center rounded-lg "
        variants={cardVariants}
      >
        <iframe
          className="w-[250px] h-[130px] sm:w-[350px] sm:h-[180px]"
          src={`https://www.youtube.com/embed/${props.video.snippet.resourceId.videoId}`}
          allowFullScreen
        ></iframe>
      </motion.div>
    </motion.div>
  );
}

interface IVideos {
  snippet: {
    resourceId: {
      videoId: string;
    };
  };
}

export default function Youtube() {
  const { setPointer } = useContext(PointerContext);
  const [videos, setVideos] = useState<IVideos[] | undefined>();

  useEffect(() => {
    axios
      .get(
        "https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&channelId=UCNhTBv37_Imr9RB9SJvkkRw&key=AIzaSyCWCes-EAynEZh-G95UXDB8x6bov-fqpqc&playlistId=PLayBrlXYOl6e_w6aRS6qgaO7sicpvibqA"
      )
      .then((res) => {
        setVideos(res.data.items);
      });
  }, []);

  return (
    <div className="w-full xl:w-2/3 flex flex-col items-center gap-12 xl:gap-24 ">
      <div className="flex justify-center flex-wrap gap-6 xl:gap-12 ">
        {videos?.map((video, id) => {
          return <Card video={video} key={id} />;
        })}
      </div>
      <a
        onMouseEnter={() => setPointer("scale-[5] animate-pulse")}
        onMouseLeave={() => setPointer("")}
        href="https://www.youtube.com/channel/UCNhTBv37_Imr9RB9SJvkkRw"
        target="_blank"
        className="flex items-center gap-2 px-4 py-2 hover:scale-105 ease-in-out duration-300 text-lg rounded-md bg-[#fcfcfc11] border border-white hover:drop-shadow-[0px_0px_2px_rgba(255,255,255)]"
      >
        <FaYoutube className="text-3xl" />
        Todos os vídeos
      </a>
    </div>
  );
}
