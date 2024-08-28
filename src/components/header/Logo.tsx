const Logo = () => {
  return (
    <div
      className="flex flex-row gap-4 p-4 cursor-pointer"
      onClick={() => window.open("/", "_self")}
    >
      <img src="/vite.svg" height={22} width={22} />
      <span className="font-bold text-base">Games Db</span>
    </div>
  );
};

export default Logo;
