"use client"

import Activity from "@/components/Activity";
import Bonus from "@/components/Bonus";
import Footer from "@/components/Footer";
import Map from "@/components/Map";
import Navbar from "@/components/Navbar";
import Payments from "@/components/Payments";
import Stats from "@/components/Stats";
import DivOne from "@/components/DivOne";
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
      <ul className="grid grid-cols-8 grid-rows-2 grid-flow-row">
      <li className={`rounded-lg bg-yellow-500
          ${isHoveringActivity?"col-span-4 row-span-2":
            (isHoveringMap?"col-span-1 row-span-2":"col-span-2 row-span-2")}`}>
            <div className="h-24"></div>
        </li>
        <li className={`rounded-lg bg-orange-600
          ${isHoveringFooter?"col-span-1":
          (isHoveringActivity?"col-span-2":
            (isHoveringStats?"col-span-4 row-span-2":
              (isHoveringMap?"col-span-1":
              (isHoveringBonus?"col-span-2":"col-span-4"))))}`}>
              <div className="h-24"></div>
        </li>
        <li className={`rounded-lg bg-blue-600
          ${isHoveringFooter?"col-span-1":
            (isHoveringStats?"col-span-1":
              (isHoveringBonus?"col-span-4":"col-span-2"))}`}>
            <div className="h-24"></div>
        </li>
        <li className={`rounded-lg bg-red-600
          ${isHoveringFooter?"col-span-1":
            (isHoveringStats?"col-span-1":
              (isHoveringMap?"col-span-1":
              (isHoveringPayments?"col-span-4":"col-span-2")))}`}>
            <div className="h-24"></div>
        </li>
        <li className={`rounded-lg bg-green-600
          ${isHoveringFooter?"col-span-1":
            (isHoveringActivity?"col-span-1":
              (isHoveringStats?"col-span-1":
                (isHoveringMap?"col-span-4 row-span-2":
                (isHoveringPayments?"col-span-1":"col-span-2"))))}`}>
            <div className="h-24"></div>
        </li>
        <li className={`rounded-lg bg-green-700
          ${isHoveringFooter?"col-span-4 row-span-2":
            (isHoveringActivity?"col-span-1":
              (isHoveringStats?"col-span-1":
                (isHoveringPayments?"col-span-1":"col-span-2")))}`}>
            <div className="h-24"></div>
        </li>
      </ul>
















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
            c
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

      {/* Nina code */}
      
      <div className="w-full flex-row flex justify-between " >

        <div className=" flex bg-yellow-400">
          <Activity/>
        </div>

        <div className="">
          <div id="uppersecond" className=" flex">
            <Stats/>
            <div 
            className={`flex bg-blue-500
              ${isHoveringFooter?"":"hidden"}
            `}>
              <Bonus/>
            </div>
            
          </div>
          <div id="lowersecond">
            <Payments/>
            <div 
            className={`flex bg-green-600
              ${isHoveringMap?"":"hidden"}
            `}>
              <DivOne/>
            </div>
          </div>
        </div>
        <div id="thirdcolumn" className="">
             <div
             className={`flex bg-green-600
              ${isHoveringMap?"":"hidden"}
            `}>
              <Map/>
             </div> 
        </div>
        <div id="fourthcolumn" className="">
              <Bonus/>
              <Footer/>
        </div>
        
     
      
      


      </div>

    </main>
  );
}
