const weaponMessages = [
    "The sword gleams in the moonlight, ready for battle.",
    "The sniper rifle is a precision instrument of destruction.",
    "The ancient samurai carried a katana, a symbol of honor and skill.",
    "The shotgun delivers devastating close-range firepower.",
    "The crossbow is a silent killer, striking from the shadows.",
    "The rocket launcher can level buildings with a single shot.",
    "The ninja's throwing stars are deadly in the hands of a master.",
    "The medieval knight wields a heavy mace, crushing armor and bone.",
    "The pistol is a trusty sidearm for any adventurer.",
    "The warhammer is a brutal weapon favored by barbarians."
  ];


function genrateRandomMessage(){

   
      // Function to generate a random weapon message

      let num =Math.floor(Math.random()*10+1);

      console.log(weaponMessages[num]);
      
      
} 
genrateRandomMessage();