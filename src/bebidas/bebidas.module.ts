import { Module } from '@nestjs/common';
import { BebidasService } from './bebidas.service';
import { BebidasController } from './bebidas.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Bebida, bebidaSchema } from './entities/bebida.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Bebida.name, schema: bebidaSchema }]),
  ],
  controllers: [BebidasController],
  providers: [BebidasService]
})
export class BebidasModule { }
