import { expect } from "chai";
import { describe, it } from "mocha";
import {countMaxBobsleigh} from "../code/code2.js";

describe("Test of countMaxBobsleigh", () => {
    it("should return 0 for empty map", () => {
        expect(countMaxBobsleigh(0, [])).to.equal(0);
    })
    it("should return 3 bobsleigh can be insert", function () {
        expect(countMaxBobsleigh("....X")("X....")(".....")("..X..")("X...X")).to.equal(3);
    });

    it("should return 2 bobsleigh can be insert", function () {
        expect(countMaxBobsleigh("X....")("....X")(".....")("XX...")("X..X.")).to.equal(2);         
    });

    it("should return 1 bobsleigh can be insert ", function (){
        expect(countMaxBobsleigh("....X")("..XX.")("X...X")("XX...")("X..X.")).to.equal(1);
   });
})