// import AppError from '../errors/AppError';
import {getCustomRepository} from 'typeorm'
import TransactionRepository from '../repositories/TransactionsRepository'
import Category from '../models/Category';
import Transaction from '../models/Transaction';

interface Request{
  title: string;
  value: number;
  type: 'income' | 'outcome';
  category: string
}

class CreateTransactionService {
  public async execute({title, value, type, category}:Request): Promise<Transaction> {
    // TODO
    const transactionRepository = getCustomRepository(TransactionRepository)
    // const categoryRepository = getRepository(Category)

    const newTransaction = transactionRepository.create({
      title,
      value,
      type
    })
    await transactionRepository.save(newTransaction)

    return newTransaction
  }
}

export default CreateTransactionService;
