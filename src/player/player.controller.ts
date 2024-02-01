import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
	Query,
	UseGuards,
} from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';
import { PlayerService } from './player.service';

@Controller('player')
export class PlayerController {

	constructor(private readonly playerService: PlayerService) {}

	@Post()
	//@Auth(Role.admin, Role.person)
	create(@Body() createPlayerDto: CreatePlayerDto) {
		return this.playerService.createPlayer(createPlayerDto);
	}
}
