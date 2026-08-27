import { useEffect, useState } from "react";
import "../style/pageLoader.css";

function PageLoader() {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const startedAt = Date.now();
    const minimumDisplayTime = 900;

    const hideLoader = () => {
      const remainingTime = Math.max(0, minimumDisplayTime - (Date.now() - startedAt));

      window.setTimeout(() => {
        setIsExiting(true);
        window.setTimeout(() => setIsVisible(false), 450);
      }, remainingTime);
    };

    if (document.readyState === "complete") {
      hideLoader();
    } else {
      window.addEventListener("load", hideLoader, { once: true });
    }

    return () => window.removeEventListener("load", hideLoader);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`page-loader${isExiting ? " page-loader--exiting" : ""}`} role="status" aria-label="Loading">
      <div className="page-loader__inner">
        <div className="page-loader__mark" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <p className="page-loader__name">PYCY</p>
        <div className="page-loader__track" aria-hidden="true">
          <span />
        </div>
      </div>
    </div>
  );
}

export default PageLoader;