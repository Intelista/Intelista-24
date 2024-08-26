import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
const audio = '/images/JackSparrow - Bgm.mp3'; // Correct import path

const AudioPlayer = ({ autoPlay, loop }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    const playAudio = async () => {
      try {
        if (audioRef.current) {
          await audioRef.current.play();
        }
      } catch (error) {
        console.error('Failed to play audio:', error);
      }
    };

    playAudio();
  }, []); // Empty dependency array to ensure it only runs on mount

  return (
    <audio
      ref={audioRef}
      src={audio} // Use the imported audio file
      autoPlay={autoPlay}
      loop={loop}
      // Optionally include controls to debug
      // controls
    />
  );
};

AudioPlayer.propTypes = {
  autoPlay: PropTypes.bool,
  loop: PropTypes.bool,
};

AudioPlayer.defaultProps = {
  autoPlay: true,
  loop: true,
};

export default AudioPlayer;
