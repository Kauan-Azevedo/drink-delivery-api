import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type usuarioDocument = HydratedDocument<Usuario>;

@Schema()
export class Usuario {

    @Prop({ required: true })
    email: string;

    @Prop({ required: true })
    senha: string;

    @Prop({ required: true })
    nome_completo: string;

    @Prop()
    data_nascimento: string;

}

export const usuarioSchema = SchemaFactory.createForClass(Usuario);