import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "How to Get the Best Medicare Leads for Agents",
    date: "January 31, 2025",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
  },
  {
    title: "Level Up Your Business Insurance Sales: The Power of Quality Leads",
    date: "January 29, 2025",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
  },
  {
    title: "How to Generate High-Quality ACA Insurance Leads",
    date: "January 24, 2025",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&h=400&fit=crop",
  },
  {
    title: "Everything You Need to Know About Inbound Lead Generation",
    date: "January 22, 2025",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop",
  },
];

export default function BlogSection() {
  return (
    <section className="w-full py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Blog</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {blogPosts.map((post, idx) => (
            <Card
              key={idx}
              className="overflow-hidden hover-elevate transition-all duration-300 cursor-pointer group"
              data-testid={`card-blog-${idx}`}
              onClick={() => console.log(`Navigate to ${post.title}`)}
            >
              <div className="aspect-[3/2] overflow-hidden bg-muted">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 space-y-3">
                <p className="text-xs text-muted-foreground">{post.date}</p>
                <h3 className="text-lg font-semibold leading-tight line-clamp-2">
                  {post.title}
                </h3>
                <button
                  className="text-primary text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all"
                  data-testid={`button-read-post-${idx}`}
                >
                  Read Post
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="default"
            data-testid="button-read-blog"
            onClick={() => console.log('Read Blog clicked')}
          >
            Read Blog
          </Button>
        </div>
      </div>
    </section>
  );
}
