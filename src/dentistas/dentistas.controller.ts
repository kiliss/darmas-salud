import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body } from '@nestjs/common';
import {CreateDentistaDTO} from './dto/dentistas.dto';

@Controller('dentistas')
export class DentistasController {
  @Post("/create")
  create(@Res() res: any, @Body() createDentistaDTO: CreateDentistaDTO) {
    console.log(createDentistaDTO);
    return res.status(HttpStatus.OK).json({
      message: "dentista creado"
    });
  }
}
