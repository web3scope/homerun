import Header from "@/components/Header";
import MobileHeader from "@/components/MobileHeader";
import MobileNavbar from "@/components/MobileNavbar";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="">

      <div className="sm:hidden">
        <MobileNavbar />
        <MobileHeader />
      </div>
      <div className="lg:block hidden">
        <Navbar />
        <Header />
      </div>
    </main >
  );
}
