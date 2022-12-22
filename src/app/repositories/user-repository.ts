import { User } from "../entities/user";

export abstract class UserRepository{
    abstract findById(userId:string): Promise<User | null>;
    abstract findMany():Promise<User[]>;
    abstract create(user: User): Promise<void>;
    abstract update(user: User): Promise<void>;
    abstract delete(userId:string): Promise<void>;
}