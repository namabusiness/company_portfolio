import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Smartphone, Globe, Brain, Code, Database, Zap } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "App Development",
    description: "Native and cross-platform mobile applications using React Native, Flutter, and Swift.",
    technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
    process: "Ideation → Design → Development → Testing → Deployment"
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Modern, responsive web applications built with cutting-edge frameworks.",
    technologies: ["React", "Next.js", "Node.js", "TypeScript"],
    process: "Planning → UI/UX → Frontend → Backend → Launch"
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Intelligent solutions powered by advanced AI and machine learning algorithms.",
    technologies: ["Python", "TensorFlow", "PyTorch", "OpenAI"],
    process: "Data Analysis → Model Training → Integration → Optimization"
  }
];

const Services = () => {
  return (
    <div id="services" className="w-full py-12 xs:py-20 px-6 bg-muted/30">
      <div className="max-w-screen-lg mx-auto">
        <div className="text-center mb-16">
          <Badge className="bg-primary/10 text-primary border-primary/20 rounded-full py-1">
            Our Services
          </Badge>
          <h2 className="mt-6 text-3xl xs:text-4xl sm:text-5xl font-bold tracking-tight">
            Comprehensive Digital Solutions
          </h2>
          <p className="mt-6 text-lg text-foreground/80 max-w-3xl mx-auto">
            From concept to deployment, we offer end-to-end development services 
            tailored to your business needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-background border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4 h-12 w-12 flex items-center justify-center bg-primary/10 rounded-full">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-foreground/80 mb-4">{service.description}</p>
              
              <div className="mb-4">
                <h4 className="font-medium mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-medium mb-2">Process:</h4>
                <p className="text-sm text-foreground/70">{service.process}</p>
              </div>

              <Button variant="outline" className="w-full">
                Learn More
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-background border rounded-xl p-6">
            <Code className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3">Custom Development</h3>
            <p className="text-foreground/80">
              Tailored solutions built from scratch to meet your specific requirements and business goals.
            </p>
          </div>
          <div className="bg-background border rounded-xl p-6">
            <Database className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3">System Integration</h3>
            <p className="text-foreground/80">
              Seamlessly connect your existing systems with new technologies for improved efficiency.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;