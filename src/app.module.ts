import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DentistasModule } from './dentistas/dentistas.module';
import { PagosModule } from './pagos/pagos.module';
import { CitasModule } from './citas/citas.module';

const databaseLink = "mongodb://localhost:27017/nest"

@Module({
  imports: [MongooseModule.forRoot(`${databaseLink}` ,{
    useUnifiedTopology: true,
    useNewUrlParser: true,
}), DentistasModule, PagosModule, CitasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
