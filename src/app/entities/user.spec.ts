import {describe, expect, it} from 'vitest'
import { User } from './user';

describe('User class',() => {
    it('should be able to create a user', ()=>{
        const user = new User({
            name:'John Doe',
            password:'123',
            email:'johndoe@example.com',
        })

        expect(user).toBeTruthy()
    })

})