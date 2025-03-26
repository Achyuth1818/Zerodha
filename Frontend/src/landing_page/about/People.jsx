import React from "react";
import Person from "./Person";

const People = () => {
  return (
    <>
      <div>
        <p className="text-center text-4xl md:text-5xl text-[#333333] my-8">
          People
        </p>
      </div>
      <div className="md:grid grid-cols-3 grid-flow-row gap-20 md:mx-[10%]">
        <Person
          imageurl="./public/nithin-kamath.png"
          name="Nikhil Kamath"
          work="CEO, Founder"
          summary="Nikhil is an astute and experienced investor, and he heads financial planning at Zerodha. An avid reader, he always appreciates a good game of chess."
        />
        <Person
          imageurl="./public/kailash.jpg"
          name="Dr. Kailash Nadh"
          work="CTO"
          summary="Kailash has a PhD in Artificial Intelligence & Computational Linguistics, and is the brain behind all our technology and products. He has been a developer from his adolescence and continues to write code every day."
        />
        <Person
          imageurl="./public/Venu.jpg"
          name="Venu Madhav"
          work="COO"
          summary="Venu is the backbone of Zerodha taking care of operations and ensuring that we are compliant to rules and regulations. He has over a dozen certifications in financial markets and is also proficient in technical analysis. Workouts, cycling, and adventuring is what he does outside of Zerodha."
        />
        <Person
          imageurl="./public/Seema-patil-zerodha-m.jpg"
          name="Seema Patil"
          work="Director"
          summary="Seema who has lead the quality team since the beginning of Zerodha, is now a director. She is an extremely disciplined fitness enthusiast."
        />

        <Person
          imageurl="public/Austin.jpg "
          name="Austin"
          work="Director Strategy"
          summary="Austin is a successful self-made entrepreneur from Singapore. His area of specialty revolves around helping organisations including grow by optimizing revenue streams and creating growth strategies. He is a boxing enthusiast and loves collecting exquisite watches."
        />
        <Person
          imageurl="public/Karthik.jpg "
          name="Karthik Rangappa"
          work="Chief of Education"
          summary="Karthik Guru Rangappa single handledly wrote Varsity, Zerodha's massive educational program. He heads investor education initiatives at Zerodha and loves stock markets, classic rock, single malts, and photography."
        />
        <Person
          imageurl=" ./public/zerodha.png  "
          name="Hanan Delvi"
          work="CCO"
          summary="We take pride in the way we support our clients, and Hanan is responsible for this with his never ending flow of energy. He is the man behind many of our support initiatives that have helped us stay ahead of the game. A free thinker, Hanan can be seen posing as one in his free time."
        />
      </div>
    </>
  );
};

export default People;
