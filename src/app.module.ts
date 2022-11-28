import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BebidasModule } from './bebidas/bebidas.module';
import { UsuariosModule } from './usuarios/usuarios.module';

@Module({
  imports: [BebidasModule, UsuariosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
