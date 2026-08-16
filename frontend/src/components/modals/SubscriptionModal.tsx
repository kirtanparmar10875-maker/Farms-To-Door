import { useState } from "react";
import { CalendarCheck, Phone, Check, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { useAuthStore } from "@/store/useAuthStore";

interface SubscriptionModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    subscriptionPlan: string;
}

const SubscriptionModal = ({ open, onOpenChange, subscriptionPlan }: SubscriptionModalProps) => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [subscriptionType, setSubscriptionType] = useState("monthly");
    const [paymentMethod, setPaymentMethod] = useState("card");
    const { toast } = useToast();
    const { subscribe, isSubscribing } = useAuthStore();

    const pricing = {
        free: {
            price: 0,
            type: "Free",
        },
        professional: {
            monthly: 299,
            yearly: 2999,
            type: "Professional",
        },
        enterprise: {
            monthly: 999,
            yearly: 9999,
            type: "Enterprise",
        },
    };

    const handleSubscribe = async () => {
        if (!phoneNumber.trim()) {
            toast({
                title: "Missing Information",
                description: "Please enter your phone number.",
                variant: "destructive",
            });
            return;
        }

        await subscribe(subscriptionPlan);
        onOpenChange(false);
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle className="flex items-center space-x-2">
                        <CalendarCheck className="h-5 w-5" />
                        <span>Subscribe Now - {subscriptionPlan}</span>
                    </DialogTitle>
                    <DialogDescription>
                        Choose your subscription plan and payment method.
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-6">
                    {/* Phone Number */}
                    <div className="space-y-2">
                        <Label htmlFor="phone" className="flex items-center space-x-2">
                            <Phone className="h-4 w-4" />
                            <span>Contact Phone *</span>
                        </Label>
                        <Input
                            id="phone"
                            type="tel"
                            placeholder="Enter your phone number"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                    </div>

                    {/* Subscription Plan */}
                    <div className="space-y-3">
                        <Label className="text-sm font-medium">Subscription Plan</Label>
                        <RadioGroup value={subscriptionType} onValueChange={setSubscriptionType}>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="monthly" id="monthly" />
                                <Label htmlFor="monthly">Monthly - ₹{pricing[subscriptionPlan].monthly}</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="yearly" id="yearly" />
                                <Label htmlFor="yearly">Yearly - ₹{pricing[subscriptionPlan].yearly}</Label>
                            </div>
                        </RadioGroup>
                    </div>

                    {/* Payment Method */}
                    <div className="space-y-3">
                        <Label className="text-sm font-medium">Payment Method</Label>
                        <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="card" id="card" />
                                <Label htmlFor="card">Credit/Debit Card</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="online" id="online" />
                                <Label htmlFor="online">Online Payment</Label>
                            </div>
                        </RadioGroup>
                    </div>

                    <Separator />

                    {/* Subscribe Button */}
                    <Button
                        onClick={handleSubscribe}
                        className="w-full bg-gradient-primary"
                        size="lg"
                        disabled={isSubscribing}
                    >
                        {isSubscribing ? (
                            <span className="flex items-center space-x-2">
                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                <span>Subscribing...</span>
                            </span>
                        ) : (
                            <span className="flex items-center space-x-2">
                                <Check className="h-4 w-4" />
                                <span>Confirm Subscription</span>
                            </span>
                        )}
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default SubscriptionModal;
