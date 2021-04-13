const { expect } = require("chai");

describe("Sample", function () {
    it("Should deploy and retrieve the same value", async function () {

        const Sample = await ethers.getContractFactory("Sample");
        value = 10;
        const hardhatSample = await Sample.deploy(value);
        expect(await hardhatSample.getImmutable()).to.equal(value);
    });
});