import { Schema, trusted } from "mongoose";


export const DentistaSchema = new Schema({
id_sucursal: {
  type: Number,
  required: true,
},
rut: {
   type: String,
  required: true,
},
nombre:{
  type: String,
  required: true
},
apellidos: {
  type: String,
  required: true
},
telefono: {
  type: String,
  required: true
},
celular:{
  type: String,
  default: null
},
direccion: {
  type: String,
  required: true,
},
email: {
  type: String,
  required: true,
  unique: true
},
nombre_usuario: {
  type: String,
  required: true
},
password: {
  type: String,
  required: true
},
agenda_online: {
  type: Boolean,
  default: true,
},
ciudad: {
  type: String,
  required: true,
},
duracion_consulta: {
  type: Number,
  required: true,
}
})