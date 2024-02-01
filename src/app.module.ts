import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { EnvironmentVariables, configuration } from './config/configuration';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlayerModule } from './player/player.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [
    PlayerModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      //validationSchema,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService<EnvironmentVariables>) => ({
        uri: config.get<string>('dbUrl'),
      }),
    }),
    CommonModule,
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
