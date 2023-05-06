import { create } from "zustand";

interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string | null;
  searchInput?: string | null;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setSortOrder: (sortOrder: string) => void;
  setSearchInput: (searchInput: string) => void;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setSearchInput: (searchInput) => set(() => ({ gameQuery: { searchInput } })),
  setSortOrder: (sortOrder) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder } })),
  setGenreId: (genreId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),
  setPlatformId: (platformId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platformId } })),
}));

export default useGameQueryStore;
