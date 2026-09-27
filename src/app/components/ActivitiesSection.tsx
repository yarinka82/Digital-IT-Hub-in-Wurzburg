import { activities } from "@/data/activities";
import Card from "./common/Card";
import Container from "./common/Container";


export default function ActivitiesSection() {
  return (
    <section id="activity">
      <Container className="flex justify-center items-center flex-col gap-8">
        <h2 className="text-[32px] text-blue-400 semibold md:text-5xl">
          Unsere Aktivitäten
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 max-w-(--breakpoint-xl) mx-auto">
          {activities.map((a) => (
            <Card
              key={a.id}
              cardInfo={a}
              className="bg-[#111] p-6 rounded-xl transition duration-200 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#00aaff]/30"
            />
          ))}
        </ul>
      </Container>
    </section>
  );
}
