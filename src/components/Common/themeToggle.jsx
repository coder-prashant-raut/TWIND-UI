import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="px-4 py-2 rounded bg-gray-300 dark:bg-gray-700 text-sm"
    >
      {dark ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default ThemeToggle;
// 