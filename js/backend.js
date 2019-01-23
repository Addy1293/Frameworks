
            function newQuote(input) {
                
                //the url we are making a request to
                // var url = "https://api.chucknorris.io/jokes/random?category=dev";
                var url = "http://numbersapi.com/"+input+"/math?callback=";


                $.ajax({
                    url: url,
                    method: 'get',
                    success: function (data) {
                        //do something when call is successful
                        console.log(data);
                        $('#quote').text(data.value);
                        $('#quote').text(data);

                        $('#url').attr('href', data.url);
                        $('#icon').attr('src', data.icon_url);
                    },
                    error: function (error) {
                        console.log(error);
                        // alert('incorect input');
                    }
                });
            }
            function useInput(){
                
                var input = document.getElementById('input').value
                newQuote(input); 
                document.getElementById('quote').innerHTML = input;
            }

            //Reference for button
            var button = document.getElementById("generate");

            //Run the function on button click
            function generate() {

            // Create a variable to hold a random number between 1 and 100
            var randomNum = Math.floor((Math.random() * 9999) + 1);

            // Create a variable el to hold the ranNum element
            var el = document.getElementById('ranNum');
            
            // Write the number into that element
            el.innerHTML = randomNum;

            useInput(randomNum);
        }
            // $(document).ready(function () {
            //     newQuote();
            //     $('button').on('click', newQuote());
            // });
        ////////////////////////////////////////task/////////////
        // api challenge
        // numbersapi.com/#42
        // use to fetch data
        // onclick
        // display to the user in a friendly way

        // ajax request 
        // random number between 0-9999
        //  create input
        // validate
        // button to submit number
        // user must receive a fun fact about that number
        // gets bound to the button to perform this repetitive task
        
        // outcomes:
        // know api purpose
        // understand the usage o the ajax function
        // know how to create a request
        // display the result
        // use a function to perform a repetitive task

//         $.get('http://numbersapi.com/1337/trivia?notfound=floor&fragment', function(data) {
//     $('#number').text(data);
// });

// function showNumber(str) {
//     document.getElementById('number-fact').innerText = str;
// }

// (function() {
//     var scriptTag = document.createElement('script');
//     scriptTag.async = true;
//     scriptTag.src = "http://numbersapi.com/42/math?callback=showNumber";
//     document.body.appendChild(scriptTag);
// })();

// showNumber(str);


