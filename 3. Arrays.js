// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.0;
contract MyContract {
    //Array

    uint[] public uintArray = [1,2,3]; //This is a public array of unsigned integers (uint) 
    //that contains three elements: 1, 2, and 3. It is declared using the syntax "uint[]" 
    //and initialized with the values in the square brackets. 
    //The "public" modifier makes it visible to other contracts and accounts on the blockchain.

    string[] public stringArray = ["apple", "banana", "carrot"]; //This is a public array of strings 
    //that contains three elements: "apple", "banana", and "carrot". 
    //It is declared using the syntax "string[]" and initialized with the values in the square brackets. 
    //Like uintArray, it is also declared as "public" to make it visible to other contracts and accounts.

    string[] public values; //This is also a public array of strings, 
    //but it has not been initialized with any values at the time of declaration. 
    //It is simply declared using the syntax "string[]". 
    //This means that it is an empty array that can later be populated with values using the "push" method.

    uint[][] public array2D = [[1,2,3], [4,5,6]]; //This is a public array of arrays, also known as a 2D array, 
    //that contains two elements, each of which is an array of unsigned integers. 
    //The first element is [1,2,3] and the second is [4,5,6]. 
    //This means that it is an array of arrays of integers, declared using the syntax "uint[][]". 
    //It is also declared as "public" to make it visible to other contracts and accounts.

    function addValue(string memory _value) public { //This is a function in Solidity that allows you to add a new string value to the "values" array.
        values.push(_value); //The function takes one parameter, a string variable named "_value", which represents the string value you want to add to the array.
    } //The function is declared as "public", which means that it can be called from outside the contract by other contracts or accounts on the blockchain.

    function valueCount() public view returns (uint) { //means that it can be called from outside the contract and does not modify any data on the blockchain.
        return values.length; //Inside the function, the "length" property is called on the "values" array to return the number of elements currently stored in the array. 
    } //This value is then returned as an unsigned integer using the "return" keyword.
}