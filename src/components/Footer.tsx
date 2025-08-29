import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import schoolLogo from "@/assets/school-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src={schoolLogo} 
                alt="School Logo" 
                className="h-8 w-8 rounded-full"
              />
              <span className="text-xl font-bold">Excellence Academy</span>
            </div>
            <p className="text-primary-foreground/80">
              Committed to providing world-class education and nurturing future leaders 
              through innovation, excellence, and community engagement.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 hover:text-accent cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 hover:text-accent cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 hover:text-accent cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 hover:text-accent cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">News & Events</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Admissions</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Academic Programs</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Student Services</a></li>
            </ul>
          </div>

          {/* Academic Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Programs</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Undergraduate</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Graduate</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Online Learning</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Continuing Education</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-0.5 text-accent" />
                <div className="text-primary-foreground/80">
                  <p>123 Education Boulevard</p>
                  <p>Academic City, AC 12345</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent" />
                <span className="text-primary-foreground/80">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent" />
                <span className="text-primary-foreground/80">info@excellenceacademy.edu</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/80">
            © 2024 Excellence Academy. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;