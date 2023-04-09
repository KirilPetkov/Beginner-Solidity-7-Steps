// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.0;
contract MyContract {
    //Loops, If, Else

    uint[] public numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    //The contract also has a state variable numbers, which is an array of uint type containing ten unsigned integers. 

    address public owner; //Additionally, there is a state variable owner, 
    //which is an address type variable that represents the owner of the contract.

    constructor() public {
        owner = msg.sender;
    }

    function countEvenNumbers() public view returns (uint) {
        uint count = 0;

        for(uint i = 0; i < numbers.length; i++) {
            if(isEvenNumber(numbers[i])) {
                count ++;
            }
        }

        return count;
    } //This function counts the number of even numbers in the numbers array using a for-loop and an if statement. 
    //It returns the count of even numbers as a uint.

    function isEvenNumber(uint _number) public view returns(bool) {
        if(_number % 2 == 0) {
            return true;
        } else {
            return false;
        }
    } //This function takes an unsigned integer _number as an input and checks if it's even or not. 
    //If _number is even, it returns true, otherwise, it returns false.

    function isOwner() public view returns(bool) {
        return(msg.sender == owner);
    } //This function checks if the caller of the function is the owner of the contract. 
    //It returns true if the caller is the owner, and false otherwise.
}
