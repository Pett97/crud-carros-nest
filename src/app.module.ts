import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarroModule } from './carro/carro.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Carro } from './carro/entities/carro.entity';

@Module({
  imports: [CarroModule,TypeOrmModule.forRoot({
    type:"mysql",
    host:"10.93.47.34",
    port:3306,
    username:"teste2",
    password:"123123",
    database:"carrosshows",
    entities:[Carro],
    synchronize:true
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
