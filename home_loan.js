
        function calculateEMI() {
            var loan_amount = parseFloat(document.getElementById("loan_amount").value);
            var interest_rate = parseFloat(document.getElementById("interest_rate").value);
            var loan_term = parseFloat(document.getElementById("loan_term").value);

            // Convert interest rate to monthly decimal rate
            var monthly_interest_rate = interest_rate / 100 / 12;

            // Convert loan term to months
            var loan_term_months = loan_term * 12;

            // Calculate monthly payment
            var monthly_payment = (loan_amount * monthly_interest_rate) / (1 - Math.pow(1 + monthly_interest_rate, -loan_term_months));

            // Calculate total payment
            var total_payment = monthly_payment * loan_term_months;

            // Calculate total interest
            var total_interest = total_payment - loan_amount;

            var results = document.getElementById("results");
            results.innerHTML = "<h2>Results</h2>";
            results.innerHTML += "<p>Loan Amount: &#x20B9; " + loan_amount.toFixed(2) + "</p>";
            results.innerHTML += "<p>Interest Rate: " + interest_rate.toFixed(2) + "%</p>";
            results.innerHTML += "<p>Loan Term: " + loan_term.toFixed(2) + " years</p>";
            results.innerHTML += "<p>Monthly Payment: &#8377; " + monthly_payment.toFixed(2) + "</p>";
            results.innerHTML += "<p>Total Interest: &#8377; " + total_interest.toFixed(2) + "</p>";
            results.innerHTML += "<p>Total Payment: &#8377; " + total_payment.toFixed(2) + "</p>";

        }
   