import {
    Column,
    Model,
    Table,
} from 'sequelize-typescript';

interface ProductCreationInterface {
    oldPrice: number;
    price: number;
    title: string;
}

@Table({ tableName: 'products' })
export class Product extends Model<Product, ProductCreationInterface> {
    @Column
    oldPrice: number;
    @Column
    price: number;
    @Column
    title: string;
}
