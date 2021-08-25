const sumar = require("../index");
const assert = require("assert");
const internal = require("stream");

describe("To test the sum of 2 numbers", () =>{
    it("Five plus seven its 12", ()=>{
        assert.equal(12, sum(5,7));
    });

    it("Five plus seven its not 57", ()=>{
        assert.notEqual("57", sumar(5,7));
    });
});