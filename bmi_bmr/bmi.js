const bmiForm = document.getElementById('bmi-form');
const genderSelect = document.getElementById('gender');
const ageInput = document.getElementById('age');
const heightInput = document.getElementById('height');
const weightInput = document.getElementById('weight');
const resultDiv = document.getElementById('result');

bmiForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const gender = genderSelect.value;
  const age = parseFloat(ageInput.value);
  const height = parseFloat(heightInput.value);
  const weight = parseFloat(weightInput.value);
  const bmi = calculateBMI(weight, height);
  const bmiCategory = getBMICategory(bmi);
  const bmiRounded = Math.round(bmi * 10) / 10;
  resultDiv.innerHTML = `
    <p>Your BMI is ${bmiRounded}</p>
    <p>You are ${bmiCategory}</p>
    <button type="button" onclick="resetForm()">Reset</button>
  `;
  resultDiv.style.display = 'block';
});

function calculateBMI(weight, height) {
  const heightMeters = height / 100;
  return weight / (heightMeters * heightMeters);
}

function getBMICategory(bmi) {
  if (bmi < 18.5) {
    return 'underweight';
  } else if (bmi < 25) {
    return 'normal weight';
  } else if (bmi < 30) {
    return 'overweight';
  } else {
    return 'obese';
  }
}

function resetForm() {
  bmiForm.reset();
  resultDiv.style.display = 'none';
}
