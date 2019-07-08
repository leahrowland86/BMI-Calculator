
  function bmiCalculation(weight, heightMain, heightSub) {

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
