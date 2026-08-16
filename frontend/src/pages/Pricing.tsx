import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import SubscriptionModal from "@/components/modals/SubscriptionModal";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Pricing = () => {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [subscriptionPlan, setSubscriptionPlan] = useState("free");

  const handleSubscribe = (plan: string) => {
    setOpen(true);
    setSubscriptionPlan(plan);
  };

  return (
    <div className="container py-12 space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Simple, Transparent Pricing
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Choose the plan that works best for your farm. No hidden fees, no long-term contracts.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Basic Plan */}
        <Card className="relative flex flex-col">
          <CardHeader className="text-center space-y-4">
            <CardTitle className="text-2xl">Basic</CardTitle>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-foreground">₹0</div>
              <div className="text-sm text-muted-foreground">per month</div>
            </div>
            <p className="text-muted-foreground">Perfect for getting started</p>
          </CardHeader>

          <CardContent className="flex flex-col flex-grow space-y-6">
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm">Up to 10 product listings</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm">5% commission on sales</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm">Basic customer support</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm">Standard analytics</span>
              </li>
            </ul>

            {/* Spacer to push button down */}
            <div className="flex-grow" />

            <Button variant="outline" className="w-full mt-auto bg-accent hover:bg-accent/80 text-white" onClick={() => toast({ title: "Free plan is already enabled", description: "You are already on the free plan." })}>
              Choose Free
            </Button>
          </CardContent>
        </Card>


        {/* Professional Plan */}
        <Card className="relative flex flex-col border-primary shadow-lg">
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
            <Badge className="bg-gradient-primary text-primary-foreground px-4 py-1">
              <Star className="h-3 w-3 mr-1" />
              Most Popular
            </Badge>
          </div>

          <CardHeader className="text-center space-y-4">
            <CardTitle className="text-2xl">Professional</CardTitle>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-foreground">₹299</div>
              <div className="text-sm text-muted-foreground">per month</div>
            </div>
            <p className="text-muted-foreground">For growing farms</p>
          </CardHeader>

          <CardContent className="flex flex-col flex-grow space-y-6">
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm">Unlimited product listings</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm">3% commission on sales</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm">Priority customer support</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm">Advanced analytics</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm">Featured listings</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm">Marketing tools</span>
              </li>
            </ul>

            {/* Spacer pushes button to bottom */}
            <div className="flex-grow" />

            <Button className="w-full bg-gradient-primary hover:opacity-90 mt-auto" onClick={() => handleSubscribe("professional")}>
              Choose Professional
            </Button>
          </CardContent>
        </Card>


        {/* Enterprise Plan */}
        <Card className="relative flex flex-col">
          <CardHeader className="text-center space-y-4">
            <CardTitle className="text-2xl">Enterprise</CardTitle>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-foreground">₹999</div>
              <div className="text-sm text-muted-foreground">per month</div>
            </div>
            <p className="text-muted-foreground">For large operations</p>
          </CardHeader>

          <CardContent className="flex flex-col flex-grow space-y-6">
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm">Unlimited everything</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm">1% commission on sales</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm">Dedicated account manager</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm">Custom analytics dashboard</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm">API access</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm">White-label options</span>
              </li>
            </ul>

            {/* Spacer to push button down */}
            <div className="flex-grow" />

            <Button variant="outline" className="w-full mt-auto bg-accent hover:bg-accent/80 text-white" onClick={() => handleSubscribe("enterprise")}>
              Choose Enterprise
            </Button>
          </CardContent>
        </Card>

      </div>

      {/* FAQ Section */}
      <div className="space-y-8 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-foreground">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="font-semibold text-foreground">How does commission work?</h3>
            <p className="text-muted-foreground text-sm">
              Commission is calculated on each successful sale and automatically deducted from your payout.
              There are no upfront fees or hidden charges.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-foreground">Can I change plans anytime?</h3>
            <p className="text-muted-foreground text-sm">
              Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately,
              and you'll only pay the difference.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-foreground">What payment methods do you accept?</h3>
            <p className="text-muted-foreground text-sm">
              We accept all major credit cards, PayPal, and bank transfers. Payments are processed
              securely through our certified payment partners.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-foreground">Is there a free trial?</h3>
            <p className="text-muted-foreground text-sm">
              The Basic plan is free forever! For paid plans, we offer a 30-day money-back guarantee
              if you're not completely satisfied.
            </p>
          </div>
        </div>
      </div>
      <SubscriptionModal open={open} onOpenChange={setOpen} subscriptionPlan={subscriptionPlan} />
    </div>
  );
};

export default Pricing;