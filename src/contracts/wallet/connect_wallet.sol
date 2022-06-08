// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.14;

contract Wallet {
    address public owner;
    address public wallet;
    function public_wallet(address _owner, address _wallet) public {
        owner = _owner;
        wallet = _wallet;
    }
    function connect(address _wallet) public {
        wallet = _wallet;
    }
    function disconnect() public {
        wallet = address(0);
    }
    function isConnected() public view returns (bool) {
        return wallet != address(0);
    }
/* This function will return the address of the wallet*/
    function getWallet() public view returns (address) {
        return wallet;
    }
    function transfer() public view {
        require(wallet == msg.sender);
    }
}

contract Collect_Donations is Wallet {
/* extends Wallet */
    uint public totalDonations;
    mapping(address => uint) public donations;
    function collectDonations(address _owner, address _wallet) public {
        totalDonations = 0;
    }
    function donate(uint _value) public {
        require(msg.sender != address(0));
        require(msg.sender != wallet);
        require(_value > 0);
        require(donations[msg.sender] == 0);
        donations[msg.sender] = _value;
        totalDonations += _value;
    }
    function withdraw(uint _value) public {
        require(msg.sender == wallet);
        require(_value > 0);
        require(_value <= totalDonations);
        totalDonations -= _value;
    }
    function getDonations() public view returns (uint) {
        return totalDonations;
    }
    function getDonation(address _donator) public view returns (uint) {
        return donations[_donator];
    }
}