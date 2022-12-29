import supertest from "supertest";
const request = supertest('https://helloacm.com/api/unix-timestamp-converter/?cached&s=');

 var amEpochValue = '1989-08-25 08:07:08';
 var pmEpochValue = '1989-08-25 18:07:08';

describe('epoch-to-unix-tests', () => {
    it('Conversion from Epoch to Unix AM is done successfully', function(done) {
        var unixDate = Math.floor(new Date(amEpochValue)/1000).toString()
       .replace(' "undefined"', '');
       var diferenceLocalTimeAndUtc = new Date(amEpochValue).getTimezoneOffset()/-1;
        var finalUnixDateAm =  Number(unixDate) + (diferenceLocalTimeAndUtc * 60);

request.get(amEpochValue)
.expect(''+ finalUnixDateAm +'')
  done();
        });
    });
    

describe('epoch-to-unix-tests', () => {
       it('Conversion from Epoch to Unix PM is done successfully', function(done) {
        var unixDate = Math.floor(new Date(pmEpochValue)/1000).toString()
        .replace(' "undefined"', '');
        var diferenceLocalTimeAndUtc = new Date(amEpochValue).getTimezoneOffset()/-1;
        var finalUnixDate = Number(unixDate) + Number(diferenceLocalTimeAndUtc*60);
 request.get(pmEpochValue)
 .expect(''+ finalUnixDate +'')
  done();
            });
        });
