import moment from "moment/moment";
import supertest from "supertest";
const request = supertest('https://helloacm.com/api/unix-timestamp-converter/?cached&s=');

 var amUnixValue = '1451613802';
 var pmUnixValue = '620071926';

describe('unix-to-epoch-tests', () => {
    it('Conversion from Unix to Epoch AM is done successfully', function(done) {
        var myDate = new Date( amUnixValue *1000).toISOString()
        .replace('T', ' ')
        .substring(0, 19);
        var diferenceLocalTimeAndUtc = new Date(myDate).getTimezoneOffset()/-1;
        var gmtTime = moment(myDate).add(diferenceLocalTimeAndUtc,'m').toISOString()
        .replace('T', ' ')
        .substring(0, 19);
        var epochDate = '"'+ gmtTime +'"';
       
request.get(amUnixValue)
    .expect( epochDate , done);
        });
    });
    

describe('unix-to-epoch-tests', () => {
       it('Conversion from Unix to Epoch PM is done successfully', function(done) {
        var myDate = new Date(pmUnixValue *1000).toISOString()
        .replace('T', ' ')
        .substring(0, 19);
        var diferenceLocalTimeAndUtc = new Date(myDate).getTimezoneOffset()/-1;
        var gmtTime = moment(myDate).add(diferenceLocalTimeAndUtc,'m').toISOString()
        .replace('T', ' ')
        .substring(0, 19);
        var epochDate = '"'+ gmtTime +'"';
           
 request.get(pmUnixValue)
    .expect( epochDate , done);
            });
        });



