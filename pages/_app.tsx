import type { AppProps } from "next/app";
import "normalize.css/normalize.css";
import "styles/theme/index.scss";
import "styles/fonts/index.scss";
import "styles/global.scss";
import { useEffect, useState } from "react";

// Custom AppProps Type with layout support
type CustomAppProps = AppProps & {
  Component: AppProps["Component"] & {
    PageLayout?: React.ComponentType;
  };
};

function MyApp({ Component, pageProps }: CustomAppProps) {
  const [lowWidth, setLowWidth] = useState(false);
  useEffect(() => {
    window.onresize = () => {
      if (window) {
        if (window.outerWidth < 320) {
          setLowWidth(true);
        } else if (lowWidth) {
          setLowWidth(false);
        }
      }
    };
  }, [lowWidth]);
  if (lowWidth) {
    return (
      <div>
        <h1>Your device width is to low.</h1>
      </div>
    );
  }
  return (
    <>
      {Component.PageLayout ? (
        <Component.PageLayout>
          <Component {...pageProps} />
        </Component.PageLayout>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
}

export default MyApp;
