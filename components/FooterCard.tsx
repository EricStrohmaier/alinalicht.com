import SocialIcon from "./SocialIcon";
import instagrampng from "@/assets/icons/instagram.png";
import appleIcon from "@/assets/icons/apple-music.png";
import bandcampIcon from "@/assets/icons/bandcamp.png";
import facebookIcon from "@/assets/icons/facebook.png";
import soundcloudIcon from "@/assets/icons/soundcloud.png";
import spotifyIcon from "@/assets/icons/spotify.png";
import tiktokIcon from "@/assets/icons/tiktok.png";
import twitterIcon from "@/assets/icons/twitter.png";
import youtubeIcon from "@/assets/icons/youtube.png";
import beatportIcon from "@/assets/icons/beatport.png";
import tidalIcon from "@/assets/icons/tidal.png";

export default function FooterCard() {
  return (
    <div className="flex flex-col justify-center items-center p-2 w-full h-full bg-black">
      <div className="flex flex-wrap justify-center items-center p-2 py-5 w-4/5 h-full">
        <SocialIcon
          title={"Spotify"}
          img={spotifyIcon.src}
          href={
            "https://open.spotify.com/artist/1Nb4vxRmJZpwJXuHs5ZQO3?si=613qz-chSwCch1dpmStooQ"
          }
        />
        <SocialIcon
          title={"Apple-Music"}
          img={appleIcon.src}
          href={"https://music.apple.com/at/artist/alina-licht/1691736862"}
        />
        <SocialIcon
          title={"Instagram"}
          img={instagrampng.src}
          href={"https://www.instagram.com/alinalicht.dj"}
        />
        <SocialIcon
          title={"Twitter"}
          img={twitterIcon.src}
          href={"https://twitter.com/DJAlinaLicht"}
        />
        <SocialIcon
          title={"Facebook"}
          img={facebookIcon.src}
          href={"https://facebook.com/alinalicht.dj"}
        />
        <SocialIcon
          title={"Youtube"}
          img={youtubeIcon.src}
          href={"https://music.youtube.com/channel/UCXszl9akVDIK2j8DUJYh1ww"}
        />
        <SocialIcon
          title={"Soundcloud"}
          img={soundcloudIcon.src}
          href={"https://soundcloud.com/alinalicht"}
        />
        <SocialIcon
          title={"Bandcamp"}
          img={bandcampIcon.src}
          href={"https://alinalicht.bandcamp.com/track/stay-hydrated"}
        />
        <SocialIcon
          title={"Tiktok"}
          img={tiktokIcon.src}
          href={"https://www.tiktok.com/@alinalicht"}
        />
        <SocialIcon
          title={"Beatport"}
          img={beatportIcon.src}
          href={"https://www.beatport.com/artist/alina-licht/1135682"}
        />
        <SocialIcon
          title={"Tidal"}
          img={tidalIcon.src}
          href={"https://listen.tidal.com/artist/39963384"}
        />
      </div>
      <div className="text-white">
        {" "}
        &copy; {new Date().getFullYear()} by{" "}
        <a
          target="_blank"
          className="underline"
          href="https://github.com/EricStrohmaier"
        >
          Eric Strohmaier
        </a>
      </div>
    </div>
  );
}
