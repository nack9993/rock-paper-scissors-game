"use client";
import { useEffect } from "react";

const Card = (props) => {
  const cardType = {
    scissors: {
      icon: "/icon-scissors.svg",
      color: "from-[hsl(39_89%_49%)] to-[hsl(40_84%_53%)]",
    },
    rock: {
      icon: "/icon-rock.svg",
      color: "from-[hsl(349_71%_52%)] to-[hsl(349_70%_56%)]",
    },
    paper: {
      icon: "/icon-paper.svg",
      color: "from-[hsl(230_89%_62%)] to-[hsl(230_89%_65%)]",
    },
  };

  useEffect(() => {
    console.log(props);
  }, []);
  return (
    <div
      className={`w-[120px] h-[120px] rounded-full bg-gradient-to-b flex justify-center items-center shadow-[inset_0_-22px_0px_-17px_rgba(0,0,0,0.2)] ${
        cardType[props.type].color
      }`}
      onClick={() => props.setWeapon("paper")}
    >
      <div className="w-[90px] h-[90px] rounded-full bg-white  shadow-[inset_0_22px_0px_-15px_rgba(0,0,0,0.07)]  flex justify-center items-center">
        <img width={35} height={35} src={cardType[props.type].icon} />
      </div>
    </div>
  );
};

export default Card;
