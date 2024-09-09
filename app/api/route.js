import Mango from "@/models/customerData";
import connectToMango from "@/utils/database";

export const GET = async () => {
    try {
        await connectToMango();
        const activityData = await Mango.find()
        
        return new Response(JSON.stringify(activityData), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch movies", { status: 500 })
    }
} 