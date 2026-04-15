import { Controller, Get } from '@nestjs/common';
import { ComponentsService } from './components.service';

@Controller('components')
export class ComponentsController {
  constructor(private componentsService: ComponentsService) {}

  @Get()
  findAll() {
    return this.componentsService.findAll();
  }

  @Get('cpu')
  findCpus() {
    return this.componentsService.findByType('cpu');
  }

  @Get('gpu')
  findGpus() {
    return this.componentsService.findByType('gpu');
  }

  @Get('ram')
  findRam() {
    return this.componentsService.findByType('ram');
  }

  @Get('motherboard')
  findMotherboards() {
    return this.componentsService.findByType('motherboard');
  }

  @Get('storage')
  findStorage() {
    return this.componentsService.findByType('storage');
  }

  @Get('case')
  findCases() {
    return this.componentsService.findByType('case');
  }

  @Get('cooling')
  findCooling() {
    return this.componentsService.findByType('cooling');
  }

  @Get('psu')
  findPsus() {
    return this.componentsService.findByType('psu');
  }
}
