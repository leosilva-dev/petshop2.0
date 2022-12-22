import {describe, expect, it} from 'vitest'
import { Client } from './client'

describe('Client class',() => {
    it('should be able to create a client', ()=>{
        const client = new Client({
            name:'John Doe',
            email:'johndoe@example.com',
        })

        expect(client).toBeTruthy()
    })

})