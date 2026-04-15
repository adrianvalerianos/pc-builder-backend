import { Body, Controller, Delete, Get, Param, Patch, Post, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { BuildsService } from './builds.service';
import { CreateBuildDto } from './dto/create-build.dto';
import { UpdateBuildDto } from './dto/update-build.dto';

@UseGuards(JwtAuthGuard)
@Controller('builds')
export class BuildsController {
  constructor(private buildsService: BuildsService) {}

  @Get()
  findAll(@Request() req) {
    return this.buildsService.findAll(req.user.id);
  }

  @Post()
  create(@Request() req, @Body() dto: CreateBuildDto) {
    return this.buildsService.create(req.user.id, dto);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Request() req) {
    return this.buildsService.findOne(id, req.user.id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Request() req, @Body() dto: UpdateBuildDto) {
    return this.buildsService.update(id, req.user.id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Request() req) {
    return this.buildsService.remove(id, req.user.id);
  }

  @Get(':id/summary')
  getSummary(@Param('id') id: string, @Request() req) {
    return this.buildsService.getSummary(id, req.user.id);
  }
}
