//-----------Guess The Number----------------

//1.Generate thr random number with the Math.random() function.
let random_num = Math.floor(Math.random()* 100) + 1;

//Take the input as a guess from user 
let user_guess = prompt("Guess the number between 1 to 100");

//Mentain the trial count of user
let trial =0;

//Play until the number is not matched
while(user_guess != random_num)
  {
    if(user_guess < random_num)
    {
      user_guess = prompt("Your guess is too low. Try again");
    }
    else if(user_guess > random_num)
    {
      user_guess = prompt("Your guess is too high. Try again");  
    }
    else{
      console.log("You guessed the correct number");
    }
    trial++;
  }
//print the score of user
let score = 100-trial;
console.log("\nYour score is " + score);


