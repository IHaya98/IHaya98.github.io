import { HeroSection } from "@/components/sections/hero";
import { ProjectsSection } from "@/components/sections/projects";
import { BlogSection } from "@/components/sections/blog";
import { Button } from "@/components/ui/button";
import { Github, Mail, Linkedin } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <ProjectsSection />
      <BlogSection />
      
      {/* Contact Section */}
      <section className="container mx-auto px-4 py-20 border-t-2 border-zinc-900">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">お問い合わせ</h2>
          <p className="text-muted-foreground mb-8">
            新しいプロジェクトや機会についてお話しましょう
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" variant="outline" className="border-2">
              <Mail className="mr-2 h-4 w-4" />
              メールを送る
            </Button>
            <Button size="lg" variant="outline" className="border-2">
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </Button>
            <Button size="lg" variant="outline" className="border-2">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-zinc-900">
        <div className="container mx-auto px-4 py-8">
          <p className="text-center text-muted-foreground">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}