const request = require('supertest')
const app = require('../index')

describe('GET /clientes', () => {
    it('pegar a lista de clientes com sucesso', async () => {
        const res = await request(app).get('/clientes').send();
        expect(res.status).toBe(200);
    })
    it('verifica se a lista de clientes está cheia', async () => {
        const res = await request(app).get('/clientes').send();
        expect(res.body).toBeDefined();
    })
})

describe('POST /clientes', () => {
    it('criar cliente com sucesso', async () =>{
        const rest = await request(app).post('/clientes').send({
            nome: 'Larissa Isaias',
            email: 'larissa31isaias@hotmail.com',
            senha: '40028922'
        })
        expect(rest.status).toBe(404)
    })
})

describe('UPDATE  /clientes/:id', () => {
    it('Atualizar nome do cliente com sucesso', async () => {
        const res = await request(app).post('/clientes/2').send(
            {
                nome: 'ramon update'
            })
            expect(res.status).toBe(406)
    })  
})

describe('DELETE /clientes/:id', () => {
    it('Deletar o nome do cliente com sucesso', async () => {
        const res = await request(app).delete('/clientes/2').send()
          expect(res.status).toBe(204);
    })
})

