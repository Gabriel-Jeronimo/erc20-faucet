// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import "./DripToken.sol";

contract DripFaucet {
    mapping(address => uint256) userNextBuyTime;
    DripToken private immutable dripToken;
    uint256 private immutable buyTimeLimit;
    uint256 private immutable faucetValue;

    constructor(
        address tokenAddress,
        uint256 _buyTimeLimit,
        uint256 _faucetValue
    ) {
        dripToken = DripToken(tokenAddress);
        buyTimeLimit = _buyTimeLimit;
        faucetValue = _faucetValue;
    }

    function requestTokens(address recipient) public {
        require(recipient != address(0), "It should be a valid address");
        require(
            block.timestamp > userNextBuyTime[recipient],
            "Your next request time is not reached yet"
        );

        userNextBuyTime[recipient] = block.timestamp + buyTimeLimit;
        dripToken.transfer(recipient, faucetValue);
    }

    function getNextBuyTime(address recipient) public view returns (uint256) {
        return userNextBuyTime[recipient];
    }
}
