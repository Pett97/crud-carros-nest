import { Injectable } from '@nestjs/common';
import { CreateCarroDto } from './dto/create-carro.dto';
import { UpdateCarroDto } from './dto/update-carro.dto';
import { Carro } from './entities/carro.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CarroService {

  constructor(
    @InjectRepository(Carro)
    private carroRepository: Repository<Carro>,
  ) { }

  async create(createCarroDto: CreateCarroDto): Promise<Carro> {
    const novoCarro = this.carroRepository.create(createCarroDto);
    return this.carroRepository.save(novoCarro);
  }

  findAll(): Promise<Carro[]> {
    return this.carroRepository.find();
  }

  findOne(id: number): Promise<Carro | null> {
    return this.carroRepository.findOneBy({ id });
  }

  async update(id: number, updateCarroDto: UpdateCarroDto): Promise<Carro | null> {
    const carro = await this.carroRepository.findOneBy({ id });
    if (!carro) {
      return null;
    }

    const carroAtualizado = this.carroRepository.merge(carro, updateCarroDto);
    return this.carroRepository.save(carroAtualizado);
  }

  async remove(id: number) {
    const result = await this.carroRepository.delete(id);
  }
}
