"use client";

import App from "@/components/app";
import BlobsSection from "@/components/blobsSection";
import CarRentals from "@/components/carRentals";
import CTA from "@/components/cta";
import FlightDestination from "@/components/flightDestination";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import HotelDestination from "@/components/hotelDestination";
import NavBar from "@/components/navbar";
import RelatedArticles from "@/components/relatedarticles";
import Testimonials from "@/components/testimonials";
import VisitedPlaces from "@/components/visitedPlaces";
import { LuLoader2 } from "react-icons/lu";
import { motion, AnimatePresence } from "framer-motion";
import useLoading from "@/hooks/useLoading";

export default function HomePage() {
  const { loading } = useLoading();

  return (
    <main>
      {loading ? (
        <AnimatePresence>
          <motion.div
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.5,
              ease: "linear",
            }}
            className='bg-white h-screen w-full fixed z-20 flex items-center justify-center'
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <LuLoader2 size={75} color='#6CCACB' />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      ) : (
        <main>
          <Header />
          <NavBar />
          <Hero />
          <BlobsSection />
          <FlightDestination />
          <HotelDestination />
          <VisitedPlaces />
          <CarRentals />
          <Testimonials />
          <CTA />
          <RelatedArticles />
          <App />
          <Footer />
        </main>
      )}
    </main>
  );
}
