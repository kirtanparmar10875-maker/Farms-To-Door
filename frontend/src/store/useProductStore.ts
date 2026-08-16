import { create } from "zustand";
import axiosInstance from "../lib/axios.ts";
import { toast } from "../hooks/use-toast";

interface Product {
    _id?: string;
    name: string;
    price: number;
    quantity: number;
    description: string;
    category: string;
    image: any;
}

interface ProductStore {
    myProducts: Product[];
    isAddingProduct: boolean;
    isRemovingProduct: boolean;
    isUpdatingProduct: boolean;
    isGettingMyProducts: boolean;
    getMyProducts: () => Promise<void>;
    addProduct: (product: Product) => void;
    removeProduct: (id: string) => void;
    updateProduct: (product: Product) => void;
}

export const useProductStore = create<ProductStore>((set, get) => ({
    myProducts: [],
    isAddingProduct: false,
    isRemovingProduct: false,
    isUpdatingProduct: false,
    isGettingMyProducts: false,

    getMyProducts: async () => {
        set({ isGettingMyProducts: true });
        try {
            const res = await axiosInstance.get("/products/my-products");
            set({ myProducts: res.data });
        } catch (error) {
            toast({
                title: "Error",
                description: error.response.data.message,
                variant: "destructive",
            });
        } finally {
            set({ isGettingMyProducts: false });
        }
    },
    addProduct: async (product) => {
        set({ isAddingProduct: true });
        try {
            const res = await axiosInstance.post("/products", product);
            set({ myProducts: [...get().myProducts, res.data] });
        } catch (error) {
            toast({
                title: "Error",
                description: error.response.data.message,
                variant: "destructive",
            });
        } finally {
            set({ isAddingProduct: false });
        }
    },
    removeProduct: async (id) => {
        set({ isRemovingProduct: true });
        try {
            await axiosInstance.delete(`/products/${id}`);
            set({ myProducts: get().myProducts.filter((product) => product._id !== id) });
        } catch (error) {
            toast({
                title: "Error",
                description: error.response.data.message,
                variant: "destructive",
            });
        } finally {
            set({ isRemovingProduct: false });
        }
    },
    updateProduct: async (product) => {
        set({ isUpdatingProduct: true });
        try {
            const res = await axiosInstance.put(`/products/${product._id}`, product);
            set({ myProducts: get().myProducts.map((p) => (p._id === product._id ? product : p)) });
        } catch (error) {
            toast({
                title: "Error",
                description: error.response.data.message,
                variant: "destructive",
            });
        } finally {
            set({ isUpdatingProduct: false });
        }
    },
}));
