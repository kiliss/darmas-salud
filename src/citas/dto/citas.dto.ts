export class CreateCitasDTO {
  fecha: Date;
  horario_inicial: number;
  horario_final: number;
  paciente: string;
  dentista: string;
  estado_citas: string;
  situacion: string;
  descripcion: string;
  id_estado_cita: number;
  isActive: boolean;
}
