// This function will get JSON data from the server and call the printWeatherData function!
//The argument displayFunction is a function!
function getUserData(displayFunction){
    var result = null;
    var xhr = new XMLHttpRequest(); 
    var title = (document.getElementById('title').value).split(' ').join('+')
    var type = document.getElementById('type').value
    xhr.open('GET', 'https://www.omdbapi.com/?apikey=eae4ab59&t='+title+'&type='+type);
    xhr.send()
    xhr.onload = function (){
      if(xhr.status == 200){
        result = JSON.parse(xhr.response);
        displayFunction(result);
      }
      else{
        console.log("Error Code is:" + xhr.status);
      }
    } 
  }
  
  // This function will check the input to see if it is null and print the input to a p tag if it is not null.
  var printUserData = function (input){
    var body = document.querySelector('body');
    var display = document.querySelector('.display');
    // var display = document.createElement('p');
    if(input == null){ // checking if the input is null
      display.textContent = "Error! No user data received or invalid request!";
      //It will print an error if the input is null
    }
    else{
    
    // var display1 = document.querySelector('.display .box');

    // if(display1 != null){
    //     display1.remove()
    // }

    var display1 = document.querySelectorAll('.display .box');
        console.log(display1)
    if(display1 != null){
        for(i=0;i<display1.length;i++){
            display1[i].remove()
        }
    }

      var div1 = document.createElement('div')
      div1.setAttribute('class','card mb-3 box')
      var img = document.createElement('img')
      img.setAttribute('class','card-img img-fluid')
      img.setAttribute('alt','img')
      src = input['Poster']
      img.setAttribute('src',src)
      var div2 = document.createElement('div')
      div2.setAttribute('class','row no-gutters')

      var div3 = document.createElement('div')
      div3.setAttribute('class','col-md-4')

      var div4 = document.createElement('div')
      div4.setAttribute('class','col-md-8')

      var div5 = document.createElement('div')
      div5.setAttribute('class','card-body')

      var h5 = document.createElement('h5')
      h5.setAttribute('class','card-title font-weight-bolder')
      h5.innerHTML = 'Title : ' + input['Title']

      var p1 = document.createElement('p') 
      p1.setAttribute('class','card-text font-weight-bolder') 
      p1.innerHTML = 'Year : ' +input['Year']
      var p2 = document.createElement('p')
      p2.setAttribute('class','card-text font-weight-bolder') 
      p2.innerHTML = 'Realeased : ' +input['Released']
      var p3 = document.createElement('p')  
      p3.setAttribute('class','card-text font-weight-bolder')
      p3.innerHTML = 'Genre : ' +input['Genre']
      var p4 = document.createElement('p')  
      p4.setAttribute('class','card-text font-weight-bolder') 
      p4.innerHTML = 'Director : ' +input['Director']
      var p5 = document.createElement('p')  
      p5.setAttribute('class','card-text font-weight-bolder') 
      p5.innerHTML = 'Writer : ' +input['Writer']
      var p6 = document.createElement('p')  
      p6.setAttribute('class','card-text font-weight-bolder') 
      p6.innerHTML = 'Actors : ' +input['Actors']
      var p7 = document.createElement('p')  
      p7.setAttribute('class','card-text font-weight-bolder') 
      p7.innerHTML = 'Plot : ' +input['Plot']
      var p8 = document.createElement('p')  
      p8.setAttribute('class','card-text font-weight-bolder') 
      p8.innerHTML = 'Language : ' +input['Language']
      var p9 = document.createElement('p')  
      p9.setAttribute('class','card-text font-weight-bolder') 
      p9.innerHTML = 'Country : ' +input['Country']
      var p10 = document.createElement('p')  
      p10.setAttribute('class','card-text font-weight-bolder') 
      p10.innerHTML = 'Awards : ' +input['Awards']
      var p11 = document.createElement('p')  
      p11.setAttribute('class','card-text font-weight-bolder')
      p11.innerHTML = 'imdbRating : ' +input['imdbRating']
    //   var p12 = document.createElement('p')  
    //   p12.setAttribute('class','card-text') 

      div5.append(h5,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11)
      div3.append(img)  
      div4.append(div5)  
      div2.append(div3,div4)  
      div1.append(div2)  

    }
    display.append(div1)
    // body.append(display);
  }
  
  //Button and listener for the `click here to print the user data!` button
  var displayBtn = document.querySelector('#search1')
  displayBtn.addEventListener('click',function(){
    getUserData(printUserData);
  });




  // This function will get JSON data from the server and call the printWeatherData function!
//The argument displayFunction is a function!
function getUserData2(displayFunction){
    var result = null;
    var xhr = new XMLHttpRequest(); 
    var title = (document.getElementById('searchAll').value).split(' ').join('+')
    xhr.open('GET', 'https://www.omdbapi.com/?apikey=eae4ab59&s='+title);
    xhr.send()
    xhr.onload = function (){
      if(xhr.status == 200){
        result = JSON.parse(xhr.response);
        displayFunction(result);
      }
      else{
        console.log("Error Code is:" + xhr.status);
      }
    } 
  }
  
  // This function will check the input to see if it is null and print the input to a p tag if it is not null.
  var printUserData2 = function (input){
    var body = document.querySelector('body');
    var display = document.querySelector('.display');
    // var display = document.createElement('p');
    if(input == null){ // checking if the input is null
      display.textContent = "Error! No user data received or invalid request!";
      //It will print an error if the input is null
    }
    else{
    
    var display1 = document.querySelectorAll('.display .box');
        console.log(display1)
    if(display1 != null){
        for(i=0;i<display1.length;i++){
            display1[i].remove()
        }
    }
    console.log(input['Search'][0]['Title'])
    for(j=0;j<input['Search'].length;j++){

        // console.log(input['Search'][j])
      var div1 = document.createElement('div')
      div1.setAttribute('class','card mb-3 box')
      var img = document.createElement('img')
      img.setAttribute('class','card-img img-fluid')
      img.setAttribute('alt','img')
      src = input['Search'][j]['Poster']
      img.setAttribute('src',src)
      var div2 = document.createElement('div')
      div2.setAttribute('class','row no-gutters')

      var div3 = document.createElement('div')
      div3.setAttribute('class','col-md-4')

      var div4 = document.createElement('div')
      div4.setAttribute('class','col-md-8')

      var div5 = document.createElement('div')
      div5.setAttribute('class','card-body')

      var h5 = document.createElement('h5')
      h5.setAttribute('class','card-title font-weight-bolder')
      h5.innerHTML = 'Title : ' + input['Search'][j]['Title']

      var p1 = document.createElement('p') 
      p1.setAttribute('class','card-text font-weight-bolder') 
      p1.innerHTML = 'Year : ' +input['Search'][j]['Year']
 

      div5.append(h5,p1)
      div3.append(img)  
      div4.append(div5)  
      div2.append(div3,div4)  
      div1.append(div2)  

      display.append(div1)
    }

    // body.append(display);
    }

  }
  
  //Button and listener for the `click here to print the user data!` button
  var displayBtn2 = document.querySelector('#search2')
  displayBtn2.addEventListener('click',function(){
    getUserData2(printUserData2);
  });