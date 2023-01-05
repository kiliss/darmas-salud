import { Schema } from "mongoose";

export const DentistasSchema = new Schema({
  nombre: String,
  apellido: String,
  telefono: Number,
  direccion: String,
  email: String,
  password: String,
  sexo: String
})
