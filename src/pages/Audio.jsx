import userLogo from "../assets/user-logo.svg";
import aiLogo from "../assets/ai-logo.svg";
import arrow from "../assets/arrow-back.svg";

import originalAudio from "../assets/original-audio.mp3";
import distortedAudio from "../assets/distorted-audio.mp3";

import { useState, useEffect, useRef, useCallback } from "react";
import { Link, useLocation } from "wouter";

import WaveSurfer from "wavesurfer.js";

const Audio = () => {
  const [regenerateCount, setRegenerateCount] = useState(0);
  const [location, navigate] = useLocation();
  useEffect(() => {
    if (regenerateCount >= 2) {
      navigate("/crash");
    }
  }, [regenerateCount, navigate]);

  const [isAudioLoading, setIsAudioLoading] = useState(true);
  useEffect(() => {
    const delay = setInterval(() => {
      setIsAudioLoading(false);
    }, 2000);

    return () => clearInterval(delay);
  }, [isAudioLoading]);

  const waveRef = useRef(null);
  let wavesurfer;
  useEffect(() => {
    const ctx = document.createElement("canvas").getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 0, 150);
    gradient.addColorStop(0, "rgb(70, 155, 98)");
    gradient.addColorStop(1, "rgb(25, 84, 44)");

    wavesurfer = WaveSurfer.create({
      container: waveRef.current,
      waveColor: "#85E0A3",
      progressColor: gradient,
      url: regenerateCount === 0 ? originalAudio : distortedAudio,
      width: "30dvw",
      height: 76,
      barGap: 5,
      barWidth: 8,
      barRadius: 2,
      hideScrollbar: true,
      normalize: true,
    });

    wavesurfer.on("click", () => {
      if (wavesurfer) wavesurfer.play();
    });

    return () => wavesurfer.destroy();
  }, [regenerateCount]);

	const handlePlay = useCallback(() => {
    wavesurfer && wavesurfer.playPause()
  }, [wavesurfer, regenerateCount])

  return (
    <main
      className="min-h-screen"
      style={{
        background: "linear-gradient(312deg, #0C4346 -24.28%, #0D0B10 107.05%)",
      }}
    >
      <Link
        to="/"
        className="text-white font-redaction-20 flex flex-row gap-2 pt-[2.75rem] pb-[1.75rem] pl-[1.5rem] md:pb-[3rem]"
      >
        <img src={arrow} />
        Back to main page
      </Link>
      <section className="px-[1.5rem] pb-[3.5rem] flex flex-col gap-[2.5rem] md:px-[9rem] md:pb-[5rem]">
        <div className="flex flex-row items-start gap-4">
          <img
            src={userLogo}
            className="aspect-square w-[2rem] md:w-[3.5rem]"
          />
          <p
            className={`${
              regenerateCount === 2 ? "font-redaction-70" : "font-redaction-20"
            } text-light-green text-[1.25rem] md:text-[1.7rem]`}
          >
            Generate an audio essay reflecting on the human experience
          </p>
        </div>
        <div className="flex flex-row items-start gap-4">
          <img
            src={aiLogo}
            className="aspect-square w-[2rem] rounded-[0.5rem] p-[0.2rem] md:w-[3.5rem]"
            style={{
              background:
                "linear-gradient(131deg, #FFF -119.31%, rgba(153, 153, 153, 0.00) 145.54%)",
            }}
          />
          <div className={`${isAudioLoading ? "hidden" : "block"} w-full`}>
            <p className="bg-light-green px-2 py-1 rounded-[0.5rem] mb-4 font-bold text-[0.875rem] w-fit">
              Draft {regenerateCount + 1}
            </p>
            <div className="flex flex-row items-center h-[4.75rem] gap-[0.3rem]">
              <button className="h-[3.25rem]" onClick={handlePlay}>
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 52 53"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="26" cy="26.5" r="26" fill="#85E0A3" />
                  <path d="M40 26L17 39V13L40 26Z" fill="#0C4346" />
                </svg>
              </button>
              <div ref={waveRef}></div>
            </div>
          </div>
          <div
            className={`w-full max-w-[50rem] flex-col gap-[0.6rem] ${
              isAudioLoading ? "flex" : "hidden"
            }`}
          >
            <div
              className="w-full h-4 rounded-[0.3rem]"
              style={{
                background:
                  "linear-gradient(90deg, rgba(155, 239, 194, 0.50) 16.69%, rgba(0, 50, 48, 0.20) 69.77%)",
              }}
            ></div>
            <div
              className="w-full h-4 rounded-[0.3rem]"
              style={{
                background:
                  "linear-gradient(90deg, rgba(0, 50, 48, 0.20) 5.76%, rgba(155, 239, 194, 0.50) 71.18%, rgba(0, 50, 48, 0.20) 98.26%)",
              }}
            ></div>
            <div
              className="w-full h-4 rounded-[0.3rem]"
              style={{
                background:
                  "linear-gradient(90deg, rgba(0, 50, 48, 0.10) 40.48%, rgba(155, 239, 194, 0.50) 69.77%)",
              }}
            ></div>
          </div>
        </div>
      </section>
      <div className="px-[1.5rem] pb-[3rem] flex flex-col gap-[0.75rem] md:px-[9rem] md:gap-[1.7rem] md:pb-[6.25rem]">
        <button
          onClick={() => {
            setRegenerateCount(regenerateCount + 1);
            setIsAudioLoading(true);
          }}
          className="p-4 bg-light-green flex flex-row gap-[0.6rem] rounded-[0.5rem] font-bold w-fit"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="arrow-counterclockwise">
              <g id="Vector">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 4.49988C16.1421 4.49988 19.5 7.85775 19.5 11.9999C19.5 16.142 16.1421 19.4999 12 19.4999C7.85786 19.4999 4.5 16.142 4.5 11.9999C4.5 10.8817 4.7442 9.82267 5.18146 8.87139C5.35445 8.49503 5.18959 8.04969 4.81323 7.8767C4.43687 7.7037 3.99154 7.86856 3.81854 8.24492C3.29279 9.38872 3 10.6611 3 11.9999C3 16.9704 7.02944 20.9999 12 20.9999C16.9706 20.9999 21 16.9704 21 11.9999C21 7.02932 16.9706 2.99988 12 2.99988V4.49988Z"
                  fill="currentColor"
                />
                <path
                  d="M12 6.69924V0.800522C12 0.482583 11.6292 0.308899 11.3849 0.512438L7.8457 3.4618C7.66579 3.61172 7.66579 3.88804 7.8457 4.03796L11.3849 6.98732C11.6292 7.19086 12 7.01718 12 6.69924Z"
                  fill="currentColor"
                />
              </g>
            </g>
          </svg>
          Regenerate image
        </button>
        <p
          className={`text-white ${
            regenerateCount === 2 ? "font-redaction-70" : "font-redaction-20"
          } text-[1.25rem]`}
        >
          Regenerating would offer <b>AI Bot</b> more information to analyze for
          its new output, including the existing text created by <b>AI Bot</b>{" "}
          which is further refined.
        </p>
      </div>
    </main>
  );
};

export default Audio;
