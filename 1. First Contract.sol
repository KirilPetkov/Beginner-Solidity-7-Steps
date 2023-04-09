// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.0;
contract Counter {
    uint public count = 1; //This is count uint

    function increamentCount() public { // This is increment function
        count ++;
    }
}
