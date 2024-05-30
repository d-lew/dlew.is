import { FaGithub } from "react-icons/fa";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Logo, Project } from "@/lib/project";

const exampleProject: Project = {
  title: "dlew.is",
  description: "this website!",
  links: [{ logo: Logo.GITHUB, url: "https://github.com/d-lew/dlew.is" }],
};

export function ProjectCard() {
  const project: Project = exampleProject;

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>{project.title}</CardTitle>
          {project.description && (
            <CardDescription>{project.description}</CardDescription>
          )}
        </CardHeader>
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
