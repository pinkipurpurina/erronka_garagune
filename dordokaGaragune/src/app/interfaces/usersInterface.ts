export interface Monitorea {
  erabiltzaileak: Erabiltzailea[];
  monitoreIzena: string;
}

export interface Erabiltzailea {
  erabiltzaileIzena: string;
  kategoriak: Kategoria[];
}

export interface Kategoria {
  KategoriaIkono: string;
  kategoriaIzena: string;
  piktogramak: Piktograma[];
}

export interface Piktograma {
  piktogramaHelbidea: string;
  piktogramaIzena: string;
}
export interface MyData {
  name: string;
  filepath: string;
  size: number;
} 