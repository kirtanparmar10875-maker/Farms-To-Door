import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, FileText, Video, BookOpen, TrendingUp, Users } from "lucide-react";

const Resources = () => {
  return (
    <div className="container py-12 space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Farmer Resources
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Everything you need to succeed as a farmer on Farm2Doors. From guides to tools, we've got you covered.
        </p>
      </div>

      {/* Resource Categories */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Getting Started */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Getting Started Guides
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Complete Onboarding Guide</span>
                <Badge variant="secondary">PDF</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">First Sale Checklist</span>
                <Badge variant="secondary">PDF</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Platform Walkthrough</span>
                <Badge variant="outline">Video</Badge>
              </div>
            </div>
            <Button size="sm" className="w-full bg-gradient-primary hover:opacity-90">
              <Download className="h-4 w-4 mr-2" />
              Download All
            </Button>
          </CardContent>
        </Card>

        {/* Marketing Materials */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Marketing & Sales
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Product Photography Tips</span>
                <Badge variant="secondary">PDF</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Writing Great Descriptions</span>
                <Badge variant="outline">Video</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Social Media Templates</span>
                <Badge variant="secondary">ZIP</Badge>
              </div>
            </div>
            <Button size="sm" className="w-full bg-gradient-primary hover:opacity-90">
              <Download className="h-4 w-4 mr-2" />
              Download All
            </Button>
          </CardContent>
        </Card>

        {/* Business Tools */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Business Tools
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Pricing Calculator</span>
                <Badge variant="outline">Excel</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Inventory Tracker</span>
                <Badge variant="outline">Excel</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Tax Documentation Guide</span>
                <Badge variant="secondary">PDF</Badge>
              </div>
            </div>
            <Button size="sm" className="w-full bg-gradient-primary hover:opacity-90">
              <Download className="h-4 w-4 mr-2" />
              Download All
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Video Library */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-center text-foreground">Video Library</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-4 space-y-4">
              <div className="bg-muted rounded-lg flex items-center border border-primary/50 overflow-hidden justify-center">
                <img src="./images/overview.webp" alt="image" className="w-full h-full object-cover" />
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Platform Overview</h3>
                <p className="text-sm text-muted-foreground">
                  Complete walkthrough of the Farm2Doors platform
                </p>
                <Badge variant="outline" className="text-xs bg-accent text-primary-foreground">15 minutes</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>  
            <CardContent className="p-4 space-y-4">
              <div className="bg-muted rounded-lg flex items-center border border-primary/50 overflow-hidden justify-center">
                <img src="./images/listing.webp" alt="image" className="w-full h-full object-cover" />
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Creating Your First Listing</h3>
                <p className="text-sm text-muted-foreground">
                  Step-by-step guide to creating compelling product listings
                </p>
                <Badge variant="outline" className="text-xs bg-accent text-primary-foreground">8 minutes</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 space-y-4">
              <div className="bg-muted rounded-lg flex items-center border border-primary/50 overflow-hidden justify-center">
                <img src="./images/order.webp" alt="image" className="w-full h-full object-cover" />
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Managing Orders</h3>
                <p className="text-sm text-muted-foreground">
                  How to efficiently handle customer orders and communication
                </p>
                <Badge variant="outline" className="text-xs bg-accent text-primary-foreground">12 minutes</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Downloadable Resources */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-center text-foreground">Downloadable Resources</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Card 1: Farmer Success Kit */}
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>Farmer Success Kit</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col flex-grow space-y-4">
              <p className="text-muted-foreground">
                Complete package with everything you need to start selling successfully on Farm2Doors.
              </p>
              <ul className="space-y-2 text-sm">
                <li>• Platform setup checklist</li>
                <li>• Product photography guide</li>
                <li>• Pricing strategies workbook</li>
                <li>• Customer service templates</li>
                <li>• Marketing calendar template</li>
              </ul>

              <div className="flex-grow" /> {/* Pushes button to bottom */}

              <Button className="w-full bg-gradient-primary hover:opacity-90">
                <Download className="h-4 w-4 mr-2" />
                Download Success Kit
              </Button>
            </CardContent>
          </Card>

          {/* Card 2: Legal & Compliance */}
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>Legal & Compliance</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col flex-grow space-y-4">
              <p className="text-muted-foreground">
                Important legal documents and compliance information for agricultural businesses.
              </p>
              <ul className="space-y-2 text-sm">
                <li>• Food safety regulations overview</li>
                <li>• Insurance requirements guide</li>
                <li>• Terms of service for sellers</li>
                <li>• Tax reporting guidelines</li>
                <li>• Liability protection tips</li>
              </ul>

              <div className="flex-grow" />

              <Button variant="outline" className="w-full bg-accent hover:bg-accent/80 text-primary-foreground">
                <Download className="h-4 w-4 mr-2" />
                Download Legal Kit
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>


      {/* Community Resources */}
      <Card className="bg-gradient-primary/10">
        <CardContent className="text-center space-y-6 p-8">
          <div className="flex justify-center">
            <div className="w-16 h-16 rounded-lg bg-gradient-primary text-primary-foreground flex items-center justify-center">
              <Users className="h-8 w-8" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-foreground">Join Our Community</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Connect with thousands of successful farmers, share tips, ask questions, and learn from
            the best in our exclusive farmer community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-primary hover:opacity-90">
              Join Community Forum
            </Button>
            <Button variant="outline" className="bg-accent hover:bg-accent/80 text-primary-foreground">
              Subscribe to Newsletter
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Resources;