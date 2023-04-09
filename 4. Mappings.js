// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.0;
contract MyContract {
    //Mappings

    mapping(uint => string) public names; //This mapping maps a uint (an integer) to a string.
    //The public keyword makes the mapping publicly readable, meaning anyone can read the value associated with a given key.
    //In the constructor, three values are added to the mapping with keys 1, 2, and 3 respectively.

    mapping(uint => Book) public books; //This mapping maps a uint to a struct of type Book, which is defined within the contract. 
    //Book is a custom struct that contains two string fields: title and author. 
    //The public keyword again makes this mapping publicly readable, so anyone can read the Book struct associated with a given key. 
    //The addBook function allows anyone to add a new Book to the mapping with a given key.

    mapping(address => mapping(uint => Book)) public myBooks; //This mapping maps an address to another mapping, which in turn maps a uint to a Book struct. 
    //This allows each address to have its own set of Book structs associated with different uint keys. 
    //The addMyBook function allows the caller to add a new Book struct to their personal mapping by passing in the uint key, title, and author as arguments.

    struct Book {
        string title;
        string author;
    }

    constructor() public {
        names[1] = "Adam";
        names[2] = "Bruce";
        names[3] = "Carl";
    }

    function addBook(uint _id, string memory _title, string memory _author) public {
        books[_id] = Book(_title, _author);
    }

    function addMyBook(uint _id, string memory _title, string memory _author) public {
        myBooks[msg.sender][_id] = Book(_title, _author);
    }
}