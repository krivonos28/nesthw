import { Test, TestingModule } from '@nestjs/testing';
import { ProducteController } from './producte.controller';

describe('ProducteController', () => {
  let controller: ProducteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProducteController],
    }).compile();

    controller = module.get<ProducteController>(ProducteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
