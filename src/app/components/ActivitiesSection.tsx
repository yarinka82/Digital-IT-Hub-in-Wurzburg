import { Activities, activities } from "@/data/activities";
import Card from "./common/Card";
import Container from "./common/Container";
import InfoMessage from "./InfoMessage";
import { events } from "@/data/events";
import { NewEventsProp } from "./NewEvents";

export default function ActivitiesSection() {
  const definitionMessage = (activity: Activities) => {
    if (activity.title === "Workshops")
      return (events as NewEventsProp[]).filter((e) => e.type === "workshop");
    if (activity.title === "Projecte")
      return (events as NewEventsProp[]).filter((e) => e.type === "project");
    if (activity.title === "Events & Networking")
      return (events as NewEventsProp[]).filter((e) => e.type === "event");
    return [];
  };

  return (
    <section id="activity">
      <Container className="flex justify-center items-center flex-col gap-8">
        <h2 className="text-[32px] text-blue-400 semibold md:text-5xl">
          Unsere Aktivitäten
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 items-stretch max-w-(--breakpoint-xl) mx-auto">
          {activities.map((a) => {
            const currentEvents = definitionMessage(a);
            return (
              <Card
                key={a.id}
                cardInfo={a}
                className="bg-[#111] p-6 h-full rounded-xl transition duration-200 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#00aaff]/30"
              >
                {currentEvents.length > 0 && (
                  <InfoMessage events={currentEvents} />
                )}
              </Card>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
