import React from "react";

type MessageProps = {
  nameProp?: string
  imageURLProp?: string
  actionProp?: string
}

type MessageType = {
  children: React.ReactNode;
  character?: "YoungMonk" | "Master" | "OtherMonk";
  direction?: "left" | "right";
};

type CharacterDetailsType = {
  [key in NonNullable<MessageType["character"]>]: {
    name: string;
    imageURL: string;
    action?: string;
  };
};

const characterDetails: CharacterDetailsType = {
  YoungMonk: {
    imageURL: "/characters/young-monk.jpg",
    name: "Tăng",
    action: "",
  },
  Master: {
    imageURL: "/characters/old-monk.jpg",
    name: "Sư",
    action: "nói",
  },
  OtherMonk: {
    imageURL: "/characters/other-monk.jpg",
    name: "Tăng khác",
    action: "",
  },
};

const Message = (
  {
    character = "Master",
    children,
    direction = "left",
  }: MessageType
) => {
  const { imageURL, name, action } = characterDetails[character];

  return (
    <div
      data-direction={direction}
      className="mt-10 mb-10 flex w-full gap-2 data-[direction=right]:flex-row-reverse"
    >
      <img
        className="not-prose size-12 flex-shrink-0 rounded-full bg-slate-300 object-cover"
        src={imageURL}
        alt={`${name} profile-pic`}
        height={50}
        width={50}
        loading="lazy"
      />

      <div className="overflow-hidden">
        <p
          data-direction={direction}
          className="not-prose m-0 text-sm text-gray-500 data-[direction=right]:text-right"
        >
          {name} {action ? ` ${action}` : ''}
        </p>
        <div className="w-full max-w-2xl rounded-md bg-primary/20 p-4 [&>*]:!mt-0">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Message;
