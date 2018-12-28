pragma solidity >=0.4.22 <0.6.0;
 contract Lottery{
address public  manager;
address [] public players;

constructor() public{
  manager = msg.sender;
}

   function () public payable {
   }

   function enterlottery() public payable
   {
     if (msg.value > 0.1 ether)
     {
       players.push(msg.sender);
     }
   }

   function getbalnace() public view returns (uint)
   {
       return this.balance;
   }

   function winner() public payable
   {
     require(msg.sender == manager);
     uint x= random() % players.length  ;
     players[x].transfer(this.balance);
     players = new address[](0);
   }
   function random() public view returns(uint){
     return uint(sha256(block.difficulty,players,now));
   }
 }
