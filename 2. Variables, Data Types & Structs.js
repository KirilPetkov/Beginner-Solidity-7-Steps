// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.0;
contract MyContract {
    //State Variables

    string public myString = "Hello, World!"; //This is a string variable that holds the value "Hello, World!" 
    //and is declared as a public variable. The public keyword makes the variable accessible from outside the contract.
    
    bytes32 public myBytes32 = "Hello, World!"; //This is a bytes32 variable that holds the value "Hello, World!" 
    //and is declared as a public variable. The bytes32 type is used to store arbitrary bytes of data.

    int public myInt = 1; //This is an integer variable that holds the value 1 and is declared as a public variable. 
    //The int type is used to store signed integers.

    uint public myUint = 1; //This is an integer variable that holds the value 1 and is declared as a public variable. 
    //The int type is used to store signed integers.

    uint256 public myUint256 = 1; //This is an integer variable that holds the value 1 and is declared as a public variable. 
    //The int type is used to store signed integers.

    uint8 public myUint8 = 1; //This is an integer variable that holds the value 1 and is declared as a public variable. 
    //The int type is used to store signed integers.

    address public myAddress = 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4; //This is an address variable that holds 
    //the value 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4 and is declared as a public variable. The address type is used to store Ethereum addresses.

    struct MyStruct {
        uint myint;
        string myString;
    }

    MyStruct public myStruct = MyStruct(1, "Hello, World!");

    // Local Variables
    function getValue() public pure returns(uint){
        uint value = 1;
        return value;
    }
}