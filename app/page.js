"use client"

import Activity from "@/components/Activity";
import Bonus from "@/components/Bonus";
import Footer from "@/components/Footer";
import Map from "@/components/Map";
import Navbar from "@/components/Navbar";
import Payments from "@/components/Payments";
import Stats from "@/components/Stats";
import { useState } from "react";


export default function Home() {

  const [isHoveringActivity, setIsHoveringActivity] = useState(false);
  const [isHoveringStats, setIsHoveringStats] = useState(false);
  const [isHoveringBonus, setIsHoveringBonus] = useState(false);
  const [isHoveringPayments, setIsHoveringPayments] = useState(false);
  const [isHoveringMap, setIsHoveringMap] = useState(false);
  const [isHoveringFooter, setIsHoveringFooter] = useState(false);

  return (
    <main >
      <Navbar/>
      <div className= " h-96 bg-red-600 flex">
        <div 
          onMouseEnter={() => setIsHoveringActivity(true)} 
          onMouseLeave={() => setIsHoveringActivity(false)} 
          className={`flex bg-yellow-400
            ${isHoveringActivity?"w-1/2":"w-1/4"} 
            `}
        >
          <Activity/>
        </div>
        <div className={`flex flex-wrap bg-blue-600
          ${isHoveringActivity?"w-1/2":"w-3/4"}`}>
          <div 
            onMouseEnter={() => setIsHoveringStats(true)} 
            onMouseLeave={() => setIsHoveringStats(false)} 
            className={`flex bg-orange-500
              ${isHoveringActivity?"w-1/2":(isHoveringBonus?"w-1/3":"w-2/3")}
            `}
          >
            <Stats />
          </div>
          <div 
            onMouseEnter={() => setIsHoveringBonus(true)} 
            onMouseLeave={() => setIsHoveringBonus(false)} 
            className={`flex bg-blue-500
              ${isHoveringActivity?"w-1/2":(isHoveringBonus?"w-2/3":"w-1/3")}
              `}
          >
            <Bonus/>
          </div>

          <div 
            onMouseEnter={() => setIsHoveringPayments(true)} 
            onMouseLeave={() => setIsHoveringPayments(false)} 
            className={`flex bg-red-500
              ${isHoveringActivity?"w-1/2":(isHoveringPayments?"w-2/3":"w-1/3")}
              `}
          >
            <Payments/>
          </div>

          <div 
            onMouseEnter={() => setIsHoveringMap(true)} 
            onMouseLeave={() => setIsHoveringMap(false)} 
            className={`flex bg-green-400
              ${isHoveringActivity?"w-1/4":(isHoveringPayments?"w-1/6":"w-1/3")}
              `}
          >
            <Map/>
          </div>

          <div 
            onMouseEnter={() => setIsHoveringFooter(true)} 
            onMouseLeave={() => setIsHoveringFooter(false)} 
            className={`flex bg-green-600
              ${isHoveringActivity?"w-1/4":(isHoveringPayments?"w-1/6":"w-1/3")}
            `}>
            <Footer/>
          </div>
        </div>
      </div>
    </main>
  );
}
