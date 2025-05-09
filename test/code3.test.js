import { expect } from "chai";
import {describe, it} from "module";
import { reduceDirections } from "../code/code3.js";

describe('reduce the plan in the minimum', () => {
    it ('should return ["OUEST"] when the input is ["NORD", "SUD", "SUD", "EST", "OUEST", "NORD", "OUEST"]', () => {
        expect (reduceDirections(["NORD", "SUD", "SUD", "EST", "OUEST", "NORD", "OUEST"])).to.be.equal(["OUEST"])
    });
    it ('should return [] when the input is ["NORD", "SUD", "EST", "OUEST"]', () => {
        expect (reduceDirections(["NORD", "SUD", "EST", "OUEST"])).to.deep.equal([]);
    });
    it ('should return [] when the input is empty', () => {
        expect (reduceDirections([])).to.deep.equal([])
    });
}) 