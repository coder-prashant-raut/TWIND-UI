import { Link } from "react-router-dom";
import { FaRocket } from "react-icons/fa";
import NotFoundImg from '../../assets/404page.png'

const NotFound = ({ theme }) => {
  const isDark = theme === "dark";

  return (
    <div className={`flex mt-20 flex-col items-center justify-center min-h-[70vh] px-4 text-center transition-all duration-300 ${isDark ? "bg-black text-white" : "bg-white text-gray-800"}`}>
      
      <img
        src={NotFoundImg}
        alt="404 illustration"
        className="w-[280px] md:w-[400px] mb-8"
      />

      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Oops! Page Not Found
      </h1>
      
      <p className="text-lg md:text-xl max-w-xl mb-6">
        It seems you've wandered off the design system path 🚧.
        No worries — let's teleport you back to safety!
      </p>

      <Link to="/">
        <button
          className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl text-lg font-medium transition-all shadow-md hover:scale-105 active:scale-95 ${
            isDark
              ? "bg-white text-black hover:bg-gray-100"
              : "bg-black text-white hover:bg-gray-900"
          }`}
        >
          <FaRocket className="text-xl" />
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
