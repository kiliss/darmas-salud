import { Document } from 'mongoose';
export interface Cita extends Document {
  readonly fecha: Date;
  readonly horario_inicial: number;
  readonly horario_final: number;
  readonly paciente: string;
  readonly dentista: string;
  readonly estado_citas: string;
  readonly situacion: string;
  readonly descripcion: string;
  readonly id_estado_cita: number;
  readonly isActive: boolean;
}
