import { create } from "zustand";
import axiosInstance from "../lib/axios.ts";
import { toast } from "../hooks/use-toast";

interface UserOrderStore {
    placedOrders: any[];
    receivedOrders: any[];
    isGettingPlacedOrders: boolean;
    isGettingReceivedOrders: boolean;
    isCreatingOrder: boolean;
    isUpdatingOrderStatus: boolean;

    getPlacedOrders: () => Promise<void>;
    getReceivedOrders: () => Promise<void>;
    createOrder: (order: any) => Promise<void>;
    updateOrderStatus: (id: string, status: string) => Promise<void>;
}

export const useOrderStore = create<UserOrderStore>((set, get) => ({
    placedOrders: [],
    receivedOrders: [],
    isGettingPlacedOrders: false,
    isGettingReceivedOrders: false,
    isCreatingOrder: false,
    isUpdatingOrderStatus: false,

    getPlacedOrders: async () => {
        set({ isGettingPlacedOrders: true });
        try {
            const res = await axiosInstance.get("/orders/placed");
            set({ placedOrders: res.data });
        } catch (error) {
            toast({
                title: "Error",
                description: error.response.data.message,
                variant: "destructive",
            });
        } finally {
            set({ isGettingPlacedOrders: false });
        }
    },
    getReceivedOrders: async () => {
        set({ isGettingReceivedOrders: true });
        try {
            const res = await axiosInstance.get("/orders/received");
            set({ receivedOrders: res.data });
        } catch (error) {
            toast({
                title: "Error",
                description: error.response.data.message,
                variant: "destructive",
            });
        } finally {
            set({ isGettingReceivedOrders: false });
        }
    },
    createOrder: async (order: any) => {
        set({ isCreatingOrder: true });
        try {
            const res = await axiosInstance.post("/orders", order);
            set({ placedOrders: res.data });
            toast({
                title: "Order created successfully",
                description: "The order has been created",
                variant: "default",
            });
        } catch (error) {
            toast({
                title: "Error",
                description: error.response.data.message,
                variant: "destructive",
            });
        } finally {
            set({ isCreatingOrder: false });
        }
    },
    updateOrderStatus: async (id: string, status: string) => {
        set({ isUpdatingOrderStatus: true });
        try {
            const res = await axiosInstance.put(`/orders/${id}`, { status });
            set({ placedOrders: get().placedOrders.map((p) => (p._id === id ? res.data : p)) });
            set({ receivedOrders: get().receivedOrders.map((p) => (p._id === id ? res.data : p)) });
            toast({
                title: "Order status updated successfully",
                description: "The order status has been updated",
                variant: "default",
            });
        } catch (error) {
            toast({
                title: "Error",
                description: error.response.data.message,
                variant: "destructive",
            });
        } finally {
            set({ isUpdatingOrderStatus: false });
        }
    },
}));

