document.querySelector('.balance-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const accountNumber = document.getElementById('account-number').value;
    const pin = document.getElementById('pin').value;
  
    // Simulate balance check
    if (accountNumber === '12345678' && pin === '1234') {
      document.getElementById('balance-result').textContent = 'Your balance is $12,456.78';
    } else {
      document.getElementById('balance-result').textContent = 'Invalid account or PIN.';
    }
  });
  