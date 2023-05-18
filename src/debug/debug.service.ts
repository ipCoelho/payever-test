import { Injectable } from '@nestjs/common';
import { CreateDebugDto } from './dto/create-debug.dto';
import { UpdateDebugDto } from './dto/update-debug.dto';

@Injectable()
export class DebugService {
  findAll(username: string) {
    return {
      user: username || 'not found',
    };
  }
}