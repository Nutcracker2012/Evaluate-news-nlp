//Chain events
function handleSubmit(event) {
    event.preventDefault()

    //get the text
    // let formText = document.getElementById('name').value

    let inputURL = document.getElementById('name').value;

    if (Client.validateURL(inputURL)) {

        console.log("::: Form Submitted :::")
        fetch('http://localhost:8082/sentimentData', {
                method: 'POST',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ text: inputURL }),
            })
            .then(res => res.json())
            .then(function(res) {
                console.log(res);
                document.getElementById('Polarity').innerHTML = `Polarity: ${res.polarity}`;
                document.getElementById('Subjectivity').innerHTML = `Subjectivity: ${res.subjectivity}`;
                document.getElementById('PolarityConfidence').innerHTML = `Polarity Confidence: ${res.polarity_confidence}`;
                document.getElementById('SubjectivityConfidence').innerHTML = `Subjectivity Confidence: ${res.subjectivity_confidence}`;
            }).catch(err => {
                console.log(err);
            });
    } else {

        // Display error message if URL is not valid
        alert("Please Enter a Valid URL")

    }


}


// // Async POST 
// // Post Route: take two arguments, the URL to make a POST to, and an object holding the data to POST.
// const postData = async(url = '', data = {}) => {

//     const response = await fetch(url, {
//         method: 'POST',
//         credentials: 'same-origin',
//         // set the application to run json file
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         //use JSON.stringify to turn data into json format
//         body: JSON.stringify(data), // body data type must match "Content-Type" header        
//     });

//     console.log(url, 'post half check')

//     try {
//         const newData = await response.json();
//         console.log("add success");
//         return newData
//     } catch (error) {
//         console.log("error2", error);
//     }
// }



// //Update UI
// const updateUI = async() => {
//     const request = await fetch('/all');
//     try {
//         const UIData = await request.json();
//         const length = UIData.length
//         console.log(UIData)
//         document.getElementById("polarity").innerHTML = 'polarity: ' + UIData[length - 1].textPolarity;
//         document.getElementById('subjectivity').innerHTML = 'subjectivity: ' + UIData[length - 1].textSubjectivity;
//         document.getElementById('text').innerHTML = 'text ' + UIData[length - 1].userInput;
//         document.getElementById('polarity_confidence').innerHTML = 'polarity_confidence: ' + UIData[length - 1].textPolarityConfidence;
//         document.getElementById('subjectivity_confidence').innerHTML = 'subjectivity_confidence: ' + UIData[length - 1].textSubjectivityConfidence;

//     } catch (error) {
//         console.log("error3", error);
//     }
// }

export { handleSubmit }