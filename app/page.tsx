import Headline from "@/components/Headline";
import AlbumPicture from "@/components/AlbumPicture";
import Button from "@/components/Button";
import EmailSignup from "@/components/EmailSignup";
import FooterCard from "@/components/FooterCard";
import BackgroundImg from "@/components/BackgroundImg";
import MainCard from "@/components/MainCard";
import ClientLayout from "@/components/ClientLayout";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen font-sans font-normal">
      <header className="relative w-full h-fit">
        <div className="absolute top-0 left-0 z-10 w-full h-full bg-black opacity-50"></div>
        <BackgroundImg />
        <div className="flex flex-col items-center justify-center w-full h-screen p-8 mb-5">
          <Headline />
          <ClientLayout
            mobileContent={
              <div className="z-40 flex flex-col mt-8">
                <AlbumPicture />
                <div className="my-5 rounded-md">
                  <iframe
                    title="artist"
                    src="https://open.spotify.com/embed/artist/1Nb4vxRmJZpwJXuHs5ZQO3?utm_source=generator&theme=0"
                    width="100%"
                    height="152"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                  ></iframe>
                </div>
                <Button />
                <EmailSignup />
              </div>
            }
          >
            <div className="relative z-20 flex flex-col items-center justify-center w-4/5 h-4/5">
              <div className="flex justify-center w-full mt-10 items-top ">
                <AlbumPicture />
                <div className="flex flex-col ">
                  <Button />
                  <EmailSignup />
                  <div className="my-5 rounded-md lg:mx-10">
                    <iframe
                      title="artist"
                      src="https://open.spotify.com/embed/artist/1Nb4vxRmJZpwJXuHs5ZQO3?utm_source=generator&theme=0"
                      width="100%"
                      height="152"
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </ClientLayout>
        </div>
        <div className="relative z-50 flex flex-col items-center justify-center mx-4 my-10 lg:flex-row ">
          <div className="flex justify-center my-4 lg:justify-between mx-9 ">
            <iframe
              className="lg:w-[460px] w-[360px]"
              height="315"
              src="https://www.youtube.com/embed/oz2D9lD0Cc8?start=667"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>{" "}
          </div>
          <iframe
            className="lg:w-[460px] w-[360px]"
            height="315"
            src="https://www.youtube.com/embed/1Jlw4NCNKG4?si=FDUqZRMdXVcCittA&amp;start=200"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </header>

      <MainCard />
      <FooterCard />
    </div>
  );
}
