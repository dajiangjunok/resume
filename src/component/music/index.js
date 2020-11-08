import React, { memo, useRef, useState } from 'react'
import musicOn from '../../assets/img/music_on.png';
import musicOff from '../../assets/img/music_off.png';
import mp3 from '../../assets/download/zgr.mp3';

import { MusicWrapper } from './style';

export default memo(function JMusic () {
  const [isMuisc, setisMuisc] = useState(false);
  const audioRef = useRef()

  function audioPlay () {
    const audio = audioRef.current;
    if (isMuisc) {
      audio.pause();
      setisMuisc(false);
    } else {
      audio.play();
      setisMuisc(true);
    }
  }


  return (
    <MusicWrapper>
      <img className="music-img" onClick={audioPlay} src={
        isMuisc ? musicOn : musicOff
      } alt=""></img>
      <audio ref={audioRef} loop={true} src={mp3} ></audio>
    </MusicWrapper>
  )
})