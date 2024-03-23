import { Body, Controller, Post,Get } from '@nestjs/common';
import { DemoService } from './demo.service';
import { CreateDemoDto } from './dto/create-demo.dto';

@Controller('demo')
export class DemoController {
  constructor(private readonly demoService: DemoService) {}

  @Post()
  async create(@Body() createDemoDto: CreateDemoDto) {
    return this.demoService.create(createDemoDto);
  }
  
  @Get()
  async getAll() {
    return this.demoService.getAll();
  }

  // ... other endpoints
}
