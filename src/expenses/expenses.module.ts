import { Module } from '@nestjs/common';
import { ExpensesController } from './expenses.controller';
import { ExpensesService } from './expenses.service';
import mongoose from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { Expense, ExpenseSchema } from 'src/schema/expenses.schema';

@Module({
  imports:[
    MongooseModule.forFeature([{name: Expense.name, schema: ExpenseSchema }])
  ],
  controllers: [ExpensesController],
  providers: [ExpensesService]
})
export class ExpensesModule {}
