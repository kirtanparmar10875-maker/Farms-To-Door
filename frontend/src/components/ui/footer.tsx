import { Link } from "react-router-dom";
import { Store, Instagram, Facebook, MessageCircle, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t mt-auto">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg">
                <img src="./images/logo.webp" alt="farm2doors" />
              </div>
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Farm<span className="text-accent">2</span>Doors
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Connecting farmers directly with customers for the freshest produce delivery. 
              From farm to your doorstep, we bring you quality products with trust and transparency.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-background hover:bg-accent transition-smooth"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-background hover:bg-accent transition-smooth"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-background hover:bg-accent transition-smooth"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <div className="space-y-2">
              <Link 
                to="/" 
                className="block text-sm text-muted-foreground hover:text-primary transition-smooth"
              >
                Home
              </Link>
              <Link 
                to="/shop" 
                className="block text-sm text-muted-foreground hover:text-primary transition-smooth"
              >
                Shop
              </Link>
              <Link 
                to="/profile" 
                className="block text-sm text-muted-foreground hover:text-primary transition-smooth"
              >
                Profile
              </Link>
              <Link 
                to="/about" 
                className="block text-sm text-muted-foreground hover:text-primary transition-smooth"
              >
                About Us
              </Link>
            </div>
          </div>

          {/* For Farmers */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">For Farmers</h3>
            <div className="space-y-2">
              <Link 
                to="/start-selling" 
                className="block text-sm text-muted-foreground hover:text-primary transition-smooth"
              >
                Start Selling
              </Link>
              <Link 
                to="/pricing" 
                className="block text-sm text-muted-foreground hover:text-primary transition-smooth"
              >
                Pricing
              </Link>
              <Link 
                to="/farmer-support" 
                className="block text-sm text-muted-foreground hover:text-primary transition-smooth"
              >
                Farmer Support
              </Link>
              <Link 
                to="/resources" 
                className="block text-sm text-muted-foreground hover:text-primary transition-smooth"
              >
                Resources
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>support@farm2doors.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+1 (555) 123-FARM</span>
              </div>
              <div className="flex items-start space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span>123 Farm Valley Road<br />Agricultural District, CA 95001</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Farm2Doors. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <Link to="/privacy" className="hover:text-primary transition-smooth">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-primary transition-smooth">
              Terms of Service
            </Link>
            <Link to="/cookies" className="hover:text-primary transition-smooth">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;