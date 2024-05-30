import { Separator } from "@/components/ui/separator";
import { Intro } from "./components/intro";
import { Projects } from "./components/projects";

export default function Home() {
  return (
    <main className="min-h-dvh p-2">
      <Intro />
      <Separator className="mb-2 mt-1" />
      <Projects />
    </main>
  );
}
