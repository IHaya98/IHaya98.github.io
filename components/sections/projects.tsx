import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Github from "@/components/ui/icons/github";
const PROJECTS = [
  {
    id: 1,
    title: "家計簿作成",
    description: "Next.jsで家計簿作成",
    image: "./image/budget-alt.svg",
    technologies: ["React", "Next.js", "Typescript"],
    githubUrl: "https://github.com/IHaya98/budget-book",
    projectUrl: "https://budget-book-six.vercel.app",
  },
];

export function ProjectsSection() {
  return (
    <section className="container mx-auto px-4 py-20 bg-zinc-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">プロジェクト</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden group border-2 hover:border-zinc-900 transition-colors"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={200}
                  height={200}
                  className="object-cover mx-auto"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-2"
                      onClick={() => {
                        window.location.href = project.githubUrl;
                      }}
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-2"
                      onClick={() => {
                        window.location.href = project.projectUrl;
                      }}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs border-2 border-zinc-900 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
