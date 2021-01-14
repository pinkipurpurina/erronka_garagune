export interface Monitorea {
  erabiltzaileak: Erabiltzailea[];
  monitoreIzena: string;
}

export interface Erabiltzailea {
  erabiltzaileIzena: string;
  id?: string;
  kategoriak: Kategoria[];
}

export interface Kategoria {
  KategoriaIkono: string;
  idKategoria?: string;
  kategoriaIzena: string;
  piktogramak: Piktograma[];
}

export interface Piktograma {
  idPiktograma?: string;
  piktogramaHelbidea: string;
  piktogramaIzena: string;
}
export interface MyData {
  name: string;
  filepath: string;
  size: number;
}