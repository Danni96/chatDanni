import * as chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app.js';

const expect = chai.expect;
chai.use(chaiHttp);

describe('Auth API', () => {

  describe('POST /api/register', () => {
    it('debería registrar un usuario nuevo', async () => {
      const res = await chai.request(app)
        .post('/api/register')
        .send({ username: 'dannis', password: 'dev.sanchez' });
      expect(res).to.have.status(201);
      expect(res.body.message).to.equal('Usuario registrado exitosamente');
    });

    it('no debería registrar un usuario repetido', async () => {
      const res = await chai.request(app)
        .post('/api/register')
        .send({ username: 'dannis', password: 'dev.sanchez' });
      expect(res).to.have.status(500);
    });
  });

  describe('POST /api/login', () => {
    it('debería loguear con credenciales correctas', async () => {
      const res = await chai.request(app)
        .post('/api/login')
        .send({ username: 'dannis', password: 'dev.sanchez' });
      expect(res).to.have.status(200);
      expect(res.body.token).to.be.a('string');
    });

    it('no debería loguear con usuario incorrecto', async () => {
      const res = await chai.request(app)
        .post('/api/login')
        .send({ username: 'noexiste', password: 'dev.sanchez' });
      expect(res).to.have.status(401);
    });

    it('no debería loguear con contraseña incorrecta', async () => {
      const res = await chai.request(app)
        .post('/api/login')
        .send({ username: 'dannis', password: 'malapass' });
      expect(res).to.have.status(401);
    });
  });
});
