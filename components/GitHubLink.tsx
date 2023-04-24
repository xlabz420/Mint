import Image from "next/image";
import React from "react";

export default function ThirdwebGuideFooter() {
  const url = "https://github.com/thirdweb-example/nft-drop";

  return (
    
    
    <>
      <div
        style={{
         
        }}
        role="button"
        onClick={() => window.open(url, "_blank")}
      />

      <div
        style={{
       
        }}
      >
        <a href={url} target="_blank" rel="noopener noreferrer">
         
          
        </a>
      </div>
    </>
  );
}
