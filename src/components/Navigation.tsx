import { useState } from "react";
import { Menu, X, LogIn, LogOut, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import schoolLogo from "@/assets/school-logo.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const menuItems = [
    "NEWS AND EVENTS",
    "ADMISSIONS", 
    "ACADEMIC PROGRAMS",
    "SERVICES",
    "ABOUT US",
    "CONTACT US"
  ];

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <nav className="bg-background shadow-card-custom border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={schoolLogo} 
              alt="School Logo" 
              className="h-10 w-10 rounded-full"
            />
            <span className="text-xl font-bold text-primary">Excellence Academy</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            {isLoggedIn ? (
              <div className="flex items-center space-x-3">
                <Button variant="ghost" size="sm" className="text-primary">
                  <User className="h-4 w-4 mr-2" />
                  Profile
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={toggleLogin}
                  className="text-destructive border-destructive hover:bg-destructive hover:text-destructive-foreground"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </div>
            ) : (
              <Button 
                onClick={toggleLogin}
                className="bg-gradient-primary text-primary-foreground hover:opacity-90"
              >
                <LogIn className="h-4 w-4 mr-2" />
                Login
              </Button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-background border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
              <div className="px-3 py-2 border-t border-border mt-4 pt-4">
                {isLoggedIn ? (
                  <div className="space-y-2">
                    <Button variant="ghost" size="sm" className="w-full justify-start text-primary">
                      <User className="h-4 w-4 mr-2" />
                      Profile
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={toggleLogin}
                      className="w-full justify-start text-destructive border-destructive hover:bg-destructive hover:text-destructive-foreground"
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Logout
                    </Button>
                  </div>
                ) : (
                  <Button 
                    onClick={toggleLogin}
                    className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90"
                  >
                    <LogIn className="h-4 w-4 mr-2" />
                    Login
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;