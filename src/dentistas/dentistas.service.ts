import { Injectable } from '@nestjs/common';
import {Model} from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';
import {Dentista} from './interfaces/dentistas.interface';
import {CreateDentistaDTO} from './dto/dentistas.dto';

@Injectable()
export class DentistasService {
  constructor(@InjectModel('Dentista') private readonly dentistaModel: Model<Dentista>) {}

  async getDentistas(): Promise<Dentista[]> {
    const dentistas = await this.dentistaModel.find();
    return dentistas;
  }
  // async getDentista(dentistaID: string): Promise<Dentista> {
  //   const dentista = await this.dentistaModel.findById(dentistaID);
  //   return dentista;
  // }
  async createDentista(createDentistaDTO: CreateDentistaDTO): Promise<Dentista> {
    const dentista = new this.dentistaModel(createDentistaDTO);
    return await dentista.save();
  }
  // async deleteDentista(dentistaID: string): Promise<Dentista> {
  //   const dentistaDeleted = await this.dentistaModel.findById(dentistaID);
  //   return dentistaDeleted;
  // }
  // async updateDentista(dentistaID: string, createDentistaDTO: CreateDentistaDTO): Promise<Dentista> {
  //   const dentistaUpdated = await this.dentistaModel.findByIdAndUpdate(dentistaID, createDentistaDTO, {new: true});
  //   return dentistaUpdated;
  // }
}

