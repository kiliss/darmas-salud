import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DentistasModule } from './dentistas/dentistas.module';
import { PagosModule } from './pagos/pagos.module';
import { CitasModule } from './citas/citas.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://user_node_cafe:8Y4NdH9j2TZwh1FG@miclustercafe.ztei79a.mongodb.net/cafeDB',{
    useUnifiedTopology: true,
    useNewUrlParser: true,
}), DentistasModule, PagosModule, CitasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
