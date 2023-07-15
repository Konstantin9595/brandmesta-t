import BrandSection from "./components/BrandSection";
import ServiceSection from "./components/ServiceSection";

export default function Home() {
  return (
    <>
      <main className="content">
        <BrandSection />
        <ServiceSection />
      </main>
    </>
  );
}
