describe('Planet Registration', () =>  { 
    it('should return an error if the planet name already exists', async () => {
        const response = await request(app)
        .post('/api/requests')
        .send({name : ' Mars'});
        expect(response.status).toBe(400);
        expect(response.body.message).toBe('Planet name already exists'); 

});
    });

describe('Planet Registration', () =>  { 
    it('should return an error if the planet characteristics are invalid', async () => {
        const response = await request(app)
        .post('/api/requests')
        .send({name : ' NewPlanet', size: -100, atmosphere: unknown, type:"Gas"});
        expect(response.status).toBe(400);
        expect(response.body.message).toBe('Invalid planet characteristics'); 
    
});
    });

