import { Button } from "@/components/ui/button";
import { GraduationCap, BookOpen, Users } from "lucide-react";
import heroCampus from "@/assets/hero-campus.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroCampus})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Excellence in 
            <span className="block text-accent"> Education</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Empowering students to reach their full potential through innovative learning, 
            dedicated faculty, and a supportive community.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-3"
            >
              <GraduationCap className="mr-2 h-5 w-5" />
              Apply Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-3"
            >
              <BookOpen className="mr-2 h-5 w-5" />
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">2,500+</div>
              <div className="text-white/80">Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">150+</div>
              <div className="text-white/80">Faculty Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="text-white/80">Graduate Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;