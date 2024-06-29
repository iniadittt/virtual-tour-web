import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import Navbar from "@/components/Navbar";
import Card from "@/components/Card";
import Hero from "@/components/Hero";
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className={inter.className}>
      <Navbar />
      <Hero />
      <div className="max-w-max mx-auto grid md:grid-cols-2 grid-cols-1 gap-4 p-4 md:gap-8 md:p-8">
        <Card
          image="/images/halaman.png"
          alt="Seputaran Gedung"
          title="Seputaran Gedung"
          href="https://www.theasys.io/viewer/X0UbX9Cyw7Cjs2cMtlrkIJoxhnpRW3/"
        />
        <Card
          image="/images/lobby.png"
          alt="Lobby FIKTI"
          title="Lobby FIKTI"
          href="https://www.theasys.io/viewer/Ew7qIJwq0OMTMxcBo1M97xVkVaus72/"
        />
        <Card
          image="/images/lantai6.png"
          alt="Lantai 6"
          title="Lantai 6"
          href="https://www.theasys.io/viewer/sb6Ct21ZKIrnVmZN3gm0Sn3XA5nnql/"
        />
        <Card
          image="/images/lantai7.png"
          alt="Lantai 7"
          title="Lantai 7"
          href="https://www.theasys.io/viewer/FxmXatALFVDHgYWfQUz8bkXrvygtT6/"
        />
      </div>
      <Footer/>
    </main>
  );
}
