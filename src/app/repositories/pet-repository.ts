import { Pet } from "../entities/pet";

export abstract class PetRepository{
    abstract findById(petId:string): Promise<Pet | null>;
    abstract findMany():Promise<Pet[]>;
    abstract create(pet: Pet): Promise<void>;
    abstract update(pet: Pet): Promise<void>;
    abstract delete(petId:string): Promise<void>;
}