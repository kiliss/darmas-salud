import {  Injectable, NotFoundException } from '@nestjs/common';
import {Model} from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';
import {Dentista} from './interfaces/dentistas.interface';
import {DentistaDto} from './dto/dentistas.dto';


@Injectable()
export class DentistasService {
  constructor(@InjectModel('Dentista') private readonly dentistaModel: Model<Dentista>) {}

async getDentistas(): Promise<Dentista[]> {
    const dentistas = await this.dentistaModel.find({isActive: true});
    return dentistas;
  }

async getDentistaId(id: string): Promise<Dentista> {
    const dentista = await this.dentistaModel.findById(id);
    if(!dentista){
      throw new NotFoundException();
    }
    return dentista
  }

async createDentista(data: DentistaDto): Promise<Dentista | Error> {
  try{
    const dentista = new this.dentistaModel(data);
    await dentista.save()
    return dentista
  } catch(error){
    throw new Error(error)
  }
}

async updateDentista(dentistaID: string, data: DentistaDto): Promise<Dentista | Error> {
 try {
  const dentista = await this.dentistaModel.findByIdAndUpdate(dentistaID, data)
  if(!dentista){
    throw new NotFoundException()
  }
  await dentista.save()
  return dentista
 } catch (error) {
  throw new Error(error)
 }
}

  async deleteDentista(dentistaID: string): Promise<Dentista> {
    try {
      const dentista = await this.dentistaModel.findById(dentistaID);
      if(!dentista){
        throw new NotFoundException()
      }
      dentista.agenda_online = false;
      await dentista.save()
      return dentista;
      
    } catch (error) {
      return error
    }
  }

  async auth(nombre_usuario: string): Promise<Dentista | undefined> {
    try {
      const dentista = await this.dentistaModel.findOne({nombre_usuario});
      console.log(dentista)
  
      if(!dentista){
        throw new NotFoundException()
      }
      return dentista

    } catch (error) {
      return error
    }
  }

}

