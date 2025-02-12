function growMonsters(){
  let initialPopu = parseFloat(prompt("Enter the initial population:"));
  let growthRate = parseFloat(prompt("Enter the rate of growth:"));
  let time = parseFloat(prompt("Enter the time (in hours):"));
  let finalPopu = Math.round(Math.pow((initialPopu * Math.E),(growthRate * time)))

  let monsterRegion = prompt("Enter the monster's region:");
  let monsterName = prompt("Enter the monster's name:");
  let nameAndLoc = monsterRegion.concat
}
