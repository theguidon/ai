import GlitchBG from "../assets/glitch-bg-2.gif";

const CrashPage = () => {
  return (
    <main className="w-screen h-screen">
      <div
        className="bg-cover w-full h-full fixed -z-10 animate-[crash_1s_linear_infinite]"
        style={{
          background: `linear-gradient(312deg, #7FF7D7 -24.28%, #0D0B10 107.05%), url(${GlitchBG}) lightgray 50% / cover no-repeat`,
          backgroundBlendMode: "color, normal",
        }}
      />
      <div className="w-full h-full flex flex-col justify-center">
        <h1 className="font-redaction-35 text-[7rem] text-light-green text-center">
          System Error 404
        </h1>
        <h2 className="font-redaction-50 text-[2rem] text-light-green text-center">
          This interactive is no longer working.
        </h2>
      </div>
    </main>
  );
};

export default CrashPage;
