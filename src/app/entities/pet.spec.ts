import {describe, expect, it} from 'vitest'

import { Pet } from './pet';
import { Client } from './client';

describe('Pet class',() => {
    it('should be able to create a pet', () => {  

        const owner = new Client({
            name:'John Doe',
            email: 'john@doe.com',
        })

        const pet = new Pet({
            name:'John',
            age:2,
            ownerId: owner.id,
            specie:'dog'
        })

        expect(pet).toBeTruthy()
        
    })

    

})