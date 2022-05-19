pragma solidity 0.8.14;

contract Collect_Donations {
    function donate(uint256 amount) public payable {
        amount = amount * 1000000000000000000;
        var donation = new Donation();
        donation.donor = msg.sender;
        donation.amount = amount;
        donation.timestamp = block.timestamp;
        donations.push(donation);
        return amount;
    }
    function sender (address sender) public view returns (uint256) {
        return donations[sender];
    }
}