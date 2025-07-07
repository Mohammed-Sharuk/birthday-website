import React, { useState } from 'react';
import './Shayari.css';

const shayaris = [
  `"The Way You Are"
You're not just pretty — you're art, you're fire,
The kind of muse that sparks desire.
Each word you say, each laugh you throw,
Makes flowers bloom and rivers flow...`,

  `They all call your eyes a flaw to see,
But to me, they hold the universe's key...`,

  `Chehra tera hai ya roshni ka jadoo,
Sirf meri nazar ka dhoka hai ya sabhi hain tujh pe fida, kya pataa tu?
Har ada teri, dil mein utar jaati hai,
Chhoti si har baat bhi khushboo ban jaati hai.
Main girta jaa raha hoon teri har ek baat pe,
Ye mohabbat hai sirf meri, ya sabki — bas tujh se hi mulaqat pe....`,

  `Mil jae agar too, to kho de kuchh bhee qabool hai,
Tere pyaar mein har dard bhee manzoor hai, usool hai...`,

  `Maloom nahin hai khuda ko shukriya karna ya tujhe dikhane ko,
Ya tahajjud namaz karna tujhe paane ko, 
Ya dua karun tujhe bhool jaane ko, 
Har din tera yaad aa raha, mujhe abhi bhi vo strabismus (tiryak drishti) eyes of spark sone nahi de raha mujhe.
Kaise bataun, abhi bhi hai woh cockroach feeling mujhse,
Dil ke kone mein baithi hai, woh chhupke se.
Kabhi lagta hai hansi aa jaaye iss mazaak par,
Magar sach yeh hai, dil hai tere ehsaas ke azaad par.`
];

const Shayari = ({ next }) => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    if (index < shayaris.length - 1) {
      setIndex(index + 1);
    }
  };

  const isLast = index === shayaris.length - 1;

  return (
    <div className="shayari-container" onClick={!isLast ? handleNext : undefined}>
      <p key={index} className="shayari-text">
        {shayaris[index]}
      </p>

      {!isLast && (
        <p className="tap-message">Tap to see next 💫</p>
      )}

      {isLast && (
        <button className="question-button" onClick={next}>
          ❓ Someone wants to ask you a few questions — tap here if you're willing to answer 💖
        </button>
      )}
    </div>
  );
};

export default Shayari;
