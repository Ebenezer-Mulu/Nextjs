import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const DarkModeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  });
  if (!mounted) {
    return null;
  }

  return (
    <div className="container w-12 h-6 border-2 border-gray-600 rounded-2xl flex gap-1 px-1 items-center relative cursor-pointer">
      <div onClick={() => setTheme("dark")} className="text-xs">
        🌙
      </div>
      <div onClick={() => setTheme("light")} className="text-xs">
        🌞
      </div>

      <div
        className="w-4 h-4 bg-green-300 rounded-full absolute"
        style={theme === "light" ? { right: "1px" } : { left: "1px" }}
      />
    </div>
  );
};

export default DarkModeToggle;
