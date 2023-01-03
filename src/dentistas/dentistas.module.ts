import { Module } from '@nestjs/common';
import { DentistasController } from './dentistas.controller';
import { DentistasService } from './dentistas.service';

@Module({
  controllers: [DentistasController],
  providers: [DentistasService]
})
export class DentistasModule {}
