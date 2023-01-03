import { Document } from 'mongoose';
export interface Dentista extends Document {
  nombre: string;
  apellido: string;
  telefono: string;
  direccion: string;
  email: string;
  password: string;
  sexo: string;
}
