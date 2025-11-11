// Feature 1: Form Validation
function validateForm() {
  const firstName = document.getElementById("fname").value.trim();
  const lastName = document.getElementById("lname").value.trim();
  const email = document.getElementById("email").value.trim();
  const donationAmount = document.querySelector('input[name="amount"]:checked');

  if (!firstName || !lastName || !email || !donationAmount) {
    alert("Please fill in all required fields.");
    return false;
  }

  // Feature 2: Email Validation
  if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  return true;
}

// Email Validation Function
function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(email);
}

// Feature 3: Donation Amount Check
document.addEventListener('DOMContentLoaded', function() {
  const otherAmountField = document.querySelector('.other-amt');
  const monthlyLine = document.querySelector('.monthly-line');

  // Hide optional fields on load
  otherAmountField.style.display = 'none';
  monthlyLine.style.display = 'none';

  document.querySelectorAll('input[name="amount"]').forEach((radioButton) => {
    radioButton.addEventListener('change', function() {
      if (this.value === 'Other') {
        otherAmountField.style.display = 'inline-block';
      } else {
        otherAmountField.style.display = 'none';
      }
    });
  });

  // Feature 4: Recurring Donation Fields
  document.querySelector('input[name="recurring"]').addEventListener('change', function() {
    monthlyLine.style.display = this.checked ? 'flex' : 'none';
  });

  // Feature 10: Calculate Recurring Donation Total
  const monthlyInput = document.querySelector('input[name="monthly"]');
  const monthsInput = document.querySelector('input[name="months"]');

  function calculateTotal() {
    const monthly = parseFloat(monthlyInput.value) || 0;
    const months = parseInt(monthsInput.value) || 0;
    const total = monthly * months;

    let totalElement = document.querySelector('.recurring-total');
    if (!totalElement) {
      totalElement = document.createElement('p');
      totalElement.className = 'recurring-total';
      document.querySelector('.recurring-block').appendChild(totalElement);
    }
    totalElement.textContent = `Total donation for ${months} months: $${total}`;
  }

  monthlyInput.addEventListener('input', calculateTotal);
  monthsInput.addEventListener('input', calculateTotal);

  // Feature 9: Character Limit on Comments
  const comments = document.getElementById("comments");
  comments.addEventListener('input', function() {
    const charLimit = 200;
    if (this.value.length > charLimit) {
      alert("Character limit reached!");
      this.value = this.value.substring(0, charLimit);
    }
  });

  // Feature 7: Reset Button Logic
  const resetButton = document.querySelector('button[type="reset"]');
  resetButton.addEventListener('click', function(event) {
    const confirmation = confirm("Are you sure you want to reset the form?");
    if (!confirmation) event.preventDefault();
  });
});

// Feature 5: Select State and Country Default Options
window.onload = function() {
  document.querySelector('select[name="state"]').value = "Dhaka";
  document.querySelector('select[name="country"]').value = "Bangladesh";
};

// Feature 6: Confirm Password (If Needed)
function validatePassword() {
  const password = document.getElementById("password")?.value || "";
  const confirmPassword = document.getElementById("confirm_password")?.value || "";

  if (password && confirmPassword && password !== confirmPassword) {
    alert("Passwords do not match.");
    return false;
  }
}

// Feature 8: Show/Hide Additional Fields
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('input[name="donationType"]').forEach((radioButton) => {
    radioButton.addEventListener('change', function() {
      const nameField = document.getElementById('honorName');
      if (this.value === 'Honor') {
        nameField.placeholder = "Name to honor";
      } else if (this.value === 'Memory') {
        nameField.placeholder = "Name in memory of";
      }
    });
  });
});
