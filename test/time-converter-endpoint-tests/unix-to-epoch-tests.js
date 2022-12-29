
import moment from "moment";

import { request } from "./converter-tests-base";

const amUnixValue = "1451613802";
const pmUnixValue = "620071926";

describe("unix-to-epoch-tests", () => {
  it("Conversion from Unix to Epoch AM is done successfully", function (done) {
    const myDate = new Date(amUnixValue * 1000)
      .toISOString()
      .replace("T", " ")
      .substring(0, 19);
    const diferenceLocalTimeAndUtc = new Date(myDate).getTimezoneOffset() / -1;
    const gmtTime = moment(myDate)
      .add(diferenceLocalTimeAndUtc, "m")
      .toISOString()
      .replace("T", " ")
      .substring(0, 19);
    const epochDate = '"' + gmtTime + '"';

    request.get(amUnixValue).expect(epochDate, done);
  });
});

describe("unix-to-epoch-tests", () => {
  it("Conversion from Unix to Epoch PM is done successfully", function (done) {
    var myDate = new Date(pmUnixValue * 1000)
      .toISOString()
      .replace("T", " ")
      .substring(0, 19);
    var diferenceLocalTimeAndUtc = new Date(myDate).getTimezoneOffset() / -1;
    var gmtTime = moment(myDate)
      .add(diferenceLocalTimeAndUtc, "m")
      .toISOString()
      .replace("T", " ")
      .substring(0, 19);
    var epochDate = '"' + gmtTime + '"';

    request.get(pmUnixValue).expect(epochDate, done);
  });
});
