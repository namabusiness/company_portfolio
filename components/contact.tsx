import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  return (
    <div id="contact" className="w-full py-12 xs:py-20 px-6 bg-muted/30">
      <div className="max-w-screen-lg mx-auto">
        <div className="text-center mb-16">
          <Badge className="bg-primary/10 text-primary border-primary/20 rounded-full py-1">
            Get In Touch
          </Badge>
          <h2 className="mt-6 text-3xl xs:text-4xl sm:text-5xl font-bold tracking-tight">
            Let's Start Your Project
          </h2>
          <p className="mt-6 text-lg text-foreground/80 max-w-3xl mx-auto">
            Ready to transform your ideas into reality? Contact us today for a free consultation 
            and let's discuss how we can help your business grow.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-background border rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <Input placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <Input placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input type="email" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone (Optional)</label>
                <Input type="tel" placeholder="+1 (555) 123-4567" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Service Interested In</label>
                <select className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>Select a service</option>
                  <option>App Development</option>
                  <option>Web Development</option>
                  <option>AI & Machine Learning</option>
                  <option>Custom Development</option>
                  <option>Consultation</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Project Details</label>
                <textarea 
                  className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary min-h-[120px]"
                  placeholder="Tell us about your project requirements, timeline, and budget..."
                ></textarea>
              </div>
              <Button size="lg" className="w-full">
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-background border rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-foreground/80">hello@yourcompany.com</p>
                    <p className="text-foreground/80">support@yourcompany.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="text-foreground/80">+1 (555) 123-4567</p>
                    <p className="text-foreground/80">+1 (555) 987-6543</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Address</h4>
                    <p className="text-foreground/80">123 Innovation Street</p>
                    <p className="text-foreground/80">Tech City, TC 12345</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Business Hours</h4>
                    <p className="text-foreground/80">Mon - Fri: 9:00 AM - 6:00 PM</p>
                    <p className="text-foreground/80">Sat: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-background border rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4">Quick Response</h3>
              <p className="text-foreground/80 mb-4">
                Need immediate assistance? Schedule a free 30-minute consultation call with our team.
              </p>
              <Button variant="outline" className="w-full">
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        {/* <div className="mt-16 bg-background border rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">What is your development process?</h4>
              <p className="text-foreground/80 text-sm">We follow an agile methodology with regular client communication, from initial consultation to final deployment and ongoing support.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">How long does a typical AI project take?</h4>
              <p className="text-foreground/80 text-sm">AI projects typically range from 3-6 months depending on complexity, data requirements, and integration needs.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Do you provide ongoing support?</h4>
              <p className="text-foreground/80 text-sm">Yes, we offer comprehensive maintenance and support packages to ensure your applications continue to perform optimally.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Can you work with our existing systems?</h4>
              <p className="text-foreground/80 text-sm">Absolutely! We specialize in system integration and can seamlessly connect new solutions with your existing infrastructure.</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Contact;