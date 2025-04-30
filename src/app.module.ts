import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarroModule } from './carro/carro.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Carro } from './carro/entities/carro.entity';

@Module({
  imports: [CarroModule,TypeOrmModule.forRoot({
    type:"mysql",
    host:"<IP_HOST_SQL>",
    port:3306,
    username:"<SEU_USUARIO",
    password:"<SUA SENHA",
    database:"<NOME_BANCO",
    entities:[Carro],
    synchronize:true
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}