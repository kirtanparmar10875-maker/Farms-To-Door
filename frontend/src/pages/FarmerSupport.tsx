import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MessageCircle, Clock, BookOpen, Users } from "lucide-react";

const FarmerSupport = () => {
  return (
    <div className="container py-12 space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Farmer Support Center
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          We're here to help you succeed. Get the support you need to grow your business on Farm2Doors.
        </p>
      </div>

      {/* Contact Options */}
      <div className="grid md:grid-cols-3 gap-8">
        <Card className="text-center p-6 flex flex-col">
          <CardContent className="flex flex-col flex-grow space-y-4">
            <div className="w-12 h-12 mx-auto rounded-lg bg-gradient-primary text-primary-foreground flex items-center justify-center">
              <Phone className="h-6 w-6" />
            </div>
            <h3 className="font-semibold text-foreground">Phone Support</h3>
            <p className="text-sm text-muted-foreground">
              Speak directly with our farmer success team
            </p>
            <div className="space-y-2">
              <p className="font-medium text-foreground">+1 (555) 123-FARM</p>
              <p className="text-xs text-muted-foreground">Mon-Fri, 8AM-6PM PT</p>
            </div>

            <div className="flex-grow" />
            <Button className="bg-gradient-primary hover:opacity-90" size="sm">Call Now</Button>
          </CardContent>
        </Card>

        <Card className="text-center p-6 flex flex-col">
          <CardContent className="flex flex-col flex-grow space-y-4">
            <div className="w-12 h-12 mx-auto rounded-lg bg-gradient-primary text-primary-foreground flex items-center justify-center">
              <Mail className="h-6 w-6" />
            </div>
            <h3 className="font-semibold text-foreground">Email Support</h3>
            <p className="text-sm text-muted-foreground">
              Get detailed help via email within 24 hours
            </p>
            <div className="space-y-2">
              <p className="font-medium text-foreground">farmers@farm2doors.com</p>
              <p className="text-xs text-muted-foreground">Response within 24 hours</p>
            </div>

            <div className="flex-grow" />
            <Button className="bg-gradient-primary hover:opacity-90" size="sm">Send Email</Button>
          </CardContent>
        </Card>

        <Card className="text-center p-6 flex flex-col">
          <CardContent className="flex flex-col flex-grow space-y-4">
            <div className="w-12 h-12 mx-auto rounded-lg bg-gradient-primary text-primary-foreground flex items-center justify-center">
              <MessageCircle className="h-6 w-6" />
            </div>
            <h3 className="font-semibold text-foreground">Live Chat</h3>
            <p className="text-sm text-muted-foreground">
              Chat with our support team in real-time
            </p>
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <p className="text-xs text-muted-foreground">Available now</p>
              </div>
            </div>

            <div className="flex-grow" />
            <Button className="bg-gradient-primary hover:opacity-90" size="sm">Start Chat</Button>
          </CardContent>
        </Card>
      </div>


      {/* Support Categories */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-center text-foreground">How Can We Help?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="flex flex-col items-center justify-center">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Getting Started
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Account setup and verification</li>
                <li>• Creating your first product listing</li>
                <li>• Understanding commission structure</li>
                <li>• Profile optimization tips</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="flex flex-col items-center justify-center">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Managing Orders
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Processing customer orders</li>
                <li>• Updating order status</li>
                <li>• Handling cancellations</li>
                <li>• Managing inventory</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="flex flex-col items-center justify-center">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Payments & Billing
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Payment processing schedule</li>
                <li>• Understanding fees</li>
                <li>• Tax documentation</li>
                <li>• Payment method updates</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Resources */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-center text-foreground">Self-Help Resources</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <Card className="flex flex-col items-center justify-center">
            <CardHeader>
              <CardTitle>Farmer Knowledge Base</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col flex-grow space-y-4">
              <p className="text-muted-foreground">
                Comprehensive guides and tutorials to help you maximize your success on Farm2Doors.
              </p>
              <ul className="space-y-2 text-sm">
                <li>• Best practices for product photography</li>
                <li>• Writing compelling product descriptions</li>
                <li>• Seasonal selling strategies</li>
                <li>• Customer communication tips</li>
              </ul>

              <div className="flex-grow" />
              <Button className="bg-gradient-primary hover:opacity-90">Browse Knowledge Base</Button>
            </CardContent>
          </Card>

          {/* Card 2 */}
          <Card className="flex flex-col items-center justify-center">
            <CardHeader>
              <CardTitle>Video Tutorials</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col flex-grow space-y-4">
              <p className="text-muted-foreground">
                Step-by-step video guides to help you navigate the platform efficiently.
              </p>
              <ul className="space-y-2 text-sm">
                <li>• Platform walkthrough</li>
                <li>• Creating effective listings</li>
                <li>• Managing your farmer dashboard</li>
                <li>• Advanced selling techniques</li>
              </ul>

              <div className="flex-grow" />
              <Button className="bg-gradient-primary hover:opacity-90">Watch Tutorials</Button>
            </CardContent>
          </Card>
        </div>
      </div>


      {/* Community */}
      <Card className="bg-gradient-primary/10">
        <CardContent className="text-center space-y-6 p-8">
          <h2 className="text-3xl font-bold text-foreground">Join Our Farmer Community</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Connect with other farmers, share experiences, and learn from successful sellers in our
            exclusive farmer community forum.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-primary hover:opacity-90">
              Join Community Forum
            </Button>
            <Button variant="outline" className="bg-accent hover:bg-accent/80 text-primary-foreground">
              Follow on Social Media
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FarmerSupport;