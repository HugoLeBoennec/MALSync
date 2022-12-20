import { nordtheme } from './nordtheme';

export type Theme = {
  name: string;
  base: 'light' | 'dark';
  colors: { [key: string]: string };
};

const themes: { [key: string]: Theme } = { nordtheme };

export const themeOptions = Object.keys(themes).map(key => ({
  title: themes[key].name,
  value: key,
}));

export const getThemeByKey = (key: string) => themes[key];
