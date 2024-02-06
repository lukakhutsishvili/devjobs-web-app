import { headerProps } from "../type";

const Header: React.FC<headerProps> = ({ dark, setDark }) => {
  return (
    <>
      <img
        src="/assets/mobile/bg-pattern-header.svg"
        className="absolute w-full h-[136px] z-20 md:rounded-bl-[100px]"
      />
      <div
        className={`w-full min-h-full absolute left-0 top-0 -z-10 ${
          !dark ? "bg-lightGrey" : "bg-midNight"
        }`}
      ></div>
      <header className="relative px-6 pt-8 flex items-center z-20">
        <img src="/assets/desktop/logo.svg" />
        <div className="ml-auto grid grid-cols-[auto_auto_auto] gap-4 items-center">
          <img src="/assets/desktop/icon-sun.svg" />
          <div
            onClick={() => setDark(!dark)}
            className="w-12 h-6 bg-white rounded-2xl  p-[5px] hover:cursor-pointer  hover"
          >
            <div
              className={` bg-violet rounded-[50%] w-[14px] h-[14px] ${
                dark ? "ml-auto" : null
              } `}
            ></div>
          </div>
          <img src="/assets/desktop/icon-moon.svg" />
        </div>
      </header>
    </>
  );
};

export default Header;
