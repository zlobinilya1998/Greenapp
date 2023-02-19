import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Product } from './entities/product.entity';

@Module({
  imports: [SequelizeModule.forFeature([Product])],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
