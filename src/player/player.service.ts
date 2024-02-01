import { Injectable } from '@nestjs/common';
import { CommonService } from 'src/common/common.service';
import { CreatePlayerDto } from './dto/create-player.dto';
import { Player } from './entities/player.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class PlayerService {

    constructor(
        @InjectModel(Player.name)
        private readonly playerModel: Model<Player>,
        private readonly commonService: CommonService
    ) { }

    async createPlayer(createPlayerDto: CreatePlayerDto) {
        try {
            const offer = await this.playerModel.create({
                createPlayerDto
            });
        } catch (error) {
            this.commonService.handleExceptions(error);
        }
    }
}
