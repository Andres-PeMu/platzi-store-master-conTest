import getData from "../../utils/getData";

describe('Fetch API', ()=>{
    beforeEach(() =>{
        fetch.resetMocks();
    });
    test('llamar API y retornar datos', ()=>{
        fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));
        getData('www.//google.com')
        .then(response =>{
            expect(response.data).toEqual('12345')
        });
        expect(fetch.mock.calls[0][0]).toEqual('www.//google.com');
    })
})