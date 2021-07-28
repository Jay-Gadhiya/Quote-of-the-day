// var quoteArray = [

// {
//     "quote":"You can get everything in life you want if you will just help enough other people get what they want.",
//     "author":"Zig Ziglar"
// },
// {
//     "quote":"Inspiration does exist, but it must find you working.",
//     "author":"Pablo Picasso"
// },
// {
//     "quote":"Don't settle for average. Bring your best to the moment. Then, whether it fails or succeeds, at least you know you gave all you had.",
//     "author":"Angela "
// },
// {
//     "quote":"Show up, show up, show up, and after a while the muse shows up, too.",
//     "author":"Isabel Allende"
// },
// {
//     "quote":"If you believe something needs to exist, if it's something you want to use yourself, don't let anyone ever stop you from doing it.",
//     "author":"Tobias Lütke"
// },
// {
//     "quote":"If there is no struggle, there is no progress.",
//     "author":"Frederick Douglass"
// },
// {
//     "quote":"Courage is like a muscle. We strengthen it by use.",
//     "author":"Ruth Gordo"
// },
// {
//     "quote":"Courage is the most important of all the virtues because without courage, you can't practice any other virtue consistently.",
//     "author":"Maya Angelou"
// },
// {
//     "quote":"Keep a little fire burning; however small, however hidden.",
//     "author":"Cormac McCarthy"
// },
// {
//     "quote":"The only way of discovering the limits of the possible is to venture a little way past them into the impossible.",
//     "author":"Arthur C. Clarke"
// },
// ]

// function randNum(arrayLength){
//     return Math.floor(Math.random()*arrayLength);
// }

// function quoteOfTheDay(){
//     var randomNumber = randNum(qouteArray.length);
//     document.getElementById('quote').innerText ='"'+ quoteArray[randomNumber].quote + '"';
//     document.getElementById('author').innerText ='-'+ quoteArray[randomNumber].author;
// }

// // document.getElementById('btn').addEventListener("click", quoteOfTheDay);

var arrayOfQuotes = [
    {
            "quote":"You can get everything in life you want if you will just help enough other people get what they want.",
            "author":"Zig Ziglar"
        },
        {
            "quote":"Inspiration does exist, but it must find you working.",
            "author":"Pablo Picasso"
        },
        {
            "quote":"Don't settle for average. Bring your best to the moment. Then, whether it fails or succeeds, at least you know you gave all you had.",
            "author":"Angela "
        },
        {
            "quote":"Show up, show up, show up, and after a while the muse shows up, too.",
            "author":"Isabel Allende"
        },
        {
            "quote":"If you believe something needs to exist, if it's something you want to use yourself, don't let anyone ever stop you from doing it.",
            "author":"Tobias Lütke"
        },
        {
            "quote":"If there is no struggle, there is no progress.",
            "author":"Frederick Douglass"
        },
        {
            "quote":"Courage is like a muscle. We strengthen it by use.",
            "author":"Ruth Gordo"
        },
        {
            "quote":"Courage is the most important of all the virtues because without courage, you can't practice any other virtue consistently.",
            "author":"Maya Angelou"
        },
        {
            "quote":"Keep a little fire burning; however small, however hidden.",
            "author":"Cormac McCarthy"
        },
        {
            "quote":"The only way of discovering the limits of the possible is to venture a little way past them into the impossible.",
            "author":"Arthur C. Clarke"
        },
        ]

function randomSelector(arrayLength){
    return Math.floor(Math.random() * arrayLength);
}

function generateQuote(){
    var randomNumber = randomSelector(arrayOfQuotes.length);
    document.getElementById("quote").innerHTML = '"' + arrayOfQuotes[randomNumber].quote + '"';
    document.getElementById("author").innerHTML = '-' + arrayOfQuotes[randomNumber].author;

}