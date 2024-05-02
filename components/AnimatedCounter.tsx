"use client";

import CountUp from "react-countup";

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div className="w-full">
      <CountUp
        decimals={0}
        separator="."
        decimal=","
        prefix="Rp "
        end={amount}
      />
    </div>
  );
};

export default AnimatedCounter;
