'use client';

import { useEffect, useRef } from 'react';

interface SoundProps {
  src: string;
  play: boolean;
  volume?: number;
  loop?: boolean;
}

/**
 * A component that plays a sound
 * @param src - The path to the sound file
 * @param play - Whether to play the sound
 * @param volume - The volume of the sound (0-1)
 * @param loop - Whether to loop the sound
 */
const Sound: React.FC<SoundProps> = ({ 
  src, 
  play, 
  volume = 1, 
  loop = false 
}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  useEffect(() => {
    // Create an audio element if it doesn't exist
    if (!audioRef.current) {
      audioRef.current = new Audio(src);
      audioRef.current.volume = volume;
      audioRef.current.loop = loop;
    }
    
    // Update properties if they change
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.loop = loop;
    }
    
    // Cleanup function
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [src, volume, loop]);
  
  useEffect(() => {
    if (play && audioRef.current) {
      // Reset the audio to the beginning
      audioRef.current.currentTime = 0;
      
      // Play the audio
      const playPromise = audioRef.current.play();
      
      // Handle the play promise - this is needed for modern browsers
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.error("Audio play error:", error);
        });
      }
    }
  }, [play]);
  
  // This component doesn't render anything
  return null;
};

export default Sound;

/**
 * A hook that loads and plays sounds
 * @param soundUrl - The path to the sound file
 * @param options - Options for the sound
 * @returns A function to play the sound
 */
export const useSound = (soundUrl: string, options?: { volume?: number, loop?: boolean }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  useEffect(() => {
    // Preload the audio
    audioRef.current = new Audio(soundUrl);
    if (options?.volume !== undefined) {
      audioRef.current.volume = options.volume;
    }
    if (options?.loop !== undefined) {
      audioRef.current.loop = options.loop;
    }
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [soundUrl, options?.volume, options?.loop]);
  
  const play = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      const playPromise = audioRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.error("Audio play error:", error);
        });
      }
    }
  };
  
  return play;
};
