//listen for submit

document.getElementById('loan-form').addEventListener('submit', function(e){
  //hide results
 
  document.getElementById('results').style.display = 'none';
   //show loader

   document.getElementById('loading').style.display = 'block';


   setTimeout(calculateResults, 2000);
e.preventDefault();
});



function calculateResults(e){


    console.log('calculating...');

    
      



    //UI Vars

    const amount =  document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
     const monthlyPayment = document.getElementById('monthly-payment');
     const totalPayment = document.getElementById('total-payment');
     const totalInterest = document.getElementById('total-interest');




     const principal = parseFloat(amount.value);
     const calculatedInterest = parseFloat(interest.value)/100/12;

     const calculatedPayments = parseFloat(years.value)*12;

     //compute monthly payment

     const x = Math.pow(1+ calculatedInterest, calculatedPayments);
     const monthly = (principal*x*calculatedInterest)/(x-1);

     if(isFinite(monthly)){
         monthlyPayment.value = monthly.toFixed(2);
         totalPayment.value = (monthly*calculatedPayments).toFixed(2);
         totalInterest.value = ((monthly*calculatedPayments) - principal).toFixed(2);
         //show results

         document.getElementById('results').style.display = 'block';

         //hide loader

         document.getElementById('loading').style.display = 'none';
     } else {
         showError('Please check your number ')
     }
}

function showError(err){

     //show results

     document.getElementById('results').style.display = 'none';

     //hide loader

     document.getElementById('loading').style.display = 'none';
    //create a div
    const errdiv = document.createElement('div');


    //get elements
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');
    //add class
    errdiv.className = 'alert alert-danger';

    //create text node append to div

    errdiv.appendChild(document.createTextNode(err));

    //insert error to div

    card.insertBefore(errdiv, heading);
    //clear after 3 sec

    setTimeout(claerError, 3000);
}


function claerError(){
    document.querySelector('.alert').remove();
}