"use client";
import { useState, useEffect } from "react";
import ActivityItem from "./UI/ActivityItem";

function Activity(isHoveringActivity) {

  const [allActivity , setAllActivity] = useState([]);

    const fetchActivity = async () => {
        const response = await fetch("http://localhost:3000/api");
        const data = await response.json();

        setAllActivity(data);
    };

    useEffect(() => {
        fetchActivity();
    }, []);

  return (
    <div className="h-full overflow-hidden hover:overflow-auto">
      <h1>Activity</h1>
      <ActivityItem allActivity={allActivity}/>
    </div>
  )
}

export default Activity