import {
    IsNumber,
    IsIn,
    Min,
    Max,
    IsOptional,
    IsMongoId,
    IsString
} from 'class-validator';

export class CreatePlayerDto {

    //   @IsIn(offertType)
    //   offerType: OfferType;
    @IsString()
    name: string;

    @IsString()
    lastName: string;

}
