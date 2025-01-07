export default function SocialIcon(props: {
  title: string;
  img: string;
  href: string;
}) {
  return (
    <div>
      <div className="bg-white hover:bg-slate-400 transition duration-300 rounded-full m-2 p-2 w-[50px] h-full flex justify-center items-center">
        <a
          className="w-full h-full"
          href={props.href}
          aria-label={props.title}
          title={props.title}
          target="_blank"
          rel="noreferrer"
        >
          <img src={props.img} alt={props.title} />
        </a>
      </div>
    </div>
  );
}
