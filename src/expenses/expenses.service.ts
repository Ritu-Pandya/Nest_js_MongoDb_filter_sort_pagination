import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ExpenseDTO } from 'src/dto/expense.dto';
import { Expense } from 'src/schema/expenses.schema';
import { APIFeatures } from 'src/utils/apifeatures';

@Injectable()
export class ExpensesService {
    constructor(
        @InjectModel(Expense.name) private expenseModel: Model<Expense>,
      ) {}

      async createExpense(data: ExpenseDTO) {
        const expense = this.expenseModel.create(data);
        return expense;
      }
    
      async getExpenses(query?:any) {
        const features =new APIFeatures(this.expenseModel.find(),query)
        .filter()
        .sorting()
        .limit()
        .pagination();
        const expenses = await features.mongooseQuery;
        return expenses;
      }
    }

