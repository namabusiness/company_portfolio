import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Mobile App",
    client: "TechCorp Inc.",
    description: "A full-featured mobile shopping app with AI-powered recommendations and real-time inventory management.",
    image: "/api/placeholder/400/250",
    technologies: ["React Native", "Node.js", "MongoDB", "AI/ML"],
    results: "Increased user engagement by 40%",
    category: "Mobile App"
  },
  {
    title: "Healthcare Management System",
    client: "MedTech Solutions",
    description: "Comprehensive web platform for patient management, appointment scheduling, and telemedicine integration.",
    image: "/api/placeholder/400/250",
    technologies: ["Next.js", "PostgreSQL", "WebRTC", "AWS"],
    results: "Reduced administrative overhead by 60%",
    category: "Web Development"
  },
  {
    title: "Predictive Analytics Dashboard",
    client: "DataFlow Analytics",
    description: "AI-powered dashboard for business intelligence with real-time data visualization and predictive modeling.",
    image: "/api/placeholder/400/250",
    technologies: ["Python", "TensorFlow", "React", "D3.js"],
    results: "Improved decision-making accuracy by 35%",
    category: "AI & ML"
  }
];

const Portfolio = () => {
  return (
    <div id="portfolio" className="w-full py-12 xs:py-20 px-6">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="bg-primary/10 text-primary border-primary/20 rounded-full py-1">
            Our Work
          </Badge>
          <h2 className="mt-6 text-3xl xs:text-4xl sm:text-5xl font-bold tracking-tight">
            Portfolio & Case Studies
          </h2>
          <p className="mt-6 text-lg text-foreground/80 max-w-3xl mx-auto">
            Explore our successful projects and see how we've helped businesses 
            transform their ideas into powerful digital solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div key={index} className="bg-background border rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-muted flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-2xl font-bold text-primary">{project.title.charAt(0)}</span>
                  </div>
                  <p className="text-sm text-foreground/60">Project Screenshot</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {project.category}
                  </Badge>
                  <span className="text-sm text-foreground/60">{project.client}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-foreground/80 mb-4 text-sm">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-medium mb-2 text-sm">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mb-4 p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                  <p className="text-sm font-medium text-green-700 dark:text-green-300">
                    Result: {project.results}
                  </p>
                </div>

                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    View Case Study
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline">
            View All Projects
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;