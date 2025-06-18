import { create } from "zustand";

interface BuilderState {
  projects: Array<TProject> | [];
  setProjects: (projects: Array<TProject> | []) => void;
}

export const useUserProjects = create<BuilderState>((set) => ({
  projects: [],
  setProjects: (projects) => set({ projects }),
}));
