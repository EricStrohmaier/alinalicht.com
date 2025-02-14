function Button() {
  return (
    <div className="relative flex items-center justify-center w-full mt-8 ">
      <a
        href={"https://fanlink.tv/alinalicht-nobody"}
        target="_blank"
        rel="noreferrer"
        className="w-full lg:mx-10 transition duration-200 hover:bg-pink-400 rounded-md relative  border-2 border-white sm:px-2 p-2 h-[70px] flex items-center justify-center"
      >
        <div className="tracking-wider text-white md:text-xl mx:text-2xl ">
          STREAM // DOWNLOAD
        </div>
      </a>
    </div>
  );
}

export default Button;
