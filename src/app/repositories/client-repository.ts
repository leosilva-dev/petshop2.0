import { Client } from "../entities/client";

export abstract class ClientRepository{
    abstract findById(clientId:string): Promise<Client | null>;
    abstract findMany():Promise<Client[]>;
    abstract create(client: Client): Promise<void>;
    abstract update(client: Client): Promise<void>;
    abstract delete(clientId:string): Promise<void>;
}