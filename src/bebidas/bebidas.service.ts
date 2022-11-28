import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBebidaDto } from './dto/create-bebida.dto';
import { UpdateBebidaDto } from './dto/update-bebida.dto';
import { Bebida, bebidaDocument } from './entities/bebida.entity';

@Injectable()
export class BebidasService {
  constructor(
    @InjectModel(Bebida.name) private readonly bebidaModel: Model<bebidaDocument>
  ) { }

  create(createBebidaDto: CreateBebidaDto) {
    const bebida = new this.bebidaModel(createBebidaDto);
    return bebida.save();
  }

  findAll() {
    return this.bebidaModel.find();
  }

  findOne(id: string) {
    return this.bebidaModel.findById(id);
  }

  update(id: string, updateBebidaDto: UpdateBebidaDto) {
    return this.bebidaModel.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        $set: updateBebidaDto
      },
      {
        new: true,
      }
    )
  }

  remove(id: string) {
    return this.bebidaModel.deleteOne(
      {
        _id: id,
      }
    )
  }
}
