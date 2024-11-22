import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Github from "@/components/ui/icons/github";
const PROJECTS = [
  {
    id: 1,
    title: "AI駆動型分析プラットフォーム",
    description: "機械学習を活用したデータ分析ソリューション",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop",
    technologies: ["React", "Python", "TensorFlow"],
    githubUrl: "",
  },
  {
    id: 2,
    title: "次世代CMS システム",
    description: "高度にカスタマイズ可能なコンテンツ管理システム",
    image:
      "https://images.unsplash.com/photo-1555066932-e78dd8fb77bb?q=80&w=1000&auto=format&fit=crop",
    technologies: ["Next.js", "GraphQL", "PostgreSQL"],
    githubUrl: "",
  },
  {
    id: 3,
    title: "IoTデバイス管理ダッシュボード",
    description: "リアルタイムモニタリングと制御インターフェース",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop",
    technologies: ["Vue.js", "Node.js", "MongoDB"],
    githubUrl: "",
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
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all"
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
                    <Button variant="outline" size="icon" className="border-2">
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
