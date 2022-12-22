import { Pet } from "../../entities/pet";
import { PetRepository } from "../pet-repository";

export class InMemoryUserRepository implements PetRepository{

    public pets: Pet[] = []

    async findById(userId: string): Promise<Pet | null> {
        const user = this.pets.find(user => user.id === userId)

        if(!user){
            return null
        }
        
        return user
    }

    async findMany(): Promise<Pet[]> {
        return this.pets
    }


    async create(user: Pet): Promise<void> {
        this.pets.push(user)
    }


    async update(user: Pet): Promise<void> {
        const userIndex = this.pets.findIndex(c => c.id === user.id)

        if(userIndex >= 0){
            this.pets[userIndex] = user
        }
    }

    async delete(userId:string): Promise<void>{
        const userIndex = this.pets.findIndex(c => c.id === userId)

        if(userIndex > -1){
            this.pets.splice(userIndex, 1)
        }
    }

}