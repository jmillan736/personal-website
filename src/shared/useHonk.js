// The penguin's honk. Returns a honk() function you can call on click.
import { useCallback, useRef } from "react";
import { media } from "../content/site.js";

export default function useHonk() {
  const audioRef = useRef(null);

  return useCallback(() => {
    try {
      // Create the Audio only on first use, so nothing loads until a click.
      if (!audioRef.current) audioRef.current = new Audio(media.honk);
      const audio = audioRef.current;
      audio.currentTime = 0; // allow rapid repeat honks
      const playing = audio.play();
      // play() returns a promise that rejects when audio is blocked: ignore it.
      if (playing && typeof playing.catch === "function") playing.catch(() => {});
    } catch {
      // No audio support (or blocked in a sandbox): stay silent.
    }
  }, []);
}
