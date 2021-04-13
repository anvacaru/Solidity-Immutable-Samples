pragma solidity =0.6.12;

contract Sample {
    uint256 public imt;
    constructor(uint256 value) public {
        imt = value;
    }

    function getImmutable() external view returns (uint256 val) {
        val = imt;
    }
}