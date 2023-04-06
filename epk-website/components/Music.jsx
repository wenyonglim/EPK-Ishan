import Spotify from "./Spotify";
import { Text } from "@nextui-org/react";
import { motion } from "framer-motion";
const Music = () => {
  return (
    <motion.div
      className="overflow-auto px-8"
      id="Music"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <Spotify
        playlist={
          "https://open.spotify.com/embed/artist/31H6pWphv3pWESSd03Ifyc?utm_source=generator"
        }
      />
    </motion.div>
  );
};

export default Music;
