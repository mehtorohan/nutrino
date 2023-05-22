const bmrForm = document.getElementById('bmr-form');
const genderSelect = document.getElementById('gender');
const ageInput = document.getElementById('age');
const heightInput = document.getElementById('height');
const weightInput = document.getElementById('weight');
const resultDiv = document.getElementById('result');

bmrForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const gender = genderSelect.value;
  const age = parseFloat(ageInput.value);
  const height = parseFloat(heightInput.value);
  const weight = parseFloat(weightInput.value);
  const bmr = calculateBMR(weight, height, age, gender);
  const bmrRounded = Math.round(bmr);
  resultDiv.innerHTML = `
    <p>Your BMR is ${bmrRounded} calories/day</p>
    <button type="button" onclick="resetForm()">Reset</button>
  `;
  resultDiv.style.display = 'block';
});

function calculateBMR(weight, height, age, gender) {
  const bmrMale = 88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age);
  const bmrFemale = 447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age);
  return (gender === 'male') ? bmrMale : bmrFemale;
}

function resetForm() {
  bmrForm.reset();
  resultDiv.style.display = 'none';
}
