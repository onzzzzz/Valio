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
      </div>

      {/* Nina code */}

      <div id="parent" className="grid grid-cols-8 grid-rows-2 h-72 gap-3">
        <motion.div 
          onMouseEnter={() => setIsHoveringActivity(true)} 
          onMouseLeave={() => setIsHoveringActivity(false)} 
          id="columnone" 
          className={`
            row-span-2 bg-pink-400 `}
          layout
          transition={{ duration: 0.3 }}
          style={{ gridColumn: isHoveringActivity ? "span 4" : ( isHoveringMap ? "span 1": "span 2" )}}>
          
        </motion.div>

        <motion.div 
          id="columntwo" 
          className={` grid grid-cols-subgrid gap-y-9  row-span-2 `} 
          layout
          transition={{ duration: 0.3 }}
          style={{ gridColumn: isHoveringActivity ? "span 2" : "span 4" }}>

          {/* ${isHoveringMap?"col-span-5 ": 
            (isHoveringFooter?"col-span-1":
              (isHoveringBonus?"col-span-2":
                (isHoveringStats?"col-span-5":
                  (isHoveringActivity?"col-span-2":"col-span-4")
                )
              )
            )
          } */}

          <motion.div 
            onMouseEnter={() => setIsHoveringStats(true)} 
            onMouseLeave={() => setIsHoveringStats(false)} 
            className={` bg-purple-500 `}
            >
              {/* ${isHoveringMap?"col-span-1 ":
               (isHoveringStats?"row-span-2 col-span-4":"col-span-4 ")
             } */}
            stats 
          </motion.div>

          <motion.div 
            onMouseEnter={() => setIsHoveringPayments(true)} 
            onMouseLeave={() => setIsHoveringPayments(false)} 
            className={` bg-red-500 col-start-1 row-start-2 `}
            layout
            transition={{ duration: 0.3 }}
            style={{ gridColumn: isHoveringActivity ? "span 1" : "span 2" }}>
              {/* ${isHoveringMap?" col-span-1":
              (isHoveringPayments?"col-span-4":
                (isHoveringStats?"col-start-5 col-span-1":
                  (isHoveringActivity?"col-span-1":" col-span-2")
                )
              )
            } */}
              
              payment</motion.div>

          <motion.div 
          onMouseEnter={() => setIsHoveringMap(true)} 
          onMouseLeave={() => setIsHoveringMap(false)} 
          className={`bg-gray-500
          
          `}
          layout
          transition={{ duration: 0.3 }}
          style={{ 
            gridColumn: isHoveringMap ? "span 4" : ( isHoveringStats ? "span 1": "span 2"),
            gridColumnStart : isHoveringMap ? "2" : ( isHoveringStats ? "5": "3"),
            gridRowStart : isHoveringMap ? "1" : "2",  
            gridRow : isHoveringMap ? "span 2" : "span 1",  
            display: isHoveringFooter ? "none" : ( isHoveringBonus ? "none" : ( isHoveringPayments ? "none" : "" )) 
          }}>
          map
          </motion.div>
        </motion.div>

        <motion.div id="columnthree" className={`
          grid grid-cols-subgrid   row-span-2 gap-y-9
          
          `}> 
          {/* ${isHoveringFooter?"col-span-5":
            (isHoveringBonus?"col-span-4":
              (isHoveringStats?"col-span-1":"col-span-2")
            )
           } */}

          <motion.div 
            onMouseEnter={() => setIsHoveringBonus(true)} 
            onMouseLeave={() => setIsHoveringBonus(false)} 
          className={`
             row-span-1  bg-green-500
           
            `}>
               {/* ${isHoveringFooter?"col-span-1":
              (isHoveringBonus?"col-span-4":"col-span-2")
            } */}
              
              bonus
          </motion.div>
          
          <motion.div className={`
            row-span-1  bg-pink-300
            
            `}>
              {/* ${isHoveringFooter?"col-span-1":
              (isHoveringBonus?"col-span-2":
                (isHoveringPayments?"":"hidden")
              )
            } */}
              
              map2
          </motion.div>

          <motion.div 
            onMouseEnter={() => setIsHoveringFooter(true)} 
            onMouseLeave={() => setIsHoveringFooter(false)} 
          className={`
           bg-orange-200
          
          `}
          // ${isHoveringFooter?"col-span-4 row-span-2 row-start-1 col-start-2":
          //   (isHoveringPayments?"col-span-1":"col-span-2 row-span-1")
          // }
          
          >footer</motion.div>
          
        </motion.div>
      </div>
      
      {/* <div className="w-full grid grid-flow-col grid-cols-4  h-screen " >

        <div id="firstcolumn" 
          onMouseEnter={() => setIsHoveringActivity(true)} 
          onMouseLeave={() => setIsHoveringActivity(false)} 
          
          className="   shrink-1 bg-yellow-400">
            <Activity/>
        </div>

        <div id="secondcolumn" className="">
          <div id="uppersecond" className="   bg-orange-400">
            <Stats/>
            <div 
            className={`flex bg-blue-500
              ${isHoveringFooter?"":"hidden"}
            `}>
              <Bonus/>
            </div>
            
          </div>
          <div id="lowersecond" className="row-span-2 bg-red-500  ">
            <Payments/>
            <div 
            className={`flex bg-green-600 
              ${isHoveringMap?"hidden":
                (isHoveringPayments?"hidden":
                  (isHoveringBonus?"hidden":"w-1/2")
                )}

            `}>
              <Map/>
            </div>
          </div>
        </div>
        <div id="thirdcolumn" 
             className={`flex bg-green-600 w-1/2
              ${isHoveringMap?"":"hidden"}
            `}>
              <Map/>
             
        </div>
        <div id="fourthgrid" className= {` grid grid-cols-subgrid grid-flow-row col-end-4 bg-pink-400
          ${isHoveringBonus?"grid-col-2":"grid-col-1"}
          `} >
          <div 
            className={` bg-blue-300 
              ${isHoveringFooter?"hidden":
                (isHoveringBonus?"col-span-2":"col-span-1")
              }
            `}>
              <Bonus/>
            </div>

            <div className=" hover:h-full bg-orange-500">
            <div className={`
              ${isHoveringPayments?"":
                (isHoveringBonus?"":"hidden")}
              `}>
              <Map/>
            </div>
            <div 

              className="  "
               onMouseEnter={() => setIsHoveringFooter(true)} 
               onMouseLeave={() => setIsHoveringFooter(false)} 

              //  className={`
              //   ${isHoveringFooter?""}
              //   `}
              >
                 <Footer/>
            </div>
           
          </div>
        </div>
        {/* <div id="fourthcolumn" className="bg-green-800 w-1/4  h-full justify-between ">
        
          

          
          
        </div> */}
        
      

    </main>
  );
}
