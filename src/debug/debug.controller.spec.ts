import { Test, TestingModule } from '@nestjs/testing';
import { DebugController } from './debug.controller';
import { DebugService } from './debug.service';

describe('DebugController', () => {
  let controller: DebugController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DebugController],
      providers: [DebugService],
    }).compile();

    controller = module.get<DebugController>(DebugController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
