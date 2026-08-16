import { create } from "zustand";
import axiosInstance from "../lib/axios.ts";
import { toast } from "../hooks/use-toast";

interface CartItem {
    _id?: string;
    name: string;
    price: number;
    quantity: string;
    description: string;
    category: string;
    image: any;
    currQuantity: number;
}

interface CartStore {
    cartItems: CartItem[];
    getCartItems: () => Promise<void>;
    addToCart: (item: CartItem) => void;
    removeFromCart: (id: string) => void;
    clearCart: () => void;
    handleQuantityChange: (id: string, quantity: number) => void;
    isAddingToCart: boolean;
    isRemovingFromCart: boolean;
    isClearingCart: boolean;
    isGettingCartItems: boolean;
}

export const useCartStore = create<CartStore>((set, get) => ({
    cartItems: [],
    isAddingToCart: false,
    isRemovingFromCart: false,
    isClearingCart: false,
    isGettingCartItems: false,

    getCartItems: async () => {
        set({ isGettingCartItems: true });
        try {
            const res = await axiosInstance.get("/cart");
            set({ cartItems: res.data.map((item: CartItem) => ({ ...item, currQuantity: 1 })) });
        } catch (error) {
            toast({
                title: "Error",
                description: error.response.data.message,
                variant: "destructive",
            });
        } finally {
            set({ isGettingCartItems: false });
        }
    },
    addToCart: async (item: CartItem) => {
        set({ isAddingToCart: true });
        try {
            const res = await axiosInstance.post(`/cart/${item._id}`);
            set({ cartItems: [...get().cartItems, { ...item, currQuantity: 1 }] });
        } catch (error) {
            toast({
                title: "Error",
                description: error.response.data.message,
                variant: "destructive",
            });
        } finally {
            set({ isAddingToCart: false });
        }
    },
    removeFromCart: async (id: string) => {
        set({ isRemovingFromCart: true });
        try {
            await axiosInstance.delete(`/cart/${id}`);
            set({ cartItems: get().cartItems.filter((item) => item._id !== id) });
        } catch (error) {
            toast({
                title: "Error",
                description: error.response.data.message,
                variant: "destructive",
            });
        } finally {
            set({ isRemovingFromCart: false });
        }
    },
    clearCart: async () => {
        set({ isClearingCart: true });
        try {
            await axiosInstance.delete("/cart");
            set({ cartItems: [] });
        } catch (error) {
            toast({
                title: "Error",
                description: error.response.data.message,
                variant: "destructive",
            });
        } finally {
            set({ isClearingCart: false });
        }
    },
    handleQuantityChange: async (id: string, quantity: number) => {
        set({ cartItems: get().cartItems.map((item) => (item._id === id ? { ...item, currQuantity: item.currQuantity + quantity } : item)) });
    },
}));
