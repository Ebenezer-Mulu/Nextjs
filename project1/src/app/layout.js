import Footer from "../components/footer/Footer";
import NavBar from "../components/navbar/NavBar";
import "../app/styles/globals.css";
import ThemeContext from "../context/ThemeContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" overflow-x-hidden cus text-gray-500 flex  ">
        <ThemeContext>
          <div className="min-h-screen mx-16  flex  flex-col justify-between">
            <NavBar />
            {children}
            <Footer />
          </div>
        </ThemeContext>
      </body>
    </html>
  );
}
