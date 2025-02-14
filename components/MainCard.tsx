"use client";

import useMediaQuery from "@/hooks/useMediaQuery";

export default function MainCard() {
  const isDesktop = useMediaQuery({
    query: "(min-width: 900px)",
  });

  return (
    <main className="h-fit w-full flex flex-col justify-center items-center">
      <div className="relative z-0 flex flex-col md:flex-row">
        <div className="h-auto w-full relative">
          {isDesktop ? (
            <img
              src={"/img/img_web.jpg"}
              alt="Artist"
              className="w-full h-auto"
            />
          ) : (
            <img
              src={"/img/img_mobile.jpg"}
              alt="Artist"
              className="w-full h-auto"
            />
          )}
        </div>
        <div className="z-20 absolute flex flex-col justify-end  items-center h-full w-full">
          <div className="flex flex-col justify-between items-center text-white">
            <div className=" mt-40 m-2 text-2xl lg:text-6xl font-bold">
              CONTACT
            </div>
            <div className="text-xl mb-4">
              <a href="mailto:steturina@gmail.com">steturina@gmail.com</a>
            </div>
          </div>
          <iframe
            title="artist"
            className="flex lg:w-1/2 w-2/3 mt-5 "
            src="https://open.spotify.com/embed/playlist/0GzOlrqvc7XcBwc5xV3d7t?utm_source=generator"
            width="100%"
            height="352"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </main>
  );
}
