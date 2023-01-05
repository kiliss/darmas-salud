import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param } from '@nestjs/common';
import {CreateDentistaDTO} from './dto/dentistas.dto';
import {DentistasService} from './dentistas.service';
import { Dentista } from './interfaces/dentistas.interface';


@Controller('dentistas')
export class DentistasController {
  constructor(private dentistasService: DentistasService) {}

  @Post()
  async create(@Res() res: any, @Body() createDentistaDTO: CreateDentistaDTO) {
    const dentista = await this.dentistasService.createDentista(createDentistaDTO);
    return res.status(HttpStatus.OK).json({
      message: "dentista creado",
      dentista: dentista
    });
  }

  @Delete('/:id')
    delete(@Param('id') id:string): Promise<Dentista> {
    const dentista = this.dentistasService.deleteDentista(id)
    return dentista
  }

  @Get('/:dentistaID')
  async getDentista(@Res() res: any, @Param('dentistaID') dentistaID: string) {
    const dentista = await this.dentistasService.getDentista(dentistaID);
    return res.status(HttpStatus.OK).json(dentista);
  }
  @Delete('/:dentistaID')
  async deleteDentista(@Res() res: any, @Param('dentistaID') dentistaID: string) {
    const dentistaDeleted = await this.dentistasService.deleteDentista(dentistaID);
    return res.status(HttpStatus.OK).json({
      message: "dentista eliminado",
      dentista: dentistaDeleted
    });
  }
  @Put('/:dentistaID')
  async updateDentista(@Res() res: any, @Param('dentistaID') dentistaID: string, @Body() createDentistaDTO: CreateDentistaDTO) {
    const dentistaUpdated = await this.dentistasService.updateDentista(dentistaID, createDentistaDTO);
    return res.status(HttpStatus.OK).json({
      message: "dentista actualizado",
      dentista: dentistaUpdated
    });
  }
}
