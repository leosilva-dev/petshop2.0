import { PetNotFound } from "../../helpers/pet-not-found";
import { PetRepository } from "../repositories/pet-repository";

interface PetMakesBirthdayRequest{
    petId: string;
}

type PetMakesBirthdayResponse = void


export class PetMakesBirthday{
    constructor(private petRepository: PetRepository){

    }

    async execute(request:PetMakesBirthdayRequest):Promise<PetMakesBirthdayResponse>{
        const {petId} = request

        const pet = await this.petRepository.findById(petId)

        if(!pet){
            throw new PetNotFound()
        }

        pet.makesBirthday()

        await this.petRepository.update(pet)
    }
}