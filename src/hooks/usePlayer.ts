import { useEffect, useRef, useState } from "react";
import { useGetRecord } from "services/Record";

interface UsePlayer {
  duration: number;
  record: string;
  partnership_id: number;
}
export const usePlayer = ({ duration, record, partnership_id }: UsePlayer) => {
  const initPlayer = useRef<HTMLAudioElement | null>(null);
  const [isPlay, setIsPlay] = useState(false);
  const [startTimer, setStartTimer] = useState(false);
  const [audioDuration, setAudioDuration] = useState(duration);
  const [current, setCurrent] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const { data } = useGetRecord(record, partnership_id, isPlay, isLoaded);

  useEffect(() => {
    if (initPlayer.current && data) {
      const audio = new Audio();
      audio.src = data;
      audio.addEventListener("loadedmetadata", () => {
        setAudioDuration(audio.duration);
      });
      initPlayer.current = audio;
      setIsLoaded(true);
    }
  }, [initPlayer, data]);

  useEffect(() => {
    if (initPlayer.current && data && isPlay) {
      initPlayer.current?.play();
      setStartTimer(true);
    }
    if (!isPlay) {
      initPlayer.current?.pause();
      setStartTimer(false);
    }
  }, [isPlay, data]);

  useEffect(() => {
    if (current >= audioDuration) {
      setStartTimer(false);
      setIsPlay(false);
      setCurrent(0);
    }
  }, [current]);

  useEffect(() => {
    if (startTimer) {
      const t = setInterval(
        () => setCurrent((prevState) => (prevState += 1)),
        1000
      );
      return () => clearInterval(t);
    }
  }, [startTimer]);

  const reset = () => {
    setIsPlay(false);
    setStartTimer(false);
    setCurrent(0);
    if (initPlayer.current) {
      initPlayer.current.currentTime = 0;
    }
  };

  return {
    isPlay,
    current,
    audioDuration,
    initPlayer,
    reset,
    setIsPlay,
    setCurrent,
  };
};
