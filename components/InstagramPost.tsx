"use client";

import Script from "next/script";

type Props = {
  url: string;
};

export default function InstagramPost({ url }: { url: string }) {
  return (
    <>
      {/* 
        The script is loaded only when this component mounts.
        strategy="lazyOnload" ensures it doesn't block your page rendering.
      */}
      <Script src="https://www.instagram.com/embed.js" strategy="lazyOnload" />

      {/* 
        This blockquote is required by Instagram's embed system. 
        It will be automatically transformed by the script above into the actual post.
      */}
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{
          background: "#FFF",
          border: "0",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          margin: "0 auto",
          maxWidth: "540px",
          minWidth: "326px",
          padding: "0",
          width: "100%",
        }}
      />
    </>
  );
}
