"use client";
import { useState, useEffect } from "react";
import ActivityItem from "./UI/ActivityItem";

function Activity(isHoveringActivity) {

  const [allActivity , setAllActivity] = useState([]);

    const fetchActivity = async () => {
        const response = await fetch("/api");
        const data = await response.json();

        setAllActivity(data);
    };

    useEffect(() => {
        fetchActivity();
    }, []);

  return (
    <div className="h-full overflow-hidden hover:overflow-auto">
      <h1 className="flex justify-center font-lora text-2xl text-dark-green pt-1 ">Activity</h1>
      <ActivityItem allActivity={allActivity}/>
    </div>
  )
}

export default Activity