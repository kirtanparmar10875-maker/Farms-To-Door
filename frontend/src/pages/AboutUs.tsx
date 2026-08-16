import { Store, Users, Target, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";


const AboutUs = () => {
  return (
    <div className="container py-12 space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          About Farm2Doors
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Connecting farmers directly with customers to bring fresh, quality produce from the farm to your doorstep.
        </p>
      </div>

      {/* Mission Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-foreground text-center lg">Our Mission</h2>
          <p className="text-muted-foreground leading-relaxed">
            Farm2Doors was created to bridge the gap between farmers and consumers, eliminating 
            middlemen and ensuring fair prices for both parties. We believe in supporting local 
            agriculture while providing customers with the freshest, highest-quality produce.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our platform empowers farmers to reach customers directly, building lasting relationships 
            based on trust, transparency, and shared values of sustainability and quality.
          </p>
        </div>
        <div className="flex justify-center rounded-lg overflow-hidden ">
          <img src="./images/about.webp" alt="image" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Values */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-center text-foreground">Our Values</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center p-6">
            <CardContent className="space-y-4">
              <div className="w-12 h-12 mx-auto rounded-lg bg-gradient-primary text-primary-foreground flex items-center justify-center">
                <Store className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-foreground">Direct Trade</h3>
              <p className="text-sm text-muted-foreground">
                Connecting farmers directly with customers for fair prices
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6">
            <CardContent className="space-y-4">
              <div className="w-12 h-12 mx-auto rounded-lg bg-gradient-primary text-primary-foreground flex items-center justify-center">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-foreground">Community</h3>
              <p className="text-sm text-muted-foreground">
                Building strong relationships between farmers and customers
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6">
            <CardContent className="space-y-4">
              <div className="w-12 h-12 mx-auto rounded-lg bg-gradient-primary text-primary-foreground flex items-center justify-center">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-foreground">Sustainability</h3>
              <p className="text-sm text-muted-foreground">
                Promoting sustainable farming and reducing food waste
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6">
            <CardContent className="space-y-4">
              <div className="w-12 h-12 mx-auto rounded-lg bg-gradient-primary text-primary-foreground flex items-center justify-center">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-foreground">Quality</h3>
              <p className="text-sm text-muted-foreground">
                Ensuring the highest quality produce reaches your table
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Team Section */}
      <div className="text-center space-y-6">
        <h2 className="text-3xl font-bold text-foreground">Our Team</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Farm2Doors is built by a passionate team of technology enthusiasts and agriculture advocates 
          who believe in the power of direct connections between farmers and consumers.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;