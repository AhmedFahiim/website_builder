import { create } from "zustand";

interface BuilderState {
  layout: Array<TSection> | [];
  setLayout: (
    updater: Array<TSection> | ((prev: Array<TSection>) => Array<TSection>)
  ) => void;
}

export const useDesignLayout = create<BuilderState>((set) => ({
  layout: [],
  setLayout: (updater) =>
    set((state) => ({
      layout: typeof updater === "function" ? updater(state.layout) : updater,
    })),
}));
