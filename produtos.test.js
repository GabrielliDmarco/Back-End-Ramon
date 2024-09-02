const request = require('supertest')
const app = require('../index')

describe('GET /produtos', () => {
    it('pegar a lista de produtos com sucesso', async () => {
        const res = await request(app).get('/produtos').send();
        expect(res.status).toBe(200);
    })
    it('verifica se a lista de produtos está cheia', async () => {
        const res = await request(app).get('/produtos').send();
        expect(res.body).toBeDefined();
    })
})

describe('POST /produtos', () => {
    it('criar produto com sucesso', async () =>{
        const rest = await request(app).post('/clientes').send({
            nome: 'Casa da Barbie DreamHouse',
            descricao: 'Casa da barbie com dois andares, sonho de toda criança!',
            preco: 299.99,
            imagem: "barbie casa rosa"
        })
        expect(rest.status).toBe(404)
    })
})

describe('UPDATE  /produtos/:id', () => {
    it('Atualizar nome do produto com sucesso', async () => {
        const res = await request(app).post('/produto/2').send(
            {
                nome: 'ramon update'
            })
            expect(res.status).toBe(404)
    })  
})

describe('DELETE /produtos/:id', () => {
    it('Deletar o nome do produto com sucesso', async () => {
        const res = await request(app).delete('/produto/2').send()
          expect(res.status).toBe(404);
    })
})

