import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { DemoModule } from './modules/demo/demo.module';
import { DemoCategoryModule } from './modules/demo-category/demo-category.module';
import { DemoItemModule } from './modules/demo-item/demo-item.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      autoLoadModels: true, // models will be loaded automatically
      synchronize: true, // automatically loaded models will be synchronized

      sync: {
        alter: true, // alter the tables based on schema
      },

      dialect: 'mysql',
      host: '10.61.80.3',
      port: 3306,
      username: 'root',
      password: 'Mohitdixit12345!',
      database: 'demo',
    }),
    DemoModule,
    DemoCategoryModule,
    DemoItemModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
