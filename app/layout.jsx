import "@styles/global.css";
import Nav from "@components/Nav";

export const metadata = {
  title: "Hall Of Prompt",
  description: "The best Midjourney Prompts to inspire you!",
};

const BaseLayout = ({ children }) => {
  return (
    <html lang="fr">
      <body suppressHydrationWarning={true}>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
};

export default BaseLayout;
