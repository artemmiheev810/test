import { Slider } from "antd";
import { CloseIcon } from "components/Icons/CloseIcon";
import { DownloadIcon } from "components/Icons/DownloadIcon";
import { PauseIcon } from "components/Icons/PauseIcon";
import { PlayIcon } from "components/Icons/PlayIcon";
import { usePlayer } from "hooks/usePlayer";
import React from "react";
import { concatClass } from "utils/concatClass";
import { dateHelper } from "utils/dateHelper";
import { download } from "utils/download";

import st from "./st.module.scss";

export const CallPlayer = ({
  record,
  partnership_id,
  duration = 0,
}: {
  record: string;
  partnership_id: number;
  duration?: number;
}) => {
  const {
    isPlay,
    current,
    initPlayer,
    audioDuration,
    reset,
    setIsPlay,
    setCurrent,
  } = usePlayer({
    partnership_id,
    record,
    duration,
  });

  return record ? (
    <div className={st.wrap}>
      <div
        className={concatClass(
          st.player,
          !isPlay && current === 0 ? "audio" : ""
        )}
      >
        <div className={st.player__custom}>
          <div className={st.player__custom_time}>
            {dateHelper.transformNumberToSeconds(
              isPlay || current > 0 ? current : audioDuration
            )}
          </div>
          <div
            className={st.player__custom_play}
            onClick={() => setIsPlay(!isPlay)}
          >
            {isPlay ? <PauseIcon /> : <PlayIcon />}
          </div>
          <div className={st.player__custom_scale}>
            <Slider
              onChange={(s) => {
                if (initPlayer.current) {
                  initPlayer.current.currentTime = s;
                  setCurrent(s);
                }
              }}
              defaultValue={0}
              max={audioDuration}
              value={current}
              tooltip={{ open: false }}
            />
          </div>
          <div
            className={st.player__custom_download}
            onClick={() => download(initPlayer.current?.src)}
          >
            <DownloadIcon />
          </div>
          <div
            className={concatClass(st.player__custom_close, "close")}
            onClick={reset}
          >
            <CloseIcon />
          </div>
        </div>
        <audio className={st.player__init} ref={initPlayer} controls />
      </div>
      <div className={st.player__innerDuaration}>
        {dateHelper.transformNumberToSeconds(duration)}
      </div>
    </div>
  ) : null;
};
