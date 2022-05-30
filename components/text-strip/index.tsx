import React from "react";

type TextStrip = {
  image?: {
    src: string;
    alt: string;
  };
  text: string;
  justifyContent: "flex-start" | "center" | "flex-right";
};

const TextStrip: React.FC<TextStrip> = ({
  text,
  image,
  justifyContent = "center",
}) => {
  return (
    <div className="text-strip" style={{ justifyContent: justifyContent }}>
      {image && <img src={image.src} alt={image.alt} />}
      <h2 dangerouslySetInnerHTML={{__html: text}} />
    </div>
  );
};

export default TextStrip;
