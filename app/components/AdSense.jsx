"use client"
import React, { useEffect } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

const AdSense = () => {
  const router = useRouter();

  const pathname = usePathname();
  const searchParams = useSearchParams();

  if (process.env.NODE_ENV == "development") {
    return <></>;
  }

  useEffect(() => {
    const url = `${pathname}?${searchParams}`;
    const scriptElement = document.querySelector(
      'script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7865295241961522"]'
    );
    const handleScriptLoad = () => {
      try {
        if (window.adsbyGoogle) {
          console.log("====================================");
          console.log("pushing ads");
          console.log("====================================");
          adsbyGoogle.push({});
        } else {
          scriptElement?.addEventListener("load", handleScriptLoad);
        }
      } catch (error) {
        console.log("====================================");
        console.log("error in adsense", error);
        console.log("====================================");
      }
    };
    handleScriptLoad();

    return () => {
      if (scriptElement) {
        scriptElement?.removeEventListener("load", handleScriptLoad);
      }
    };
  }, [pathname, searchParams]);

  return (
    <div style={{overflow:"hidden", margin: "5px"}}>
        Google Ad block
      <ins
        class="adsbygoogle"
        style="display:block"
        data-ad-client="ca-pub-7865295241961522"
        data-ad-slot="3480790797"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default AdSense;
