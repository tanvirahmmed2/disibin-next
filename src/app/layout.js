
import "./globals.css";


export const metadata = {
  title: "Home",
  description: "Main home page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
