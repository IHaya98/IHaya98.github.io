import { Button } from "@/components/ui/button";
import { Mail, ScrollText } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="container mx-auto px-4 pt-32 pb-20">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="text-primary">Portfolio</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-[600px]">
            不定期更新。。。
          </p>
          {/* <div className="flex gap-4">
            <Button variant="outline" className="border-2">
              <Mail className="mr-2 h-4 w-4" />
              お問い合わせ
            </Button>
            <Button variant="outline" className="border-2">
              <ScrollText className="mr-2 h-4 w-4" />
              履歴書を見る
            </Button>
          </div> */}
        </div>
        <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-4 border-zinc-900">
          <Image
            src="https://picsum.photos/800"
            alt="Profile"
            fill
            className="object-cover grayscale"
            priority
          />
        </div>
      </div>
    </section>
  );
}
