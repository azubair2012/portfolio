"use client";

import React from "react";
import CountUp from "react-countup";

const Counter = (props) => {
  return (
    <div className="text-center flex lg:gap-[150px] gap-10">
      <div>
        <CountUp
          start={0}
          end={40}
          duration={6}
          suffix="+"
          className={props.cclass}
        />
        <p className={props.pclass}>Satisfied Clients</p>
      </div>
      <div>
        <CountUp
          start={0}
          end={70}
          duration={7}
          suffix="+"
          className={props.cclass}
        />
        <p className={props.pclass}>Project Completed</p>
      </div>
      <div>
        <CountUp
          start={0}
          end={5}
          duration={5}
          suffix="+"
          className={props.cclass}
        />
        <p className={props.pclass}>Years of Experience</p>
      </div>
    </div>
  );
};

export default Counter;
