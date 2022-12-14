// PROJECT NO2 - LOAN CALCULATOR
// alert('Here we go!')

// Listen for submit
document.getElementById('loan-form').addEventListener('submit', function(e){
  // hide results
  document.getElementById('results').style.display = 'none';
 
  // Show loader
  document.getElementById('loading').style.display = 'block';
  e.preventDefault()

  // show results after 2000ms
  setTimeout(calculateResults, 2000);
})

// Calcute Results
function calculateResults(){
  // UI vars
  const amount =  document.getElementById('amount')
  const interest = document.getElementById('interest')
  const years = document.getElementById('years')
  const monthlyPayment = document.getElementById('monthly-payment')
  const totalPayment = document.getElementById('total-payment')
  const totalInterest = document.getElementById('total-interest')

  const principal = parseFloat(amount.value)
  const calculatedInterest = parseFloat(interest.value)/ 100 / 12
  const calculatedPayments = parseFloat(years.value) * 12

  // Compute monthly payment
  const x = Math.pow(1 + calculatedInterest, calculatedPayments)
  const monthly = (principal * x * calculatedInterest ) / (x-1)

  if(isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2)

    // show results
    document.getElementById('results').style.display = 'block';

    // hide loader
    document.getElementById('loading').style.display = 'none';
  } else {
    // console.log('Please Check your numbers')
    showError('Please check your numbers');
  }

  // console.log('it is calculated!')
  
}

// Show Error
function showError(error){
  // hide results
  document.getElementById('results').style.display = 'none';
  
  // hide loader
  document.getElementById('loading').style.display = 'none';
  
  // create div element
  const errorDiv = document.createElement('div');

  // Get elements
  const card = document.querySelector('.card')
  const heading = document.querySelector('.heading')


  // add class
  errorDiv.className = 'alert alert-danger';

  // create text node and append to div
  errorDiv.appendChild(document.createTextNode(error))

  // Insert error above heading
  card.insertBefore(errorDiv, heading);

  

  // Clear error after 3 seconds
  setTimeout(clearError, 3000)

}

// clear Error
function clearError(){
  document.querySelector('.alert').remove()
}