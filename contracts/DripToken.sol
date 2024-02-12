// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract DripToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("DRIP", "DRP") {
        _mint(msg.sender, initialSupply);
    }
}
