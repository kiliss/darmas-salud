import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { CitasService } from './citas.service';
import { CreateCitasDTO } from './dto/citas.dto';

@Controller('citas')
export class CitasController {
  constructor(private readonly citasService: CitasService) {}

  @Post()
  async create(@Res() res: any, @Body() createCitasDTO: CreateCitasDTO) {
    const cita = await this.citasService.createCita(createCitasDTO);
    return res.status(HttpStatus.OK).json({
      message: 'cita creada',
      cita: cita,
    });
  }
  @Get()
  async getCitas(@Res() res: any) {
    const citas = await this.citasService.getCitas();
    return res.status(HttpStatus.OK).json(citas);
  }
  @Get('/:citaID')
  async getCita(@Res() res: any, @Param('citaID') citaID: string) {
    const cita = await this.citasService.getCita(citaID);
    return res.status(HttpStatus.OK).json(cita);
  }
  @Delete('/:citaID')
  async deleteCita(@Res() res: any, @Param('citaID') citaID: string) {
    const citaDeleted = await this.citasService.deleteCita(citaID);
    return res.status(HttpStatus.OK).json({
      message: 'cita eliminada',
      cita: citaDeleted,
    });
  }
  @Patch('/:citaID')
  async updateCita(
    @Res() res: any,
    @Param('citaID') citaID: string,
    @Body() CreateCitasDTO: CreateCitasDTO,
  ) {
    const citaUpdated = await this.citasService.updateCita(
      citaID,
      CreateCitasDTO,
    );
    return res.status(HttpStatus.OK).json({
      message: 'cita actualizada',
      cita: citaUpdated,
    });
  }
}
