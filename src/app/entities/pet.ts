import { Replace } from "../../helpers/Replace";
import {randomUUID} from 'crypto'

export interface PetProps{
    name:string;
    age:number;
    ownerId: string;
    specie: 'dog' | 'cat' | 'turtle';
    createdAt: Date;
}

export class Pet{
    private _id:string;
    private props: PetProps;
    
    constructor(props: Replace<PetProps, {createdAt?:Date}>, id?:string) {
        this._id = id ?? randomUUID();
        this.props = {
            ...props,
            createdAt: props.createdAt ?? new Date()
        }
    }

    public get id(): string {
        return this._id
    }

    public get ownerId(): string {
        return this.ownerId
    }

    public get name(): string{
        return this.name;
    }

    public set name(name:string){
        this.name = name
    }

    public get specie(): string{
        return this.specie;
    }

    public get age(): number{
        return this.age;
    }

    public makesBirthday(){
        this.props.age = this.props.age+1
    }

    public get createdAt(): Date {
        return this.props.createdAt
    }
}