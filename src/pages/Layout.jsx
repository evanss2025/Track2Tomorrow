import { Outlet, Link } from "react-router-dom";
import "../App.css";

export default function Layout() {
  return (
    <div className="overflow-hidden">
      <div className="w-full bg-blue-500 h-24 flex px-20 items-center justify-center text-stone-50"><div className="w-full bg-blue-500 h-24 flex px-20 items-center justify-center">
        <h1 className="font-bold text-3xl text-stone-50 text-center">Track2Tomorrow</h1>
      </div>

      </div>
      <div className="w-full min-h-screen flex flex-col px-20 py-8">
        <Outlet />
      </div>
    </div>
  );
}
