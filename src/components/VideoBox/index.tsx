"use client"

import React, { useRef, useState } from 'react'
import { ButtonWrap, VideoContainer, VideoWrapper } from './videoBox.styles';
import { RxTriangleRight } from 'react-icons/rx';

import AdPoster from "@/assets/adPoster.png"

const VideoBox = () => {

  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlayig, setIsPlaying] = useState(false);
  const [language, setLanguage] = useState<'eng' | 'esp'>('eng')

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const togglePlay = async () => {
    if (videoRef.current?.paused) {
      await videoRef.current.play();
    } else {
      videoRef.current?.pause();
    }
  };

  const toggleLanguage = () =>{
    setLanguage((old)=>old==='eng' ? 'esp' : 'eng')
  }

  return (
    <VideoContainer>
      <VideoWrapper>
        <video
          ref={videoRef}
          preload="auto"
          controls={isPlayig}
          onPlay={handlePlay}
          onPause={handlePause}
          width={"100%"}
          src={`./CCC_ad_${language}.mp4`}
          poster={'./assets/adPoster.png'}
        />

        {!isPlayig && (
          <span
            onClick={() => {
              void togglePlay();
            }}
          >
            <RxTriangleRight />
          </span>
        )}
      </VideoWrapper>

      <ButtonWrap>
        <button
          onClick={toggleLanguage}
          className={language === "eng" ? "active" : ""}
        >
          English
        </button>
        <button
          onClick={toggleLanguage}
          className={language === "esp" ? "active" : ""}
        >
          Español
        </button>
      </ButtonWrap>
    </VideoContainer>
  );
}

export default VideoBox