import { Replace } from "../../helpers/Replace";
import { randomUUID } from "crypto";


export interface ClientProps{
    name:string;
    email:string;
    createdAt: Date;
}

export class Client{
    private _id: string;
    private props: ClientProps;
    
    constructor(props: Replace<ClientProps, {createdAt?:Date}>, id?:string){
        this._id = id ?? randomUUID()
        this.props = {
            ...props,
            createdAt: props.createdAt ?? new Date()
        }
    }

    public get id(): string {
        return this._id
    }

    public get name(): string{
        return this.name;
    }

    public set name(name:string){
        this.name = name
    }

    public get email(): string{
        return this.email;
    }

    public set email(email:string){
        this.email = email
    }

    public get createdAt(): Date {
        return this.props.createdAt
    }
}


