/*
Russian language
-----------------------
здесь написано что происходит в коде, код написан 27 ноября в 2023 году
------------------------------------------
в этой игре нужно угадать слово но ты ограничен попытками их всего 15
-----------------------------------------------------------------------
words - массив слов которые ты должен будешь угадать
word - рандомайзер выбирает любое слово из списка
answerArray - здесь будут хранится нижнии подчеркивания
attempts- твои попытки которые ограничивают тебя
59-60 for - оно подсчитывает сколько букв в слове и ставит нижнее подчеркивание вместо буквы 
remainingLetters - оставшиеся буквы в слове
while - в условие написано то что если не осталось букв то игра заканчивается и вы выигрываете но если попыток не останется вы проиграете
guess - показывает окно где вы должны написать букву если нажмете на отмена игры не будет и делает вашу букву маленькой если вы поставили большую
else if (attempts == 0 ) - если ваши попытки закончатся вам покажет окно то что вы проиграли
else if (guess.length !==1) - если введете больше одной буквы то вы вернетесь оюратно на выбор буквы
for (var j = 0; j < word.length; j++){ -ставит букву на то место где оно должно стоять вместо нижнего подчеркивания
if и else - это конец игры если вы проиграете то будет названо слово если выйграете мы вас поздравим
------------------------------
------------------------------
English language
-------------------------
here it is written what happens in the code, code written on November 27, 2023
------------------------------------------
in this game you need to guess the word but you are limited to only 15 attempts
-------------------------------------------------- ---------------------
words - an array of words that you will have to guess
word - randomizer selects any word from the list
answerArray - underscores will be stored here
attempts - your attempts that limit you
59-60 for - it counts how many letters are in the word and puts an underscore instead of the letter
remainingLetters - remaining letters in the word
while - the condition says that if there are no letters left, the game ends and you win, but if there are no more attempts left, you will lose
guess - shows a window where you should write a letter if you click on cancel the game will not work and makes your letter small if you put a big one
else if (attempts == 0 ) - if your attempts end, a window will show you that you lost
else if (guess.length !==1) - if you enter more than one letter, you will be returned to the letter selection
for (var j = 0; j < word.length; j++){ - puts the letter in the place where it should be instead of the underscore
if and else - this is the end of the game; if you lose, the word will be called; if you win, we congratulate you

*/
let words = [
    "дверь",
    "палка",
    "удобрение",
    "мультимедия",
    "кинотеатр",
    "плата",
    "процессор",
    "матрас",
    "сетка",
    "солнечная"
];
let word = words[Math.floor(Math.random() * words.length)];

let answerArray = [];
let attempts = 15;

for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}
let remainingLetters = word.length;

while (remainingLetters > 0 && attempts > 0){
    alert(answerArray.join(" "));
 
    let guess =prompt("Угадайте слово или нажмите отменя для выхода из игры");//А
    guess = guess.toLowerCase();
    attempts--;
    if (guess === null) {
        break;
    }else if (attempts === 0 ){
    alert("Ваши попытки закончились вы проиграли")
    break;
    }else if (guess.length !==1) {
        alert("Пожалуйста,введите только одну букву.")
    }else{
        for (let j = 0; j < word.length; j++){
            if (word[j] === guess && answerArray[j] === "_") {
            answerArray[j] = guess;
            remainingLetters--;
            }
        }
    }
}
alert(answerArray.join(" "));
if (attempts > 0){
alert("Поздравляем вы выйграли Было загадано " + word);
}else{
    alert("Было загадано " + word);
}
    