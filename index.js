/* You will receive a person's age

From the person's age, you will classify them into:

0 to 2 years: Baby
3 to 6 years: Small Child (early childhood)
7 to 12 years: Child
13 to 14 years: Pre-teen
15 to 17 years: Teenager
18 to 24 years: Young Adult
25 to 39 years: Early Adult
40 to 59 years: Adult
60 to 74 years: Young Elderly (third age)
75 to 84 years: Elderly
85 years or older: Advanced Elderly (longevity)

With the person's age, we want:

-Their age range
-Image of the age range
-Background corresponding to the age range.

In addition, you must perform validations, such as with age less than 0 or age greater than 200
If the person's age is invalid, you must also point out an error and include an image corresponding to an error and background as well.

*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Age Range Calculator

// Asks the user for their age and converts the response to a number
var userAge = Number(prompt("How old are you?"));

// Variables that store the paths of the images corresponding to each age group
var imgBaby = "assets/baby.png";
var imgChildSmall = "assets/child-small.png";
var imgChild = "assets/child.png";
var imgPreTeen = "assets/pre-teen.png";
var imgTeen = "assets/teen.png";
var imgYoungAdult = "assets/young-adult.png";
var imgAdultYoung = "assets/adult-young.webp";
var imgAdult = "assets/adult.webp";
var imgSeniorYoung = "assets/senior-young.avif";
var imgSenior = "assets/senior.png";
var imgSeniorAdvanced = "assets/senior-advanced.webp";
var imgError = "assets/error.webp";

// Variables that store the Tailwind classes for the background colors corresponding to each age group
var bgBaby = "bg-teal-300";
var bgChildSmall = "bg-green-300";
var bgChild = "bg-blue-300";
var bgPreTeen = "bg-indigo-300";
var bgTeen = "bg-purple-300";
var bgYoungAdult = "bg-yellow-500";
var bgAdultYoung = "bg-orange-400";
var bgAdult = "bg-amber-800";
var bgSeniorYoung = "bg-zinc-400";
var bgSenior = "bg-zinc-600";
var bgSeniorAdvanced = "bg-zinc-800";
var bgError = "bg-red-600";

// Initialize the variables that will be used to store the ratings
var userAgeRange = null; // Stores the corresponding age range
var userAgeImage = null; // Store the corresponding image
var userAgeBackground = " "; // Store the background color
// The userAgeBackground variable is initialized with an empty string (" ") to avoid concatenation errors or unexpected behavior by ensuring an initial value.

// Conditional to check user age range and assign values
if (userAge >= 0 && userAge < 3) {
  userAgeRange = "Baby";
  userAgeImage = imgBaby;
  userAgeBackground += bgBaby;
} else if (userAge >= 3 && userAge < 7) {
  userAgeRange = "Small Child (early childhood)";
  userAgeImage = imgChildSmall;
  userAgeBackground += bgChildSmall;
} else if (userAge >= 7 && userAge < 13) {
  userAgeRange = "Child";
  userAgeImage = imgChild;
  userAgeBackground += bgChild;
} else if (userAge >= 13 && userAge < 15) {
  userAgeRange = "Pre-teen";
  userAgeImage = imgPreTeen;
  userAgeBackground += bgPreTeen;
} else if (userAge >= 15 && userAge < 18) {
  userAgeRange = "Teenager";
  userAgeImage = imgTeen;
  userAgeBackground += bgTeen;
} else if (userAge >= 18 && userAge < 25) {
  userAgeRange = "Young Adult";
  userAgeImage = imgYoungAdult;
  userAgeBackground += bgYoungAdult;
} else if (userAge >= 25 && userAge < 40) {
  userAgeRange = "Early Adult";
  userAgeImage = imgAdultYoung;
  userAgeBackground += bgAdultYoung;
} else if (userAge >= 40 && userAge < 60) {
  userAgeRange = "Adult";
  userAgeImage = imgAdult;
  userAgeBackground += bgAdult;
} else if (userAge >= 60 && userAge < 75) {
  userAgeRange = "Young Elderly (third age)";
  userAgeImage = imgSeniorYoung;
  userAgeBackground += bgSeniorYoung;
} else if (userAge >= 75 && userAge < 85) {
  userAgeRange = "Elderly";
  userAgeImage = imgSenior;
  userAgeBackground += bgSenior;
} else if (userAge >= 85 && userAge < 200) {
  userAgeRange = "Advanced Elderly (longevity)";
  userAgeImage = imgSeniorAdvanced;
  userAgeBackground += bgSeniorAdvanced;
} else {
  // Error case: Invalid age (less than 0 or greater than 200)
  userAgeRange = "erro";
  userAgeImage = imgError;
  userAgeBackground += bgError;
}

// Applies the corresponding tailwind class to the page background
document.body.className += userAgeBackground;

// Sets the image based on the user's age range
document.getElementById("ageImage").setAttribute("src", userAgeImage);

// Displays the message with the age range or error
document.getElementById("ageMessage").innerText =
  userAgeRange === "erro"
    ? "Invalid age. Please enter a value between 0 and 200."
    : "Your age range is: " + userAgeRange;
