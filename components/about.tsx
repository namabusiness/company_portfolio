import { Badge } from "@/components/ui/badge";
import { Target, Eye, Heart } from "lucide-react";

const About = () => {
  return (
    <div id="about" className="w-full py-12 xs:py-20 px-6">
      <div className="max-w-screen-lg mx-auto">
        <div className="text-center mb-16">
          <Badge className="bg-primary/10 text-primary border-primary/20 rounded-full py-1">
            About Us
          </Badge>
          <h2 className="mt-6 text-3xl xs:text-4xl sm:text-5xl font-bold tracking-tight">
            Building Tomorrow's Technology Today
          </h2>
          <p className="mt-6 text-lg text-foreground/80 max-w-3xl mx-auto">
            Founded with a vision to bridge the gap between innovative ideas and digital reality, 
            we are a team of passionate developers and AI specialists committed to delivering 
            exceptional solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="mb-4 h-12 w-12 flex items-center justify-center bg-primary/10 rounded-full mx-auto">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p className="text-foreground/80">
              To empower businesses with cutting-edge technology solutions that drive growth and innovation.
            </p>
          </div>
          <div className="text-center">
            <div className="mb-4 h-12 w-12 flex items-center justify-center bg-primary/10 rounded-full mx-auto">
              <Eye className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
            <p className="text-foreground/80">
              To be the leading force in digital transformation, making advanced technology accessible to all.
            </p>
          </div>
          <div className="text-center">
            <div className="mb-4 h-12 w-12 flex items-center justify-center bg-primary/10 rounded-full mx-auto">
              <Heart className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Our Values</h3>
            <p className="text-foreground/80">
              Innovation, integrity, and client success are at the core of everything we do.
            </p>
          </div>
        </div>

        {/* <div className="bg-muted/50 rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-4">Our Journey</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <div>
                <span className="font-semibold">2020:</span> Founded with a focus on mobile app development
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <div>
                <span className="font-semibold">2021:</span> Expanded into web development and AI solutions
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <div>
                <span className="font-semibold">2023:</span> Launched ML consulting services
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <div>
                <span className="font-semibold">2024:</span> 100+ successful projects delivered
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default About;