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
import { motion } from "framer-motion";
import { LayoutGroup } from "framer-motion"
import Image from 'next/image';


export default function Home() {

  const [isHoveringActivity, setIsHoveringActivity] = useState(false);
  const [isHoveringStats, setIsHoveringStats] = useState(false);
  const [isHoveringBonus, setIsHoveringBonus] = useState(false);
  const [isHoveringPayments, setIsHoveringPayments] = useState(false);
  const [isHoveringMap, setIsHoveringMap] = useState(false);
  const [isHoveringFooter, setIsHoveringFooter] = useState(false);
  const time = 1 ;

  return (
    <main 
    className=" h-svh w-svw flex flex-col justify-center items-center bg-light-green-background "
    >
      <Navbar/>

      {/* <ul className="grid grid-cols-8 grid-rows-2 grid-flow-row">
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
      </ul> */}

      



{/* 
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
            // onMouseEnter={() => setIsHoveringFooter(true)} 
            // onMouseLeave={() => setIsHoveringFooter(false)} 
            className={`flex bg-green-600
              ${isHoveringActivity?"w-1/4":(isHoveringPayments?"w-1/6":"w-1/3")}
            `}>
            <Footer/>
          </div>
        </div>
      </div> */}

      {/* Nina code */}


      
      <motion.div id="parent" 
        layout layoutRoot
        className="grid grid-cols-8 grid-rows-2 h-5/6 w-5/6 gap-2 "
      >
        <motion.div 
          onMouseEnter={() => setIsHoveringActivity(true)} 
          onMouseLeave={() => setIsHoveringActivity(false)} 
          id="activity" 
          className="bento" 
          layout
          transition={{ duration: time}}
          style={{
            gridColumnStart :  "1",  
            gridColumnEnd : isHoveringMap ? "2" : "3" ,
            gridColumn: isHoveringActivity ? "span 4" : ( isHoveringMap ? "span 1": "span 2" ),
            gridRow : "span 2",
          }}>
          <Activity/>
        </motion.div>

        <motion.div 
          className="bento" 
          layout
          transition={{ duration: time}}
          style={{
            // gridColumn : "span 4" ,
            
            gridColumnStart : isHoveringActivity ? "5" :  ( isHoveringMap ? "2" : "3"),
            gridColumnEnd : isHoveringMap ? "3" : ( isHoveringBonus ? "5" : ( isHoveringFooter ? "4" : "7")) ,
            gridRow : isHoveringStats ? "span 2" : "span 1",
            
          }}
          onMouseEnter={() => setIsHoveringStats(true)} 
          onMouseLeave={() => setIsHoveringStats(false)} 
          >
            
          <Stats/>
        </motion.div>

          <motion.div 
            onMouseEnter={() => setIsHoveringPayments(true)} 
            onMouseLeave={() => setIsHoveringPayments(false)} 
            className="bento" 
            layout
            transition={{ duration: time }}
            style={{ 
              
              gridColumnStart : isHoveringPayments ? "3" : ( isHoveringActivity ? "5" : ( isHoveringStats ? "7" : ( isHoveringMap ? "2" : "3") )) ,
              gridColumnEnd : isHoveringPayments ? "7" : ( isHoveringActivity ? "7" : ( isHoveringStats ? "7" : ( isHoveringMap ? "3" : (isHoveringFooter ? "3" : "5")) )) , 
              gridRowStart :  "2" ,
             }}>
             <Payments isHoveringPayments={isHoveringPayments}/>
          </motion.div>

          <motion.div 
          onMouseEnter={() => setIsHoveringMap(true)} 
          onMouseLeave={() => setIsHoveringMap(false)} 
          className="bento center" 
          layout
          transition={{ duration: time }}
          style={{ 
            
            gridColumnStart : isHoveringMap ? "3" : ( isHoveringActivity ? "7" : ( isHoveringStats ? "7" : ( isHoveringPayments ? "7" : (isHoveringFooter ? "4" : "5")))),
            gridColumnEnd : isHoveringMap ? "7" : ( isHoveringActivity ? "8" : ( isHoveringStats ? "7" : ( isHoveringPayments ? "8" : ( isHoveringFooter ? "5" : "7")))),  
            gridRowStart : isHoveringMap ? "1" : ( isHoveringStats ? "1" : "2"),
            gridRowEnd : isHoveringMap ? "3" : ( isHoveringStats ? "1" : "2"),
            
          }}>
          <Map />
          </motion.div>
       

        

          <motion.div 
            onMouseEnter={() => setIsHoveringBonus(true)} 
            onMouseLeave={() => setIsHoveringBonus(false)} 
            className="bento center" 
               
          layout
          transition={{ duration: time }}
          style={{ 
            gridColumnStart: isHoveringBonus ? "5" : ( isHoveringStats ? "8" : ( isHoveringFooter ? "4": "7")) ,
            gridColumnEnd :   isHoveringFooter ? "5": "9" ,
            
            
          }}  >
            <Bonus />
          </motion.div>
          
          

          <motion.div 
            onMouseEnter={() => setIsHoveringFooter(true)} 
            onMouseLeave={() => setIsHoveringFooter(false)} 
            className="bento" 
          
          layout
          transition={{ duration: time}}
          style={{ 
            gridColumnStart: isHoveringFooter ? "5" : ( isHoveringPayments ? "8" : ( isHoveringActivity ? "8": (isHoveringStats ? "8": "7"))) ,
            gridColumnEnd :   isHoveringFooter ? "9": "9" ,
            gridRowStart : isHoveringFooter ? "1" : "2" ,
            gridRowEnd : isHoveringMap ? "3" : "3",
            
            
          }}
          >footer
          </motion.div>
          
        
      </motion.div>
      
      
      
        
      

    </main>
  );
}
