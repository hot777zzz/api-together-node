import { Controller } from '@nestjs/common';
import { DataService } from './data.service';
import { Public } from 'src/public/public.decorator';
import { Get, Body } from '@nestjs/common';

@Controller('data')
export class DataController {
  constructor(private readonly dataService: DataService) {}

  @Public()
  @Get()
  getData() {
    return this.dataService.getData();
  }
}
