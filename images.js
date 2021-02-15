$(document).ready(function () {
    $("button").click(runLoops);
});

function runLoops() {
    // Clear out all existing images from divs
    $("div.imageHolder").empty();

    // Get the number from the box
    let num = parseInt($("input#numPics").val());

    // Print the desired number of images for each loop
    $("span#while-num").text(num + 1);
    $("span#do-while-num").text(num - 1);
    $("span#for-num").text(num);


    /*
     Create a while loop that runs "num + 1" times.

     The body of the loop should contain the statement:

        addImageToDiv("#while-loop");

    */
    let numNeeded = num +1;
    let numCreated = 0;

    while (numCreated < numNeeded){
        addImageToDiv("#while-loop");
        numCreated++;
    }





    /*
     Create a do-while loop that runs "num - 1" times.

     The body of the loop should contain the statement:

        addImageToDiv("#do-while-loop");
    */
    let numNeeded2 = num - 1;
    let numCreated2 = 0;

    do{
        addImageToDiv("#do-while-loop");
        numCreated2++;
    }
    while (numCreated2 < numNeeded2);





    /*
     Create a for loop that runs exactly "num" times.

     The body of the loop should contain the statement:

        addImageToDiv("#for-loop");
    */
    let numCreated3 = 0;

    for(;numCreated3 < num;){
        addImageToDiv("#for-loop");
        numCreated3++;
    }





}

function addImageToDiv(divId) {
    let fileName = $(":radio[name='pictureSelect']:checked").val();
    // Create a new image element
    let imageElement = $("<img>");
    // Set its source attribute
    imageElement.attr("src", `img/${fileName}`);
    // Add it as a child of another element
    $(divId).append(imageElement);
}