import { create } from "zustand";
import axiosInstance from "../lib/axios.ts";
import { toast } from "../hooks/use-toast";

// Types for the auth store
interface User {
    id: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    role: string;
    subscription: string;
    profilePicture?: string;
}

interface SignupData {
    name: string;
    email: string;
    password: string;
    phone: string;
    address: string;
    role: string;
}

interface LoginData {
    email: string;
    password: string;
}

interface UpdateProfileData {
    name?: string;
    email?: string;
    phone?: string;
    address?: string;
    role?: string;
    profilePicture?: string | ArrayBuffer;
}

interface AuthStore {
    authUser: User | null;
    isSigningUp: boolean;
    isLoggingIn: boolean;
    isLoggingOut: boolean;
    isUpdatingProfile: boolean;
    isDeletingUser: boolean;
    isSubscribing: boolean;

    isCheckingAuth: boolean;
    checkAuth: () => Promise<void>;
    signup: (data: SignupData) => Promise<void>;
    login: (data: LoginData) => Promise<void>;
    logout: () => Promise<void>;
    updateProfile: (data: UpdateProfileData) => Promise<void>;
    subscribe: (data: string) => Promise<void>;
    deleteUser: () => Promise<void>;
}

//globle state management store for user auth functionalities
export const useAuthStore = create<AuthStore>((set, get) => ({
    authUser: null,

    isSigningUp: false,
    isLoggingIn: false,
    isLoggingOut: false,
    isUpdatingProfile: false,
    isDeletingUser: false,
    isCheckingAuth: false,
    isSubscribing: false,   

    //function to check if user is authenticated
    checkAuth: async () => {
        set({ isCheckingAuth: true });
        try {
            const res = await axiosInstance.get("/auth/check-auth");
            set({ authUser: res.data });
        } catch (error) {
            set({ authUser: null });
        } finally {
            set({ isCheckingAuth: false });
        }
    },

    //function to send signup data to backend
    signup: async (data: SignupData) => {
        set({ isSigningUp: true });
        try {
            const res = await axiosInstance.post("/auth/signup", data);
            set({ authUser: res.data });
            toast({
                title: "Account created successfully",
                description: "You can now login",
            });
        } catch (error) {
            toast({
                title: "Error",
                description: error.response.data.message,
                variant: "destructive",
            });
        } finally {
            set({ isSigningUp: false });
        }
    },

    //function to send login data to backend
    login: async (data: LoginData) => {
        set({ isLoggingIn: true });
        try {
            const res = await axiosInstance.post("/auth/login", data);
            set({ authUser: res.data });
            toast({
                title: "Logged in successfully",
                description: "You can now start shopping",
            });
        } catch (error) {
            toast({
                title: "Error",
                description: error.response.data.message,
                variant: "destructive",
            });
        } finally {
            set({ isLoggingIn: false });
        }
    },

    //function to logout
    logout: async () => {
        set({ isLoggingOut: true });
        try {
            await axiosInstance.post("/auth/logout");
            set({ authUser: null });
            toast({
                title: "Logged out successfully",
                description: "You can now login",
            });
        } catch (error) {
            toast({
                title: "Error",
                description: error.response.data.message,
                variant: "destructive",
            });
        } finally {
            set({ isLoggingOut: false });
        }
    },

    //function to update the profile of user
    updateProfile: async (data: UpdateProfileData) => {
        set({ isUpdatingProfile: true });
        try {
            const res = await axiosInstance.put("/user/", data);
            set({ authUser: res.data });
            toast({
                title: "Profile updated successfully",
                description: "Your profile has been updated",
            });
        } catch (error) {
            console.log("error in update profile:", error);
            toast({
                title: "Error",
                description: error.response.data.message,
                variant: "destructive",
            });
        } finally {
            set({ isUpdatingProfile: false });
        }
    },

    subscribe: async (subscription : string) => {
        set({ isSubscribing: true });
        try {
            const res = await axiosInstance.put("/user/subscribe", { subscription });
            toast({
                title: "Subscription successful",
                description: "You have successfully subscribed to the plan",
            });
        } catch (error) {
            console.log("error in update profile:", error);
            toast({
                title: "Error",
                description: error.response.data.message,
                variant: "destructive",
            });
        } finally {
            set({ isSubscribing: false });
        }
    },

    deleteUser: async () => {
        set({ isDeletingUser: true });
        try {
            await axiosInstance.delete("/user/");
            set({ authUser: null });
            toast({
                title: "User deleted successfully",
                description: "Your account has been deleted",
            });
        } catch (error) {
            toast({
                title: "Error",
                description: error.response.data.message,
                variant: "destructive",
            });
        } finally {
            set({ isDeletingUser: false });
        }
    },
}));
