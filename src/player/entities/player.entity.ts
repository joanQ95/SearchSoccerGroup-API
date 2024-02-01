import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, now, SchemaTypes, Types } from 'mongoose';


@Schema()
export class Player extends Document {

  @Prop({
    maxlength: 128,
  })
  name: string;

  @Prop({
    maxlength: 128,
  })
  lastName: string;

  @Prop({
    maxlength: 128,
  })
  fullName: string;

  @Prop()
  birthday: Date;

  @Prop({ default: now() })
  createdAt: Date;

  @Prop()
  expiresAt: Date;

  @Prop({ default: now() })
  updatedAt: Date;

  @Prop()
  takenDate: Date;

  @Prop({default:false})
  firstOffer:boolean;
  // company = models.ForeignKey(Company, related_name='offers', on_delete=models.CASCADE, null=True)
  // takerCompany = models.ForeignKey(Company, related_name='takers', on_delete=models.CASCADE, null=True)
  // is_active = models.BooleanField(default=True)
}

export const PlayerSchema = SchemaFactory.createForClass(Player);