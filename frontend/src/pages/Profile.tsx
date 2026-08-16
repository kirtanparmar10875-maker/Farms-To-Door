import { useState, useEffect } from "react";
import { User, Package, ShoppingBag, Plus, Edit, Trash2, Loader, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ProductModal from "@/components/modals/ProductModal";
import { useAuthStore } from "@/store/useAuthStore";
import { useNavigate } from "react-router-dom";
import { useProductStore } from "@/store/useProductStore";
import { useOrderStore } from "@/store/useOrderStore";


const Profile = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [productModalOpen, setProductModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const { authUser, updateProfile, deleteUser, isUpdatingProfile, isDeletingUser } = useAuthStore();
  const navigate = useNavigate();
  const { myProducts, getMyProducts, addProduct, removeProduct, updateProduct, isGettingMyProducts, isAddingProduct, isRemovingProduct, isUpdatingProduct } = useProductStore();
  const { placedOrders, receivedOrders, getPlacedOrders, getReceivedOrders, isGettingPlacedOrders, isGettingReceivedOrders, updateOrderStatus } = useOrderStore();

  const [user, setUser] = useState({
    name: authUser.name,
    email: authUser.email,
    phone: authUser.phone,
    address: authUser.address,
    role: authUser.role,
    profilePicture: authUser.profilePicture
  });


  useEffect(() => {
    getMyProducts();
    getPlacedOrders();
    getReceivedOrders();
  }, []);

  const handleUserInputChange = (field: string, value: string | ArrayBuffer | null) => {
    setUser(prev => ({ ...prev, [field]: value }));
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = async () => {
      const base64Image = reader.result;
      handleUserInputChange("profilePicture", base64Image);
    };
  }

  const handleUserUpdate = () => {
    updateProfile(user);
  };

  const handleDeleteUser = () => {
    deleteUser();
    navigate("/");
  };

  const handleAddProduct = () => {
    setEditingProduct(null);
    setProductModalOpen(true);
  };

  const handleEditProduct = (product: any) => {
    setEditingProduct(product);
    setProductModalOpen(true);
  };

  const handleSaveProduct = async (product: any) => {
    if (editingProduct) {
      await updateProduct(product);
    } else {
      await addProduct(product);
    }
    setProductModalOpen(false);
  };

  const handleRemoveProduct = (id: string) => {
    removeProduct(id);
  };

  const handleOrderStatusChange = (orderId: string, newStatus: string) => {
    updateOrderStatus(orderId, newStatus);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Profile</h1>
          <p className="text-muted-foreground text-lg">Manage your account and farm products</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className={`grid grid-cols-2 gap-3 w-full pb-4 h-auto ${authUser.role === "seller" ? "lg:grid-cols-4" : "lg:grid-cols-2"}`}>
            <TabsTrigger
              value="profile"
              className="flex items-center justify-center space-x-2 px-3 py-2 text-sm text-center border border-primary/50 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-md w-full"
            >
              <User className="h-4 w-4" />
              <span>Profile</span>
            </TabsTrigger>

            {authUser.role === "seller" && (
              <><TabsTrigger
                value="products"
                className="flex items-center justify-center space-x-2 px-3 py-2 text-sm text-center border border-primary/50 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-md w-full"
              >
                <Package className="h-4 w-4" />
                <span>My Products</span>
              </TabsTrigger>

                <TabsTrigger
                  value="orders-received"
                  className="flex items-center justify-center space-x-2 px-3 py-2 text-sm text-center border border-primary/50 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-md w-full"
                >
                  <ShoppingBag className="h-4 w-4" />
                  <span>Orders Received</span>
                </TabsTrigger></>
            )}

            <TabsTrigger
              value="orders-placed"
              className="flex items-center justify-center space-x-2 px-3 py-2 text-sm text-center border border-primary/50 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-md w-full"
            >
              <ShoppingBag className="h-4 w-4" />
              <span>Orders Placed</span>
            </TabsTrigger>
          </TabsList>


          {/* Profile Info Tab */}
          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>Update your personal details and contact information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="h-20 w-20 rounded-full bg-muted overflow-hidden">
                    <img src={user.profilePicture || "/images/avatar.png"} alt="Profile" className="w-full h-full object-cover" />
                  </div>
                  <label htmlFor="profilePicture" className="cursor-pointer text-black border border-black px-2 py-1 rounded-md hover:bg-black/10">
                    Change Photo
                  </label>
                  <input type="file" id="profilePicture" className="hidden" onChange={handleImageChange} />
                </div>

                {authUser.role === "seller" && (
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 border rounded-lg shadow-sm bg-white dark:bg-muted">
                  <div className="flex items-start sm:items-center gap-3">
                    <BadgeCheck className="text-green-500 w-5 h-5 mt-1 sm:mt-0" />
                    <div>
                      <p className="text-sm text-muted-foreground">Current Plan</p>
                      <p className="text-lg font-semibold capitalize">
                        {authUser.subscription || "Free"}
                      </p>
                    </div>
                  </div>
                  <Button
                    className="w-full sm:w-auto bg-gradient-primary hover:bg-gradient-primary/90"
                    onClick={() => navigate("/pricing")}
                  >
                    Change Plan
                  </Button>
                </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" defaultValue={user.name} onChange={(e) => handleUserInputChange("name", e.target.value)} />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue={user.email} onChange={(e) => handleUserInputChange("email", e.target.value)} />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" defaultValue={user.phone} onChange={(e) => handleUserInputChange("phone", e.target.value)} />
                  </div>
                  <div>
                    <Label htmlFor="role">Account Type &nbsp; <span className="text-red-500 text-xs italic font-semibold">Seller cannot change their account type</span></Label>
                    <Select
                      value={user.role}
                      onValueChange={(value) => handleUserInputChange("role", value)}
                      disabled={authUser.role === "seller"}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select account type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="buyer">Buyer</SelectItem>
                        <SelectItem value="seller">Seller</SelectItem>
                      </SelectContent>
                    </Select>

                  </div>
                </div>

                <div>
                  <Label htmlFor="address">Address</Label>
                  <Textarea id="address" defaultValue={user.address} onChange={(e) => handleUserInputChange("address", e.target.value)} />
                </div>

                <div className="flex items-center space-x-4">
                  <Button className="bg-gradient-primary hover:bg-gradient-primary/90" onClick={handleUserUpdate} disabled={isUpdatingProfile}>{isUpdatingProfile ? "Saving..." : "Save Changes"}</Button>
                  <Button className="bg-destructive hover:bg-destructive/90" onClick={handleDeleteUser} disabled={isDeletingUser}>{isDeletingUser ? "Deleting..." : "Delete Account"}</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Products Tab */}
          <TabsContent value="products" className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
              <h2 className="text-2xl font-bold">My Products</h2>
              <Button className="bg-gradient-primary w-full sm:w-auto" onClick={handleAddProduct}>
                <Plus className="h-4 w-4 mr-2" />
                Add Product
              </Button>
            </div>
            {isGettingMyProducts ? (
              <div className="flex h-full w-full items-center justify-center">
                <Loader className="h-8 w-8 animate-spin" />
              </div>
            ) : myProducts.length == 0 ? (<div className="flex h-full w-full items-center justify-center">No Products Uploaded</div>) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {myProducts.map((product) => (
                  <Card key={product._id} className="group hover:shadow-medium transition-smooth">
                    <CardHeader className="p-0">
                      <div className="aspect-square bg-muted rounded-t-lg overflow-hidden">
                        <img src={product.image || "/images/product.webp"} alt={product.name} className="w-full h-full object-cover" />
                      </div>
                    </CardHeader>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="text-lg">{product.name}</CardTitle>
                        <Badge className="bg-accent text-primary-foreground">
                          {product.category}
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-primary">₹{product.price}</span>
                        <span className="text-sm text-muted-foreground">{product.quantity} in stock</span>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-2 mt-4">
                        <Button
                          className="flex-1 bg-gradient-primary hover:opacity-90"
                          onClick={() => handleEditProduct(product)}
                        >
                          <Edit className="h-4 w-4 mr-2" />
                          Edit
                        </Button>
                        <Button variant="outline" className="text-white bg-destructive hover:bg-destructive/90 disabled:opacity-50" onClick={() => handleRemoveProduct(product._id)} disabled={isRemovingProduct}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          {/* Orders Received Tab */}
          <TabsContent value="orders-received" className="space-y-6">
            <h2 className="text-2xl font-bold">Orders Received</h2>

            <div className="space-y-4">
              {isGettingReceivedOrders ? (
                <div className="flex h-full w-full items-center justify-center">
                  <Loader className="h-8 w-8 animate-spin" />
                </div>
              ) : receivedOrders.length == 0 ? (<div className="flex h-full w-full items-center justify-center">No Orders Received</div>) : (
                receivedOrders.map((order) => (
                  <Card key={order._id}>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-lg text-primary">{order.product.name}</h3>
                          <p className="text-muted-foreground">Buyer: {order.sender.name}</p>
                          <p className="text-sm text-muted-foreground">Date: {order.createdAt}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-xl">₹{order.totalAmount}</p>
                          <p className="text-sm text-muted-foreground">Qty: {order.quantity}</p>
                          <div className="mt-2">
                            <Select
                              value={order.status}
                              onValueChange={(value) => handleOrderStatusChange(order._id, value)}
                            >
                              <SelectTrigger className="w-32">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="pending">Pending</SelectItem>
                                <SelectItem value="confirmed">Confirmed</SelectItem>
                                <SelectItem value="packed">Packed</SelectItem>
                                <SelectItem value="delivered">Delivered</SelectItem>
                                <SelectItem value="cancelled">Cancelled</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )))}
            </div>
          </TabsContent>

          {/* Orders Placed Tab */}
          <TabsContent value="orders-placed" className="space-y-6">
            <h2 className="text-2xl font-bold">Orders Placed</h2>

            <div className="space-y-4">
              {isGettingPlacedOrders ? (
                <div className="flex h-full w-full items-center justify-center">
                  <Loader className="h-8 w-8 animate-spin" />
                </div>
              ) : placedOrders.length == 0 ? (<div className="flex h-full w-full items-center justify-center">No Orders Placed</div>) : (
                placedOrders.map((order) => (
                  <Card key={order._id}>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-lg text-primary">{order.product.name}</h3>
                          <p className="text-muted-foreground">Seller: {order.receiver.name}</p>
                          <p className="text-sm text-muted-foreground">Date: {order.createdAt}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-xl">₹{order.totalAmount}</p>
                          <p className="text-sm text-muted-foreground">Qty: {order.quantity}</p>
                          <Badge className="bg-accent text-primary-foreground">
                            {order.status}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Product Modal */}
      <ProductModal
        open={productModalOpen}
        onOpenChange={setProductModalOpen}
        product={editingProduct}
        onSave={handleSaveProduct}
        isHandling={isAddingProduct || isUpdatingProduct}
      />
    </div>
  );
};

export default Profile;