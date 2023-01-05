import { Schema } from 'mongoose';

export const CitasSchema = new Schema({
  fecha: {
    type: Date,
    required: true,
  },
  horario_inicial: {
    type: Number,
    required: true,
  },
  horario_final: {
    type: Number,
    required: true,
  },
  paciente: {
    type: String,
    required: true,
  },
  dentista: {
    type: String,
    required: true,
  },
  estado_citas: {
    type: String,
    required: true,
  },
  situacion: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  id_estado_cita: {
    type: Number,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});
