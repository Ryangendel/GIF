
    var activityButtons = ["skiing", "golf", "hiking", "biking", "canoe", "rafting" ];

    function displayActivityInfo(){
    var activity = $(this).attr("data-name");
    // var activity = "space+jam";
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + activity + "&api_key=dc6zaTOxFJmzC";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response) {
        var results=response.data;
            for (var i ; i < results.length; i++){
                var gifDiv= $("<div class= 'item'>");
                var submittedImage = $("<img>");
                submittedImage.attr("src", results.data[1].images.fixed_height.url);
                gifDiv.append(submittedImage);
            $("#gifsGoHere").prepend(gifDiv);
            }
      // var activityInputDiv=$("<div class='activityinput'>");
      // var rating = response.data[0].rating;
      // var pOne=$("<p>").text("Rating:" + rating);
      // activityInputDiv.append(pOne); 
          
      // var imageURL = $('<img>');

      // response.data[0].images.fixed_height.url;
      // var pTwo=$('<img>').text(imageURL);
      
      // $('#info').append(activityInputDiv);
    });
 }

    function renderButtons(){
        $('#activities').empty();
        for ( var i = 0; i<activityButtons.length; i++){
               var a = $('<button>');
               a.addClass("userActivity");
               // why or how is prepop within this function attached to "data-name"
               a.attr("data-name", activityButtons[i]);
               a.text(activityButtons[i]);
               $('#activities').append(a);
               console.log(a);
        }
    }

    
    $('#addActivity').on('click', function(event){
        event.preventDefault();
        // what happens when you define the same variable within two seperate functions?
        // var userActivity = $('#suggestedActivities').val().trim();
   
        var activity = $('#suggestedActivities').val().trim();
        activityButtons.push(activity);
        renderButtons();


    });

    $(document).on("click",".userActivity", displayActivityInfo);

    renderButtons();


// ---------------------------------------------------------

    // console.log("This console.log will probably happen first because of asynchronicity.");
    // var x = 2;
    // var y = 10;
    // var z = 13;
    // console.log("We can also assign some variables and do some arithmetic while we wait too: 2 + 10 + 13 = ", x + y + z);
