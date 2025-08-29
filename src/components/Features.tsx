import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Users, BookOpen, Award, Globe, Microscope } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: GraduationCap,
      title: "Excellence in Academics",
      description: "Rigorous curriculum designed to challenge and inspire students at every level."
    },
    {
      icon: Users,
      title: "Expert Faculty",
      description: "Dedicated educators with advanced degrees and years of teaching experience."
    },
    {
      icon: BookOpen,
      title: "Diverse Programs",
      description: "Wide range of academic programs to suit different interests and career goals."
    },
    {
      icon: Award,
      title: "Recognition & Awards",
      description: "Consistently ranked among the top educational institutions in the region."
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "International exchange programs and multicultural learning environment."
    },
    {
      icon: Microscope,
      title: "Research Opportunities",
      description: "State-of-the-art facilities for hands-on learning and research projects."
    }
  ];

  return (
    <section className="py-16 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Why Choose Excellence Academy?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We provide exceptional education with a focus on academic excellence, 
            character development, and preparing students for future success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="shadow-card-custom hover:shadow-elegant transition-all duration-300 border-0">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-4">
                  <feature.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;