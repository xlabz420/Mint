import Image from "next/image";
import React from "react";

export default function ThirdwebGuideFooter() {
  const url = "https://github.com/thirdweb-example/nft-drop";

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "40px",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <a href="https://twitter.com/iamjosepepe">
            <img
              src="/0.png"
              alt="Team Member 1"
              style={{ width: "150px", height: "150px", borderRadius: "50%" }}
            />
          </a>
          <p style={{ color: "white"}}>Jose` Pepe (artist)</p>
        </div>
        <div style={{ textAlign: "center", marginLeft: "40px", marginRight: "40px" }}>
          <a href="https://twitter.com/NotPeperonii">
            <img
              src="/1.png"
              alt="Team Member 2"
              style={{ width: "150px", height: "150px", borderRadius: "50%" }}
            />
          </a>
          <p style={{ color: "white"}}>Peperoni (manager)</p>
        </div>
        <div style={{ textAlign: "center" }}>
          <a href="https://twitter.com/theone1o2">
            <img
              src="/7.png"
              alt="Team Member 3"
              style={{ width: "150px", height: "150px", borderRadius: "50%" }}
            />
          </a>
          <p style={{ color: "white"}}>Mr.Pepe (brains)</p>
        </div>
      </div>

      <div
        style={{
          textAlign: "center",
          marginTop: "20px",
        }}
        role="button"
        onClick={() => window.open(url, "_blank")}
      />

      <div
        style={{
          textAlign: "center",
          marginTop: "10px",
        }}
      >
        <a href={url} target="_blank" rel="noopener noreferrer">

        </a>
      </div>
    </>
  );
}
