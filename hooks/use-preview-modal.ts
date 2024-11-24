import { Product } from "@/types";
import { create } from "zustand";


interface PreviewModalStore {
    isOpen: boolean;
    onClose: () => void;
    data?: Product;
    onOpen: (data: Product) => void;
}

const usePreviewModal = create<PreviewModalStore>((set) => ({
    isOpen: false,
    onOpen: (data: Product) => set({ isOpen: true, data }),
    onClose: () => set({ isOpen: false, data: undefined }),
    data: undefined
}))

export default usePreviewModal;