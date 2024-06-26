import { defineStore } from 'pinia';
export const useThemeStore = defineStore({
    id: 'theme',
    state: () => ({
      theme: localStorage.getItem('theme') || 'dark',
    }),
    actions: {
      setTheme(theme) {
        this.theme = theme;
        localStorage.setItem('theme', theme); 
      },
    },
  });
