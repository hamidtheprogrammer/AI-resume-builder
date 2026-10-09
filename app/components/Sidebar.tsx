import Nav from "./Nav";
import SignOutButton from "./SignOutButton";

const Sidebar = () => {
  return (
    <header className="max-sm:hidden h-full flex flex-col justify-between w-60 max-lg:w-20 px-2 py-9 bg-[#101522] text-white">
      <span className="sm:max-lg:text-center">LOGO</span>
      <Nav />
      <div className="shadow-[0px_10px_40px_rgba(0,0,0,0.1)] flex flex-col gap-4 border border-white/5 rounded-xl py-5 p-3">
        <div className="flex gap-2 sm:max-lg:justify-center">
          <div className="rounded-sm size-8 flex justify-center items-center bg-[#7549ED]">
            A
          </div>
          <div className="sm:max-lg:hidden">
            <h1 className="text-xs font-bold">Abdul</h1>
            <p className="text-[0.7rem]">abdul@gmail.com</p>
          </div>
        </div>
        <hr className="opacity-5" />
        <SignOutButton />
      </div>
    </header>
  );
};

export default Sidebar;
