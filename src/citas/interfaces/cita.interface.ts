import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaTypes, Types, Document } from 'mongoose';
export interface Cita extends Document {
  nombre_paciente: string;
  hora_inicio: string;
  hora_fin: string;
  duracion: number;
  nombre_dentista: string;
  fecha: string;
  id_estado: number;
  nombre_estado: string;
  id_situacion: number;
  descripcion_situacion: string;
}