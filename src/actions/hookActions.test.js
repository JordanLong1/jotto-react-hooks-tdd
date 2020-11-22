import moxios from 'moxios'; 

import {getSecretWord} from './hookActions'; 

describe('moxios tests', () => {
    beforeEach(() => {
        moxios.install()
    });

    afterEach(() => {
        moxios.uninstall(); 
    });

    test('getSecretWord calls setSecretWord callback when it gets an axios response', async () => {
         const secretWord = 'party'; 

         moxios.wait(() => {
             const request = moxios.requests.mostRecent(); 
             request.respondWith({
                 status: 200, 
                 response: secretWord
             });
         });
        // create mock for callback 
        const mockSetSecretWord = jest.fn(); 
        await getSecretWord(mockSetSecretWord); 

        // see whether mock was run with correct argument 
        expect(mockSetSecretWord).toHaveBeenCalledWith(secretWord); 
    }); 
}); 