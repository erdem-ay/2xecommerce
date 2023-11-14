import { create } from 'zustand'
import { createProductStore } from "./products";
import { createUserStore } from "./user";
import { persist, createJSONStorage } from "zustand/middleware";



export const useStore = create(

  persist(
    (...args) => ({
      ...createProductStore(...args),
      ...createUserStore(...args),
      hydrateStore: (data) => {
        const [set] = args;
        set({ ...data });
      },
    }),
    {
      name: 'productStorage',
      storage: createJSONStorage(() => sessionStorage), 
      //  storage: createJSONStorage(() => localStorage),
    }
  )
);