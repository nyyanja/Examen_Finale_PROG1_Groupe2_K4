import { expect }  from "chai";
import { describe, it } from "mocha";
import { getLastDelegation } from "../code/code1.js";

describe ("Test of Open ceremony", ()=>{
   it("should return the first delegation output has a little duration", ()=>{
        expect(getLastDelegation(["Chill 101 2","Estonia 58 1","Romania 102 3", "Ecuador 103 4","Madagascar 104 5","Oman 50 1","Yemen 53 4"])).to.equal("Yemen");
   });
    it("should return the last delegation output has a big duration",()=>{
          expect(getLastDelegation(["Chill 101 2","Estonia 58 1","Romania 102 3", "Ecuador 103 4","Madagascar 104 5","Oman 50 1","Yemen 53 4"])).to.equal("Estonia");
    });
    it("should return empty string if the output is empty", ()=>{
        expect(getLastDelegation([])).to.equal("");
    });
});
  