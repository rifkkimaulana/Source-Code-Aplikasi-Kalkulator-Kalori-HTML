/*
*  Copyright (C) 2022 RIFKI MAULANA
*  email. rifkkimaulana@gmail.com
*
*  This program is free software; you can redistribute it and/or modify
*  it under the terms of the GNU General Public License as published by
*  the Free Software Foundation; either version 2 of the License, or
*  (at your option) any later version.
*
*  This program is distributed in the hope that it will be useful,
*  but WITHOUT ANY WARRANTY; without even the implied warranty of
*  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*  GNU General Public License for more details.
*
*  You should have received a copy of the GNU General Public License
*  along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

document.getElementById('calorie-form').addEventListener('submit', function(e){
  document.getElementById('results').style.display = 'none';

  document.getElementById('loading').style.display = 'block';

  setTimeout(calculateCalories, 2000);

  e.preventDefault();
});

function calculateCalories(e) {
  
  const age = document.getElementById('age');
  const gender = document.querySelector('input[name="customRadioInline1"]:checked');
  const weight = document.getElementById('weight');
  const height = document.getElementById('height');
  const activity = document.getElementById('list').value;
  const totalCalories = document.getElementById('total-calories');
  
  
  if (age.value === '' || weight.value === '' || height.value === '' || 80 < age.value || age.value < 15) {
    errorMessage('Please make sure the values you entered are correct')
  } else if(gender.id === 'male' && activity === "1") {
    totalCalories.value = 1.2 * (66.5 + (13.75 * parseFloat(weight.value)) + (5.003 * parseFloat(height.value)) - (6.755 * parseFloat(age.value)));
  } else if(gender.id === 'male' && activity === "2") {
    totalCalories.value = 1.375 * (66.5 + (13.75 * parseFloat(weight.value)) + (5.003 * parseFloat(height.value)) - (6.755 * parseFloat(age.value)));
  } else if (gender.id === 'male' && activity === "3") {
    totalCalories.value = 1.55 * (66.5 + (13.75 * parseFloat(weight.value)) + (5.003 * parseFloat(height.value)) - (6.755 * parseFloat(age.value)));
  } else if(gender.id === 'male' && activity === "4") {
    totalCalories.value = 1.725 * (66.5 + (13.75 * parseFloat(weight.value)) + (5.003 * parseFloat(height.value)) - (6.755 * parseFloat(age.value)));
  } else if(gender.id === 'male' && activity === "5") {
    totalCalories.value = 1.9 * (66.5 + (13.75 * parseFloat(weight.value)) + (5.003 * parseFloat(height.value)) - (6.755 * parseFloat(age.value)))
    ;
  } else if(gender.id === 'female' && activity === "1") {
    totalCalories.value = 1.2 * (655 + (9.563 * parseFloat(weight.value)) + (1.850 * parseFloat(height.value)) - (4.676 * parseFloat(age.value)));
  } else if(gender.id === 'female' && activity === "2") {
    totalCalories.value = 1.375 * (655 + (9.563 * parseFloat(weight.value)) + (1.850 * parseFloat(height.value)) - (4.676 * parseFloat(age.value)));
  } else if(gender.id === 'female' && activity === "3") {
    totalCalories.value = 1.55 * (655 + (9.563 * parseFloat(weight.value)) + (1.850 * parseFloat(height.value)) - (4.676 * parseFloat(age.value)));
  } else if(gender.id === 'female' && activity === "4") {
    totalCalories.value = 1.725* (655 + (9.563 * parseFloat(weight.value)) + (1.850 * parseFloat(height.value)) - (4.676 * parseFloat(age.value)));
  } else {
    totalCalories.value = 1.9 * (655 + (9.563 * parseFloat(weight.value)) + (1.850 * parseFloat(height)) - (4.676 * parseFloat(age.value)));
  } 

  document.getElementById('results').style.display = 'block';

  document.getElementById('loading').style.display = 'none';
}

function errorMessage(error) {
  document.getElementById('results').style.display = 'none';

  document.getElementById('loading').style.display = 'none';
  const errorDiv = document.createElement('div');
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');
  errorDiv.className = 'alert alert-danger';
  errorDiv.appendChild(document.createTextNode(error));

  card.insertBefore(errorDiv, heading);

  setTimeout(clearError, 4000);
}

function clearError() {
  document.querySelector('.alert').remove();
}

