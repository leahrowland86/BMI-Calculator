  console.log('Hello World!');

  /*****************************
  * Variables and data types
  */

  // let firstName = 'John';
  // console.log(firstName);
  //
  // let lastName = 'Smith';
  // console.log(lastName);
  //
  // let age = '1000000';
  // console.log(age);
  //
  // let fullAge = true;
  // console.log(fullAge);
  //
  // let job;
  // job = 'Doctor';
  // console.log(job);


  /*****************************
  * Variable mutation and type coercion
  */

  // console.log(firstName + ' ' + lastName + ' the ' + job + ' is ' + age + " years old");
  //
  // let fakeJob, isMarried;
  // job = 'Teacher';
  // isMarried = false;
  //
  // console.log('Is John married? ' + isMarried);
  //
  // age = "one million";
  // job = "space man";
  //
  // alert(firstName + ' ' + lastName + ' the ' + job + ' is ' + age + " years old");
  //
  // lastName = prompt('What is John\'s last name?');
  // console.log(firstName + ' The Doctor ' + lastName);


  /*****************************
  * Basic Operators
  */
  // const d = new Date();
  // const now = d.getFullYear()
  // const ageJohn = 1990;
  // const yearJohn = now-ageJohn;
  // const ageMark = 1985;
  // const yearMark = now-ageMark;
  // console.log(yearJohn);
  // console.log(yearMark);
  // console.log(now + 2);
  // console.log(now * 2);
  // console.log(now / 10);
  //
  // let johnOlder = yearJohn < yearMark;
  // console.log(johnOlder);
  //
  // console.log(typeof d);
  // console.log(typeof now);
  // console.log(typeof ageJohn);
  // console.log(typeof yearJohn);
  // console.log(typeof johnOlder);

  /*****************************
  * Operator precedence
  */

  // PEMDAS

  /*
  var now = 2018;
  var yearJohn = 1989;
  var fullAge = 18;
  // Multiple operators
  var isFullAge = now - yearJohn >= fullAge; // true
  console.log(isFullAge);
  // Grouping
  var ageJohn = now - yearJohn;
  var ageMark = 35;
  var average = (ageJohn + ageMark) / 2;
  console.log(average);
  // Multiple assignments
  var x, y;
  x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
  console.log(x, y);
  // More operators
  x *= 2;
  console.log(x);
  x += 10;
  console.log(x);
  x--;
  console.log(x);
  */

  /*****************************
  * CODING CHALLENGE 1
  */

  /*
  Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
  1. Store Mark's and John's mass and height in variables
  2. Calculate both their BMIs
  3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
  4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true").
  GOOD LUCK 😀
  */
  function bmiCalculation(weight, heightMain, heightSub) {
    debugger;

    let metricRadioButton = document.getElementById('metric').checked;
    let imperialRadioButton = document.getElementById('imperial').checked;

    let weightInputBox = Number(document.getElementById('weight').value);
    let heightMainInputBox = Number(document.getElementById('heightMain').value);
    let heightSubInputBox = Number(document.getElementById('heightSub').value);

     weight = document.getElementById('weight').value;
     heightMain = document.getElementById('heightMain').value;
     heightSub = document.getElementById('heightSub').value;

     if (
       (!metricRadioButton &&
       !imperialRadioButton)
     ) {
       document.getElementById("weight").style.display = 'none';
       document.getElementById("heightMain").style.display = 'none';
       document.getElementById("heightSub").style.display = 'none';
     }
      else if (metricRadioButton) {
        document.getElementById("weight").style.display = 'block';
        document.getElementById("heightMain").style.display = 'block';
        document.getElementById("heightSub").style.display = 'none';
     } else if (imperialRadioButton) {
       document.getElementById("weight").style.display = 'block';
       document.getElementById("heightMain").style.display = 'block';
       document.getElementById("heightSub").style.display = 'block';
     }

     let bmiTotal = '';

     if ((metricRadioButton || imperialRadioButton) && (weight == 0 || heightMain == 0 || heightMain == 0)) {
       bmiTotal = 0;
    } else if (metricRadioButton) {
      bmiTotal = (weight / ((heightMain) * (heightMain)));
    } else if (imperialRadioButton) {
      bmiTotal = ((weight * 0.45359237) /
      (
        ((heightMain * 0.3048) + (heightSub * 0.0254)) *
        ((heightMain * 0.3048) + (heightSub * 0.0254))
      )
    )
  };

  document.getElementById("bmi").innerText = `BMI: ${bmiTotal}`;
  }

  let radioMetric = document.querySelector("#metric");
  radioMetric.addEventListener('click', function(e) {
    bmiCalculation();
  });

  let radioImperial = document.querySelector("#imperial");
  radioImperial.addEventListener('click', function(e) {
    bmiCalculation();
  });

  submit.addEventListener('click', function(e) {
    e.preventDefault();
    bmiCalculation();
  });

  window.onload=bmiCalculation;
