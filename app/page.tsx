import CEO from "@/components/common/CEO";
import ConsultantSec from "@/components/common/ConsultantSec";
import Hero from "@/components/common/Hero";
import LMS from "@/components/common/LMS";
import MDP from "@/components/common/MDP";
import TestimonialSec from "@/components/common/TestimonialSec";
import TrainingSection from "@/components/common/TrainingSection";

export default function Home() {
  return (
    <div className="flex flex-col justify-center font-sans">
      <main className="flex w-full flex-col justify-between bg-white">
        <Hero />
        <CEO />
        <ConsultantSec />
        <LMS />
        <MDP />
        <TestimonialSec />
        <TrainingSection />
      </main>
    </div>
  );
}
