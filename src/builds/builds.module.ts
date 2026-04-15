import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Build } from './entities/build.entity';
import { BuildsController } from './builds.controller';
import { BuildsService } from './builds.service';
import { ComponentsModule } from '../components/components.module';

@Module({
  imports: [TypeOrmModule.forFeature([Build]), ComponentsModule],
  controllers: [BuildsController],
  providers: [BuildsService],
})
export class BuildsModule {}
