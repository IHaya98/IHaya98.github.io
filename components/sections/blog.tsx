import { Card } from "@/components/ui/card";
import { formatDate } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const BLOG_POSTS = [
  {
    id: 1,
    title: "モダンなWebフロントエンド開発の展望",
    excerpt: "最新のフレームワークとツールチェーンについての考察",
    date: "2024-03-20",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop"
  },
];

export function BlogSection() {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">ブログ</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <Link href={`/blog/${post.id}`} key={post.id}>
              <Card className="overflow-hidden group h-full hover:border-zinc-900 transition-colors">
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all"
                  />
                </div>
                <div className="p-6">
                  <time className="text-sm text-muted-foreground">
                    {formatDate(post.date)}
                  </time>
                  <h3 className="text-xl font-semibold mt-2 mb-3">{post.title}</h3>
                  <p className="text-muted-foreground text-sm">{post.excerpt}</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}