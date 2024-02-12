import Image from "next/image";

export default function Home() {
  return (
    <nav className="bg-white">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="">1</div>
          <button className="sm:hidden flex items-center text-blue-600 p-3">
            <span className="absolute -inset-0.5"></span>
            <span className="sr-only">Open Menu</span>
            <svg className="block h-6 w-6" fill="none"></svg>
          </button>
          <div><b>LOGO</b></div>
          <div>3</div>
        </div>
      </div>
    </nav>
  );
}