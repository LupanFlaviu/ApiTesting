import supertest from "supertest";
const request = supertest('https://helloacm.com/api/unix-timestamp-converter/?cached&s=');

        var emptyValue = '/?cached&s=';
        var incorectValue = '/?cached&s=abcdef';
        var expectedResponse='false';


describe('negative-tests', () => {
    it('False response received when the request is sent with an empty value', function(done) {
request.get(emptyValue)
    .expect( expectedResponse , done);
         });
     });


describe('negative-tests', () => {
    it('False response received when the request is sent with an incorect value', function(done) {
request.get(incorectValue)
    .expect( expectedResponse , done);
          });
      });


