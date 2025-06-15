// this is a banner
import { useTheme } from "@/contexts/themeContext";

export default function Banner() {
  const { setTheme } = useTheme();

  return (
    <>
      <div className="py-64 space-y-10 flex-col w-full items-center text-center">
        {/* text statements */}
        <div className="flex-col space-y-5">
          <p className="txt text-5xl font-black">Hello, welcome to this thing!</p>
          <p className="txt text-xl italic">Click any theme buttons below to explore theme switching.</p>
        </div>

        {/* button toggles */}
        <div className="flex-row m-3">
          <button onClick={() => setTheme("light")} className="btn btn:hover m-1">
            Light
          </button>
          <button onClick={() => setTheme("dark")} className="btn m-1">
            Dark
          </button>
          <button onClick={() => setTheme("ocean")} className="btn m-1">
            Ocean
          </button>
          <button onClick={() => setTheme("pink")} className="btn m-1">
            Pink
          </button>
        </div>
      </div>
    </>
  );
}
