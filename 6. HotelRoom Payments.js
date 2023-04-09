// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.0;
contract HotelRoom {
    //HotelRoom Payments

    enum Statuses { Vacant, Occupied }
    Statuses currentStatus; //The contract uses an enum named Statuses to define two states - Vacant and Occupied. 
    //The currentStatus variable keeps track of the current status of the hotel room.

    event Occupy(address _occupant, uint _value);

    address payable public owner;

    constructor() public {
        owner = payable(msg.sender);
        currentStatus = Statuses.Vacant;
    } //The contract has a constructor function that initializes the owner variable as the address of the contract deployer
    // and sets the currentStatus as Vacant.

    modifier onlyWhileVacant {
        require(currentStatus == Statuses.Vacant, "Currently occupied.");
        _;
    } //The contract has two modifiers - onlyWhileVacant and costs. 
    //The onlyWhileVacant modifier checks if the room is currently Vacant before allowing any transactions. 
    

    modifier costs (uint _amount) {
        require(msg.value >= _amount, "Not enough Ether provided.");
        _;
    } //The costs modifier checks if the value of Ether sent with the transaction is sufficient.

    receive() external payable onlyWhileVacant costs(2 ether) {
        currentStatus = Statuses.Occupied;
        owner.transfer(msg.value);
        emit Occupy(msg.sender, msg.value);
    } //When a payment is made, the currentStatus is set to Occupied, and the payment amount is transferred to the owner. 
    //The Occupy event is also emitted, which logs the address of the payer and the payment amount.
}