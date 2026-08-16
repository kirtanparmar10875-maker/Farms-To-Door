import { useState } from "react";
import { ShoppingCart, Trash2, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import CheckoutModal from "./CheckoutModal";
import { useCartStore } from "@/store/useCartStore";


interface CartModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CartModal = ({ open, onOpenChange }: CartModalProps) => {
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const { cartItems, removeFromCart, isRemovingFromCart, handleQuantityChange } = useCartStore();

  const updateQuantity = (id: string, i: number) => {
    handleQuantityChange(id, i);
  };

  const removeItem = (id: string) => {
    removeFromCart(id);
  };

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.currQuantity), 0);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <ShoppingCart className="h-5 w-5" />
            <span>Shopping Cart</span>
          </DialogTitle>
          <DialogDescription>
            Review your items and proceed to checkout
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 max-h-[60vh] sm:max-h-96 overflow-y-auto pr-2">
          {cartItems.length === 0 ? (
            <div className="text-center py-8">
              <ShoppingCart className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground">Your cart is empty</p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item._id} className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 p-4 border border-black/50 rounded-lg">
                <div className="flex items-center space-x-4 w-full sm:w-auto">
                  <img
                    src={item.image || "/images/product.webp"}
                    alt={item.name}
                    className="h-16 w-16 rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium truncate">{item.name}</h4>
                    <p className="text-sm text-muted-foreground truncate">{item.quantity}</p>
                    <p className="font-bold text-primary">₹{item.price}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between sm:justify-start space-x-2 w-full sm:w-auto">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => updateQuantity(item._id, -1)}
                  >
                    <Minus className="h-3 w-3" />
                  </Button>
                  <Badge variant="secondary">{item.currQuantity}</Badge>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => updateQuantity(item._id, 1)}
                  >
                    <Plus className="h-3 w-3" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-destructive hover:text-destructive"
                    onClick={() => removeItem(item._id)}
                    disabled={isRemovingFromCart}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <>
            <Separator />
            <div className="space-y-4">
              <div className="flex justify-between items-center font-bold text-lg">
                <span>Total:</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
              <Button
                className="w-full bg-gradient-primary"
                size="lg"
                onClick={() => { setCheckoutModalOpen(true); onOpenChange(false) }}
              >
                Proceed to Checkout
              </Button>
            </div>
          </>
        )}
      </DialogContent>

      {/* Checkout Modal */}
      <CheckoutModal
        open={checkoutModalOpen}
        onOpenChange={setCheckoutModalOpen}
        total={total}
      />
    </Dialog>
  );
};

export default CartModal;