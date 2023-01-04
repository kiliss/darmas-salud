import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param } from '@nestjs/common';
import { DentistaDto} from './dto/dentistas.dto';
import {DentistasService} from './dentistas.service';
import { Dentista } from './interfaces/dentistas.interface';


@Controller('dentistas')
export class DentistasController {
  constructor(private dentistasService: DentistasService) {}

  @Get('/')
  getDentistas(): Promise<Dentista[]> {
    const dentistas = this.dentistasService.getDentistas();
    return dentistas
  }

  @Get('/:id')
  findOne(@Param('id') id: string): Promise<Dentista> {
    const dentista = this.dentistasService.getDentistaId(id);
    return dentista
  }

  @Post('/')
  create(@Body() data: DentistaDto): Promise<Dentista | Error> {
     const dentista = this.dentistasService.createDentista(data);
      return dentista
    }

  @Put('/:id')
  update(@Body() data: DentistaDto, @Param('id') id: string): Promise<Dentista | Error> {
    const dentista = this.dentistasService.updateDentista(id, data)
    return dentista
  }

  @Delete('/:id')
    delete(@Param('id') id:string): Promise<Dentista> {
    const dentista = this.dentistasService.deleteDentista(id)
    return dentista
  }

}
