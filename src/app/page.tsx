// import Navbar from "../../components/Navbar";
import First from "../../components/First";
import Second from "../../components/Second";
import Third from "../../components/Third";
import Forth from "../../components/Forth";
import Nearexpire from "../../components/Nearexpire";
import Expired from "../../components/Expired";

export default function Home() {
  return (
    <main className="flex flex-col bg-white min-h-screen">
      {/* <Navbar /> */}
      <First />
      <Second />
      <Nearexpire />
      <Expired />
      <Third />
      <Forth />
    </main>
  );
}
