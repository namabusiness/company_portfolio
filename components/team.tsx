import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Linkedin, Twitter, Github } from "lucide-react";

const teamMembers = [
  {
    name: "Arvindh S V",
    role: "Founder & CEO",
    bio: "Full-stack developer building scalable applications and leading development teams.",
    skills: ["Leadership", "Full-Stack Development", "AI/ML", "Product Strategy"],
    image: "/api/placeholder/200/200"
  },
  {
    name: "Jeevanantham S",
    role: "Founder & CEO",
    bio: "Machine learning specialist with expertise in deep learning, computer vision, and natural language processing.",
    skills: ["Leadership", "Full-Stack Development","Python", "TensorFlow", "PyTorch", "Computer Vision"],
    image: "/api/placeholder/200/200"
  }
];

const Team = () => {
  return (
    <div id="team" className="w-full py-12 xs:py-20 px-6 bg-muted/30">
      <div className="max-w-screen-lg mx-auto">
        <div className="text-center mb-16">
          <Badge className="bg-primary/10 text-primary border-primary/20 rounded-full py-1">
            Our Team
          </Badge>
          <h2 className="mt-6 text-3xl xs:text-4xl sm:text-5xl font-bold tracking-tight">
            Meet the Experts
          </h2>
          <p className="mt-6 text-lg text-foreground/80 max-w-3xl mx-auto">
            Our diverse team of talented professionals brings together years of experience 
            in cutting-edge technologies and innovative solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-2xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-background border rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">{member.name.split(' ').map(n => n[0]).join('')}</span>
              </div>
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-primary font-medium mb-3">{member.role}</p>
              <p className="text-foreground/80 text-sm mb-4">{member.bio}</p>
              
              <div className="mb-4">
                <h4 className="font-medium mb-2 text-sm">Expertise:</h4>
                <div className="flex flex-wrap gap-1 justify-center">
                  {member.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex justify-center gap-2">
                <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                  <Github className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="bg-background border rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Join Our Team</h3>
          <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion for innovation 
            and excellence. If you're ready to make an impact, we'd love to hear from you.
          </p>
          <Button size="lg">
            View Open Positions
          </Button>
        </div> */}
      </div>
    </div>
  );
};

export default Team;