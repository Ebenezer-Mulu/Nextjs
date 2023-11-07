import Footer from "../components/footer/Footer";
import NavBar from "../components/navbar/NavBar";
import "../app/styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" overflow-x-hidden bg-custom-black text-gray-500 flex  ">
        <div className=" min-h-screen mx-16  flex  flex-col justify-between">
          <NavBar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
