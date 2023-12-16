import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class ShortUrl extends Document {
  @Prop({ required: true })
  full: string;

  @Prop({ required: true })
  short: string;
}

export const ShortUrlSchema = SchemaFactory.createForClass(ShortUrl);
