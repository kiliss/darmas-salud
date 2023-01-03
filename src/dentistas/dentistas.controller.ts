import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body } from '@nestjs/common';
import {CreateDentistaDTO} from './dto/dentistas.dto';
import {DentistasService} from './dentistas.service';


@Controller('dentistas')
export class DentistasController {
  constructor(private dentistasService: DentistasService) {}
  @Post("/create")
  async create(@Res() res: any, @Body() createDentistaDTO: CreateDentistaDTO) {
    const dentista = await this.dentistasService.createDentista(createDentistaDTO);
    return res.status(HttpStatus.OK).json({
      message: "dentista creado",
      dentista: dentista
    });
  }
  @Get()
  async getDentistas(@Res() res: any) {
    const dentistas = await this.dentistasService.getDentistas();
    return res.status(HttpStatus.OK).json(dentistas);
  }
}
