import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BebidasModule } from './bebidas/bebidas.module';
import { UsuariosModule } from './usuarios/usuarios.module';

@Module({
  imports: [ConfigModule.forRoot(),
  MongooseModule.forRoot(process.env.DATABASE_URL),
    BebidasModule,
    UsuariosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
