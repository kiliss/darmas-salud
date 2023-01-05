import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Cita } from './interfaces/cita.interface';
import { CreateCitasDTO } from './dto/citas.dto';

@Injectable()
export class CitasService {
  constructor(@InjectModel('Cita') private readonly citaModel: Model<Cita>) {}

  async getCitas(): Promise<Cita[]> {
    const Citas = await this.citaModel.find({ isActive: true });
    return Citas;
  }

  async getCita(CitaID: string): Promise<Cita> {
    let Cita;
    if (CitaID.match(/^[0-9a-fA-F]{24}$/)) {
      Cita = await this.citaModel.findById(CitaID);
    }
    if (!Cita) {
      throw new NotFoundException('Cita no encontrada');
    }
    return Cita;
  }

  async createCita(createCitaDTO: CreateCitasDTO): Promise<Cita> {
    const Cita = new this.citaModel(createCitaDTO);
    return await Cita.save();
  }

  async deleteCita(CitaID: string): Promise<Cita> {
    let CitaDeleted;
    if (CitaID.match(/^[0-9a-fA-F]{24}$/)) {
      CitaDeleted = await this.citaModel.findByIdAndDelete(CitaID);
    }
    if (!CitaDeleted) {
      throw new NotFoundException('Cita no encontrada');
    }
    return CitaDeleted;
  }
  async updateCita(
    CitaID: string,
    createCitaDTO: CreateCitasDTO,
  ): Promise<Cita> {
    let CitaUpdated;
    if (CitaID.match(/^[0-9a-fA-F]{24}$/)) {
      CitaUpdated = await this.citaModel.findByIdAndUpdate(
        CitaID,
        createCitaDTO,
        { new: true },
      );
    }
    if (!CitaUpdated) {
      throw new NotFoundException('Cita no encontrada');
    }
    return CitaUpdated;
  }
}
