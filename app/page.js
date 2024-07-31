import Activity from "@/components/Activity";
import Bonus from "@/components/Bonus";
import Footer from "@/components/Footer";
import Map from "@/components/Map";
import Navbar from "@/components/Navbar";
import Payments from "@/components/Payments";
import Stats from "@/components/Stats";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar/>
      <>
      <Activity/>
      <Stats/>
      <Bonus/>
      <Payments/>
      <Map/>
      <Footer/>
      </>
    </main>
  );
}
