
import ContextProvider from "@/component/helper/Context";
import "./globals.css";


export const metadata = {
  title:{
    default:'Disibin',
    templet:'%s | Disibin'
  },
  description: "Main home page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` antialiased bg-white text-black`}
      >
        <ContextProvider>
          <main>{children}</main>
        </ContextProvider>
      </body>
    </html>
  );
}
