// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import "./DripToken.sol";

contract DripFaucet {
    mapping(address => uint256) userNextBuyTime;
    DripToken private immutable dripToken;
    uint256 private immutable buyTimeLimit;
    uint256 private immutable faucetValue;

    constructor(address tokenAddress, uint256 _buyTimeLimit, uint256 _faucetValue) {
        dripToken = DripToken(tokenAddress);
        buyTimeLimit = _buyTimeLimit;
        faucetValue = _faucetValue;
    }

    function requestTokens() public {
        require(msg.sender != address(0), "It should be a valid address");
        require(
            block.timestamp > userNextBuyTime[msg.sender],
            "Your next request time is not reached yet"
        );

        userNextBuyTime[msg.sender] = block.timestamp + buyTimeLimit;
        dripToken.transfer(msg.sender, faucetValue);
    }
}
