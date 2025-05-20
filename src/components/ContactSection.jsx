import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { cn } from "@/lib/utils";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Currently seeking full-stack developer roles. I'm always open to
          discussing new opportunities so feel free to reach out.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-3xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-6">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium flex items-start">Email</h4>
                  <a
                    href="mailto:andrewgsilva99@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    andrewgsilva99@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium flex items-start">Phone</h4>
                  <a
                    href="tel:+16782323617"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +1 (678) 232-3617
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium flex items-start">Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Atlanta, Georgia
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-semibold mb-6">Connect With Me</h3>
            <div className="space-y-6 justify-center">
              <div className="flex space-x-8 justify-center">
                <a
                  href="https://www.linkedin.com/in/andrew-silva-0757a6202/"
                  target="_blank"
                >
                  <Linkedin className="h-8 w-8" />
                </a>
                <a href="https://github.com/aSilvaCodes" target="_blank">
                  <Github className="h-8 w-8" />
                </a>
                <a href="mailto:andrewgsilva99@gmail.com" target="_blank">
                  <Mail className="h-8 w-8" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
