import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ArrowLeft, Heart, Share2, MapPin, User, Loader } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import axiosInstance from "../lib/axios";
import { toast } from "@/hooks/use-toast";
import { useCartStore } from "@/store/useCartStore";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({
    _id: "",
    name: "",
    price: 0,
    image: "",
    category: "",
    description: "",
    quantity: 0,
    uploadedBy: {
      name: "",
      address: "",
      email: "",
    },
  });
  const [loading, setLoading] = useState(true);
  const { addToCart, isAddingToCart } = useCartStore();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get(`/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to fetch product",
        });
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (isAddingToCart) return;
    addToCart(product);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8">
        {/* Back Button */}
        <Button variant="outline" className="mb-6" onClick={() => window.history.back()}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Shop
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-muted rounded-lg overflow-hidden">
              <img
                src={product?.image || "/images/product.webp"}
                alt={product?.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary" className="bg-accent text-white">{product?.category}</Badge>
              </div>
              <h1 className="text-3xl font-bold mb-4">{product?.name}</h1>
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-3xl font-bold text-primary">₹{product?.price}</span>
              </div>
              <div className="text-sm font-medium mb-2 block">Quantity : {product.quantity} Size available</div>
            </div>

            {/* Seller Info */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center space-x-2">
                  <User className="h-5 w-5" />
                  <span>Seller Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="font-semibold">{product?.uploadedBy?.name}</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-1" />
                    {product?.uploadedBy?.address}
                  </div>
                  <p className="text-sm text-muted-foreground">{product?.uploadedBy?.email}</p>
                </div>
              </CardContent>
            </Card>

            <div className="flex space-x-3">
              <Button onClick={handleAddToCart} className="flex-1 bg-gradient-primary" disabled={isAddingToCart}>
                {isAddingToCart ? "Adding to cart..." : "Add to Cart"}
              </Button>
              <Button variant="outline" size="icon" onClick={() => { navigator.clipboard.writeText(window.location.href); toast({ title: "Copied to clipboard", description: "Product link copied to clipboard" }) }}>
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
            <Separator />
            <div>
              <h3 className="text-lg font-semibold mb-3">Description</h3>
              <p className="text-muted-foreground leading-relaxed">{product.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;