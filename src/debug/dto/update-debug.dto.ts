import { PartialType } from '@nestjs/mapped-types';
import { CreateDebugDto } from './create-debug.dto';

export class UpdateDebugDto extends PartialType(CreateDebugDto) {}
