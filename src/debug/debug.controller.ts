import { Controller, Get, Param } from '@nestjs/common';
import { DebugService } from './debug.service';
import { CreateDebugDto } from './dto/create-debug.dto';
import { UpdateDebugDto } from './dto/update-debug.dto';

@Controller('debug')
export class DebugController {
  constructor(private readonly debugService: DebugService) {}

  @Get(':username')
  findAll(@Param('username') username: string) {
    return this.debugService.findAll(username);
  }
}
