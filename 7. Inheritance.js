// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.0;
contract Ownable {
    //Inheritance

    address owner;

    constructor() public {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "must be owner");
        _;
    }
}

contract SecretValut {
    string secret;

    constructor(string memory _secret) public {
        secret = _secret;
    }

    function getSecret() public view returns(string memory) {
        return secret;
    }
}

contract MyContract is Ownable {
    address secretVault;

    constructor(string memory _secret) public {
        SecretValut _secretVault = new SecretValut(_secret);
        secretVault = address(_secretVault);
        super;
    }

    function getSecret() public view onlyOwner returns(string memory) {
        SecretValut _secretVault = SecretValut(secretVault);
        return _secretVault.getSecret();
    }
}

//This code shows an example of inheritance in Solidity. 
//The Ownable contract is the parent contract with shared functionality and the MyContract contract is the child contract 
//that inherits the Ownable contract using the keyword is Ownable. 
//The SecretValut contract is an independent contract that stores a secret string value and has a public function getSecret() to retrieve it. 
//The MyContract contract creates an instance of the SecretValut contract in its constructor and has a public function getSecret() 
//that calls the getSecret() function of the SecretValut contract, but only if the caller is the owner.