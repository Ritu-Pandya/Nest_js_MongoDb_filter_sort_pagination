import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ExpensesModule } from './expenses/expenses.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/expenseTest'),
    ExpensesModule
    ],
   
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
