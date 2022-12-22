import { Client } from "../../entities/client";
import { ClientRepository } from "../client-repository";

export class InMemoryClientRepository implements ClientRepository{

    public clients: Client[] = []

    async findById(clientId: string): Promise<Client | null> {
        const client = this.clients.find(client => client.id === clientId)

        if(!client){
            return null
        }
        
        return client
    }

    async findMany(): Promise<Client[]> {
        return this.clients
    }


    async create(client: Client): Promise<void> {
        this.clients.push(client)
    }


    async update(client: Client): Promise<void> {
        const clientIndex = this.clients.findIndex(c => c.id === client.id)

        if(clientIndex >= 0){
            this.clients[clientIndex] = client
        }
    }

    async delete(clientId:string): Promise<void>{
        const clientIndex = this.clients.findIndex(c => c.id === clientId)

        if(clientIndex > -1){
            this.clients.splice(clientIndex, 1)
        }
    }

}