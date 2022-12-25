import { useEffect, useState } from "react";

const PreLoader = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    window.addEventListener("load", () => {
      setLoading(false);
    });
  }, []);

  return (
    <div id="preloader" style={{ display: loading ? "flex" : "none" }}>
      <div id="loading-center">
      <img src=
"https://res.cloudinary.com/dvdllbn24/image/upload/v1671977421/daily/logo_btsnzb.png" />
        <div id="object" />
      </div>
    </div>
  );
};
export default PreLoader;
