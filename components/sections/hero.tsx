import { Button } from "@/components/ui/button";
import { Mail, ScrollText } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="container mx-auto px-4 pt-32 pb-20">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="text-primary">私は</span>
            <br />
            フルスタック開発者です
          </h1>
          <p className="text-lg text-muted-foreground max-w-[600px]">
            クリエイティブな問題解決とユーザー体験にフォーカスした
            モダンなウェブアプリケーションを開発しています。
          </p>
          <div className="flex gap-4">
            <Button variant="outline" className="border-2">
              <Mail className="mr-2 h-4 w-4" />
              お問い合わせ
            </Button>
            <Button variant="outline" className="border-2">
              <ScrollText className="mr-2 h-4 w-4" />
              履歴書を見る
            </Button>
          </div>
        </div>
        <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-4 border-zinc-900">
          <Image
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
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