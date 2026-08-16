import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Truck, Shield, Star, Users, Package, HelpingHand, PhoneCall, BookOpenCheck, BarChart2, UploadCloud, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";


const Index = () => {
  const features = [
    {
      icon: Leaf,
      title: "Farm Fresh",
      description: "Directly sourced from local farmers ensuring maximum freshness and quality."
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Quick and reliable delivery from farm to your doorstep within 24-48 hours."
    },
    {
      icon: Shield,
      title: "Quality Assured",
      description: "All products are carefully inspected and meet our high quality standards."
    }
  ];

  const sellGrowFeatures = [
    {
      icon: Package,
      title: "Zero Commission for Small Farmers",
      desc: "No hidden charges, no middlemen. Keep what you earn.",
    },
    {
      icon: BarChart2,
      title: "Flexible Plans for Larger Sellers",
      desc: "Scale with our Pro and Enterprise pricing tiers.",
    },
    {
      icon: UploadCloud,
      title: "Easy Product Upload",
      desc: "List your farm produce with just a few clicks.",
    },
    {
      icon: ShieldCheck,
      title: "Safe Payments & Fast Support",
      desc: "We ensure your earnings and experience are secure.",
    },
  ]

  const stats = [
    { number: "500+", label: "Happy Farmers" },
    { number: "10,000+", label: "Products Sold" },
    { number: "50+", label: "Cities Served" },
    { number: "4.9", label: "Average Rating" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
        <div className="absolute inset-0 bg-black/40"></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url("./images/hero.webp")` }}
        ></div>
        <div className="relative container py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                  <Leaf className="w-4 h-4 mr-2" />Direct from Farm
                </Badge>
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  From the <span className="sm:text-accent text-primary">farm</span> to your <span className="text-accent">doorstep</span>
                </h1>
                <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                  Connect with local farmers and get the freshest produce delivered directly to your home. Support sustainable agriculture while enjoying farm-fresh quality.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-accent bg-accent/70 hover:bg-accent text-accent-foreground">
                  <Link to="/shop">
                    Shop Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-primary bg-white/70 hover:bg-white hover:text-primary">
                  <Link to="/profile">
                    Join as Seller
                  </Link>
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 fill-current text-yellow-400" />
                  <span className="text-white/90">4.9/5 Rating</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="h-4 w-4 text-white/90" />
                  <span className="text-white/90">10,000+ Customers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Farm2Doors?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We bridge the gap between farmers and consumers, ensuring fresh produce and fair prices for everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center group hover:shadow-medium transition-smooth">
                <CardHeader>
                  <div className="mx-auto h-16 w-16 rounded-full bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
                    <feature.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground">
              Whether you're looking to buy fresh produce or sell your farm products, Farm2Doors is here to help.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <Card className="p-6 hover:shadow-medium transition-smooth">
                <div className="space-y-4">
                  <Package className="h-12 w-12 text-primary mx-auto" />
                  <h3 className="text-xl font-semibold">For Buyers</h3>
                  <p className="text-muted-foreground">Discover fresh, local produce and support your community farmers.</p>
                  <Button asChild className="w-full bg-gradient-primary hover:bg-gradient-primary/80">
                    <Link to="/shop">Start Shopping</Link>
                  </Button>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-medium transition-smooth">
                <div className="space-y-4">
                  <Leaf className="h-12 w-12 text-primary mx-auto" />
                  <h3 className="text-xl font-semibold">For Farmers</h3>
                  <p className="text-muted-foreground">Sell your products directly to customers and grow your business.</p>
                  <Button asChild variant="outline" className="w-full bg-accent text-white">
                    <Link to="/profile">Upload Products</Link>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Info Sections */}
      <section className="py-12 bg-muted/40">
        <div className="container space-y-24">

          {/* About Us */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4 space-x-2">
                <Users className="text-primary w-8 h-8" />
                <h2 className="text-3xl font-bold">Who We Are</h2>
              </div>
              <p className="text-muted-foreground text-lg mb-4">
                At <span className="font-semibold">Farm2Doors</span>, we’re building a bridge between India’s farmers and modern consumers. Our mission is simple — support rural livelihoods while making fresh produce easily accessible to every doorstep.
              </p>
              <p className="text-muted-foreground text-lg">
                From humble beginnings to a thriving community of farmers and customers, our journey continues with purpose.
              </p>
              <div className="flex justify-start mt-6">
                <Button className="bg-gradient-primary hover:bg-gradient-primary/80 min-w-[150px] text-sm md:text-base">
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            <img src="./images/about.webp" alt="About Farm2Doors" className="rounded-xl shadow-md w-full h-auto object-cover" />
          </div>

          {/* Sell & Grow */}
          <div className="space-y-6">
            <div className="flex items-center mb-2 space-x-2">
              <Leaf className="text-primary w-6 h-6" />
              <span className="text-sm font-medium uppercase tracking-wide text-primary">
                For Sellers
              </span>
            </div>
            <h2 className="text-3xl font-bold">Sell & Grow with Confidence</h2>
            <p className="text-muted-foreground text-lg">
              List your produce, expand your reach, and thrive with the tools we’ve built just for you.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mt-6">
              {sellGrowFeatures.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="bg-white shadow p-5 rounded-xl flex space-x-4 items-start">
                    <Icon className="w-8 h-8 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-primary mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap justify-center sm:justify-start gap-4 mt-8">
              <Button asChild className="bg-gradient-primary hover:bg-gradient-primary/80 min-w-[150px] text-sm md:text-base">
                <Link to="/start-selling">Start Selling</Link>
              </Button>
              <Button asChild className="bg-accent hover:bg-accent/80 min-w-[150px] text-sm md:text-base">
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>


          {/* Support & Resources */}
          <div className="relative bg-muted/30 rounded-xl py-6 space-y-6">
            <div className="flex items-center mb-2 space-x-2">
              <HelpingHand className="text-primary w-6 h-6" />
              <span className="text-sm font-medium uppercase tracking-wide text-primary">
                Help at Every Step
              </span>
            </div>
            <h2 className="text-3xl font-bold">Farmer Support & Learning</h2>
            <p className="text-muted-foreground text-lg">
              Whether you're new or experienced, our tools and team are here to back your every step.
            </p>

            <div className="space-y-6 mt-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary text-white p-2 rounded-full">
                  <PhoneCall className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">24/7 Dedicated Support</h4>
                  <p className="text-sm text-muted-foreground">
                    Call, message, or email — our team is available whenever you need help.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary text-white p-2 rounded-full">
                  <BookOpenCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Knowledge Hub</h4>
                  <p className="text-sm text-muted-foreground">
                    Access farming guides, latest schemes, and expert webinars to upskill yourself.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-background border-l-4 border-primary p-4 mt-8 rounded-md shadow-sm">
              <p className="italic text-muted-foreground text-sm">
                “When I started, I had no idea where to begin. The Farm2Doors support team walked me through everything.” — <span className="font-semibold">Amit, Farmer from Nashik</span>
              </p>
            </div>

            <div className="flex flex-wrap justify-center sm:justify-start gap-4 mt-6">
              <Button asChild className="bg-gradient-primary hover:bg-gradient-primary/80 min-w-[150px] text-sm md:text-base">
                <Link to="/farmer-support">Get Support</Link>
              </Button>
              <Button asChild className="bg-accent hover:bg-accent/80 min-w-[150px] text-sm md:text-base">
                <Link to="/resources">Explore Resources</Link>
              </Button>
            </div>
          </div>


        </div>
      </section>

    </div>
  );
};

export default Index;
