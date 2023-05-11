import "@styles/global.css";

export const metadata = {
  title: "Hall Of Prompt",
  description: "The best Midjourney Prompts to inspire you!",
};

const BaseLayout = ({ children }) => {
  return (
    <html lang="fr">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default BaseLayout;
