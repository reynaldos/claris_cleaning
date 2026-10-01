"use client";

import React, { useRef, useState } from "react";
import { ButtonWrap, VideoContainer, VideoWrapper } from "./videoBox.styles";
import { RxTriangleRight } from "react-icons/rx";

const VideoBox = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [language, setLanguage] = useState<"eng" | "esp">("eng");

  const togglePlay = async () => {
    if (videoRef.current?.paused) {
      await videoRef.current.play();
    } else {
      videoRef.current?.pause();
    }
  };

  return (
    <VideoContainer>
      <VideoWrapper>
        <video
          ref={videoRef}
          preload="auto"
          controls
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          width={"100%"}
          src={`./CCC_ad_${language}.mp4`}
          poster={"./assets/adPoster.webp"}
          aria-label={
            language === "eng"
              ? "Clari's Cleaning Crew ad (English)"
              : "Anuncio de Clari's Cleaning Crew (Español)"
          }
        />

        {!isPlaying && (
          <button
            type="button"
            className="playBtn"
            aria-label="Play video"
            onClick={() => {
              void togglePlay();
            }}
          >
            <RxTriangleRight aria-hidden="true" />
          </button>
        )}
      </VideoWrapper>

      <ButtonWrap>
        <button
          type="button"
          aria-pressed={language === "eng"}
          onClick={() => setLanguage("eng")}
          className={language === "eng" ? "active" : ""}
        >
          English
        </button>
        <button
          type="button"
          aria-pressed={language === "esp"}
          onClick={() => setLanguage("esp")}
          className={language === "esp" ? "active" : ""}
        >
          Español
        </button>
      </ButtonWrap>
    </VideoContainer>
  );
};

export default VideoBox;
