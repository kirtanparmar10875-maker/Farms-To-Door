import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ShoppingCart, User, Menu, Store, IndianRupee, HandHelping } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import CartModal from "@/components/modals/CartModal";
import LoginModal from "@/components/modals/LoginModal";
import SignupModal from "@/components/modals/SignupModal";
import { useAuthStore } from "@/store/useAuthStore";
import { useCartStore } from "@/store/useCartStore";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartModalOpen, setCartModalOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [signupModalOpen, setSignupModalOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { authUser, logout, isLoggingOut } = useAuthStore();
  const { cartItems } = useCartStore();

  const isActivePath = (path: string) => location.pathname === path;

  useEffect(() => {
    useCartStore.getState().getCartItems();
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const navItems = [
    { href: "/", label: "Home", icon: Store, auth: false, seller: false },
    { href: "/shop", label: "Shop", icon: ShoppingCart, auth: false, seller: false },
    { href: "/profile", label: "Profile", icon: User, auth: true, seller: false },
    { href: "/pricing", label: "Pricing", icon: IndianRupee, auth: true, seller: true },
  ];

  const helpItems = [
    { href: "/about", label: "About Us" },
    { href: "/start-selling", label: "Start Selling" },
    { href: "/farmer-support", label: "Farmer Support" },
    { href: "/resources", label: "Resources" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-soft">
      <div className="container flex h-16 items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg">
            <img src="./images/logo.webp" alt="farm2doors" />
          </div>
          <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Farm<span className="text-accent">2</span>Doors
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-6 md:ml-8">
          {navItems.map((item) =>
            item.auth ? (
              authUser && (
                item.seller ? (
                  authUser.role === "seller" ? (
                    <Link
                      key={item.href}
                      to={item.href}
                      className={`flex items-center space-x-1 text-sm font-medium transition-smooth hover:text-primary ${isActivePath(item.href)
                        ? "text-primary"
                        : "text-muted-foreground"
                        }`}
                    >
                      {item.icon && <item.icon className="h-4 w-4" />}
                      <span>{item.label}</span>
                    </Link>
                  ) : null
                ) : (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`flex items-center space-x-1 text-sm font-medium transition-smooth hover:text-primary ${isActivePath(item.href)
                      ? "text-primary"
                      : "text-muted-foreground"
                      }`}
                  >
                    {item.icon && <item.icon className="h-4 w-4" />}
                    <span>{item.label}</span>
                  </Link>
                )
              )
            ) : (
              <Link
                key={item.href}
                to={item.href}
                className={`flex items-center space-x-1 text-sm font-medium transition-smooth hover:text-primary ${isActivePath(item.href)
                  ? "text-primary"
                  : "text-muted-foreground"
                  }`}
              >
                {item.icon && <item.icon className="h-4 w-4" />}
                <span>{item.label}</span>
              </Link>
            )
          )}

          {/* Help Dropdown */}
          <div className="relative group">
            <button className="text-sm font-medium text-muted-foreground hover:text-primary flex gap-1">
              <HandHelping />Help
            </button>
            <div className="absolute z-10 hidden w-48 rounded-md border bg-white shadow-md group-hover:block">
              {helpItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="block px-4 py-2 text-sm hover:bg-accent hover:text-primary"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="ml-auto flex items-center space-x-4">
          {/* Cart */}
          {authUser && (
            <Button
              variant="outline"
              size="sm"
              className="relative border border-black/50 hover:bg-black/10 hover:text-black"
              onClick={() => setCartModalOpen(true)}
            >
              <ShoppingCart className="h-4 w-4" />
              {cartItems.length > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full px-auto text-xs">
                  {cartItems.length}
                </Badge>
              )}
            </Button>
          )}

          {/* Auth Buttons */}
          <div className="hidden md:flex md:items-center md:space-x-2">
            {!authUser ? (
              <>
                <Button
                  className="bg-accent hover:bg-accent/80"
                  size="sm"
                  onClick={() => setLoginModalOpen(true)}
                >
                  Login
                </Button>
                <Button
                  size="sm"
                  className="bg-gradient-primary"
                  onClick={() => setSignupModalOpen(true)}
                >
                  Sign Up
                </Button>
              </>
            ) : (
              <Button
                size="sm"
                className="text-white bg-destructive hover:bg-destructive/90"
                onClick={handleLogout}
                disabled={isLoggingOut}
              >
                {isLoggingOut ? "Logging out..." : "Log out"}
              </Button>
            )}
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="sm">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="flex items-center space-x-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded bg-gradient-primary text-primary-foreground">
                    <Store className="h-4 w-4" />
                  </div>
                  <span>Farm2Doors</span>
                </SheetTitle>
                <SheetDescription>
                  From the farm to your doorstep
                </SheetDescription>
              </SheetHeader>

              <div className="grid gap-4 py-6">
                {navItems.map((item) =>
                  item.auth ? (
                    authUser && (
                      <Link
                        key={item.href}
                        to={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center space-x-3 rounded-lg p-3 text-sm font-medium transition-smooth hover:bg-accent ${isActivePath(item.href)
                          ? "bg-accent text-primary"
                          : ""
                          }`}
                      >
                        {item.icon && <item.icon className="h-5 w-5" />}
                        <span>{item.label}</span>
                      </Link>
                    )
                  ) : (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center space-x-3 rounded-lg p-3 text-sm font-medium transition-smooth hover:bg-accent ${isActivePath(item.href)
                        ? "bg-accent text-primary"
                        : ""
                        }`}
                    >
                      {item.icon && <item.icon className="h-5 w-5" />}
                      <span>{item.label}</span>
                    </Link>
                  )
                )}

                {/* Help Items - Mobile */}
                <div className="pt-2 border-t">
                  <span className="block px-3 pt-3 text-sm font-semibold text-muted-foreground">
                    Help
                  </span>
                  {helpItems.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-3 py-2 text-sm hover:bg-accent hover:text-primary"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>

                {/* Auth Buttons - Mobile */}
                <div className="flex flex-col space-y-2 pt-4">
                  {!authUser ? (
                    <>
                      <Button
                        variant="outline"
                        onClick={() => {
                          setIsOpen(false);
                          setLoginModalOpen(true);
                        }}
                      >
                        Login
                      </Button>
                      <Button
                        className="bg-gradient-primary"
                        onClick={() => {
                          setIsOpen(false);
                          setSignupModalOpen(true);
                        }}
                      >
                        Sign Up
                      </Button>
                    </>
                  ) : (
                    <Button
                      className="bg-destructive text-white hover:bg-destructive/90"
                      onClick={handleLogout}
                      disabled={isLoggingOut}
                    >
                      {isLoggingOut ? "Logging out..." : "Log out"}
                    </Button>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Modals */}
      <CartModal open={cartModalOpen} onOpenChange={setCartModalOpen} />
      <LoginModal
        open={loginModalOpen}
        onOpenChange={setLoginModalOpen}
        onSwitchToSignup={() => setSignupModalOpen(true)}
      />
      <SignupModal
        open={signupModalOpen}
        onOpenChange={setSignupModalOpen}
        onSwitchToLogin={() => setLoginModalOpen(true)}
      />
    </nav>
  );
};

export default Navbar;
