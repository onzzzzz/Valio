import Mango from "@/models/customerData";
import connectToMango from "@/utils/database";

export const GET = async (request, { params }) => {
    try {
        await connectToMango()
        let byCategory = params.category;

        const url = await Mango.find({ category : byCategory });
        if (!url) return new Response("Category Not Found", { status: 404 });
        
        return new Response(JSON.stringify(url), { status: 200 })

    } catch (error) {
        return new Response("Internal Server Error", { status: 500 });
    }
}