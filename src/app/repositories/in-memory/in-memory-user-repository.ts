import { User } from "../../entities/user";
import { UserRepository } from "../user-repository";

export class InMemoryUserRepository implements UserRepository{

    public users: User[] = []

    async findById(userId: string): Promise<User | null> {
        const user = this.users.find(user => user.id === userId)

        if(!user){
            return null
        }
        
        return user
    }

    async findMany(): Promise<User[]> {
        return this.users
    }


    async create(user: User): Promise<void> {
        this.users.push(user)
    }


    async update(user: User): Promise<void> {
        const userIndex = this.users.findIndex(c => c.id === user.id)

        if(userIndex >= 0){
            this.users[userIndex] = user
        }
    }

    async delete(userId:string): Promise<void>{
        const userIndex = this.users.findIndex(c => c.id === userId)

        if(userIndex > -1){
            this.users.splice(userIndex, 1)
        }
    }

}