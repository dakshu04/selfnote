import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import BuiltForSection from "@/components/landing/BuiltForSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fffdf9] mx-auto text-black">
      <Navbar />
      <Hero />
      <BuiltForSection />
    </div>
  );
}
