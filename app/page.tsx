import App from "@/components/app";
import BlobsSection from "@/components/blobsSection";
import CarRentals from "@/components/carRentals";
import CTA from "@/components/cta";
import FlightDestination from "@/components/flightDestination";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import HotelDestination from "@/components/hotelDestination";
import NavBar from "@/components/navbar";
import RelatedArticles from "@/components/relatedarticles";
import Testimonials from "@/components/testimonials";
import VisitedPlaces from "@/components/visitedPlaces";

export default function Home() {
  return (
    <main>
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
  );
}
