import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type bebidaDocument = HydratedDocument<Bebida>;

@Schema()
export class Bebida {

    @Prop({ required: true })
    nome: string;

    @Prop({ required: true })
    valor: number;

    @Prop({ required: true })
    quantidade: number;
}

export const bebidaSchema = SchemaFactory.createForClass(Bebida);