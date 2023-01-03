import { Module } from '@nestjs/common';
import { DentistasController } from './dentistas.controller';
import { DentistasService } from './dentistas.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DentistasSchema } from './schemas/dentistas.schema';
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Dentistas', schema: DentistasSchema }
    ])
  ],
  controllers: [DentistasController],
  providers: [DentistasService]
})
export class DentistasModule {}
