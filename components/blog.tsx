import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, User } from "lucide-react";

const blogPosts = [
  {
    title: "Latest AI Advancements in App Development",
    excerpt: "Explore how artificial intelligence is revolutionizing mobile app development and creating smarter user experiences.",
    author: "Alex Johnson",
    date: "Dec 15, 2024",
    category: "AI & ML",
    readTime: "5 min read",
    image: "/api/placeholder/400/200"
  },
  {
    title: "Building Scalable Web Applications with Next.js",
    excerpt: "Learn best practices for creating high-performance, scalable web applications using Next.js and modern development techniques.",
    author: "Sarah Chen",
    date: "Dec 10, 2024",
    category: "Web Development",
    readTime: "7 min read",
    image: "/api/placeholder/400/200"
  },
  {
    title: "The Future of Cross-Platform Mobile Development",
    excerpt: "Comparing React Native, Flutter, and other frameworks to help you choose the right technology for your next project.",
    author: "Mike Rodriguez",
    date: "Dec 5, 2024",
    category: "Mobile Development",
    readTime: "6 min read",
    image: "/api/placeholder/400/200"
  }
];

const Blog = () => {
  return (
    <div id="blog" className="w-full py-12 xs:py-20 px-6">
      <div className="max-w-screen-lg mx-auto">
        <div className="text-center mb-16">
          <Badge className="bg-primary/10 text-primary border-primary/20 rounded-full py-1">
            Blog & Insights
          </Badge>
          <h2 className="mt-6 text-3xl xs:text-4xl sm:text-5xl font-bold tracking-tight">
            Latest Insights & Updates
          </h2>
          <p className="mt-6 text-lg text-foreground/80 max-w-3xl mx-auto">
            Stay updated with the latest trends in technology, development best practices, 
            and insights from our team of experts.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-background border rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-muted flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-2xl font-bold text-primary">{post.title.charAt(0)}</span>
                  </div>
                  <p className="text-sm text-foreground/60">Article Image</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="text-xs">
                    {post.category}
                  </Badge>
                  <span className="text-xs text-foreground/60">{post.readTime}</span>
                </div>
                <h3 className="text-lg font-semibold mb-3 line-clamp-2">{post.title}</h3>
                <p className="text-foreground/80 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                
                <div className="flex items-center justify-between text-xs text-foreground/60 mb-4">
                  <div className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>{post.date}</span>
                  </div>
                </div>

                <Button variant="ghost" size="sm" className="w-full justify-between p-0 h-auto">
                  Read More
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline">
            View All Articles
          </Button>
        </div>

        <div className="mt-16 bg-muted/50 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest insights, tutorials, and industry updates 
            delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;