import { FaGithub } from "react-icons/fa";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Logo, Project } from "@/lib/project";
import { TrafficCone } from "lucide-react";

const exampleProject: Project = {
  title: "dlew.is",
  description: "this website!",
  links: [{ logo: Logo.GITHUB, url: "https://github.com/d-lew/dlew.is" }],
  isCurrent: true,
};

export function ProjectCard() {
  const project: Project = exampleProject;

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div>{project.title}</div>
            <div className="flex items-center ">
              <CardDescription>Work in progress</CardDescription>
              <TrafficCone className="h-4 w-4 text-warning ml-1" />
            </div>
          </CardTitle>
        </CardHeader>
        {project.description && (
          <CardContent>{project.description}</CardContent>
        )}
        {project.links && (
          <CardFooter>
            {project.links?.map((link, index) => (
              <div key={index}>
                <a href={link.url}>{mapLogoToIcon(link.logo)}</a>
              </div>
            ))}
          </CardFooter>
        )}
      </Card>
    </div>
  );
}

function mapLogoToIcon(logo: Logo): JSX.Element {
  switch (logo) {
    case Logo.GITHUB:
      return <FaGithub />;
  }
}
