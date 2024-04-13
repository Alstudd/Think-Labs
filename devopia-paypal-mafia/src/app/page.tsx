import { redirect } from "next/navigation";
import { getAuthSession } from "@/lib/nextauth";
import Navbar from "@/components/main/Navbar";
import Hero from "@/components/main/Hero";
import "./home.css";
import Footer from "@/components/main/Footer";

export default async function Home() {
  const session = await getAuthSession();
  if (session?.user) {
    return redirect("/dashboard");
  }
  return (
    <div className="bg-[#030014]">
      <Navbar />
      <main className="h-full w-full">
        <div className="z-20 flex flex-col gap-20">
          <Hero />
        </div>
      </main>
      <Footer />
    </div>
  );
}