document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const loginMessage = document.getElementById('login-message');

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        
        const usernameInput = document.getElementById('username').value;
        const passwordInput = document.getElementById('password').value;

        // In a real application, you would make an AJAX request to a server
        // to validate the user's credentials. Here, we are using a hardcoded CSV data.
        
        // Sample CSV data (username,password)
        const usersCSV = `
            user1,password1
            user2,password2
            user3,password3
        `;
        
        const users = CSVtoJSON(usersCSV);
        const user = users.find(u => u.username === usernameInput && u.password === passwordInput);

        if (user) {
            loginMessage.textContent = 'Login successful!';
        } else {
            loginMessage.textContent = 'Invalid credentials. Please try again.';
        }
    });

    // Helper function to convert CSV data to JSON
    function CSVtoJSON(csv) {
        const lines = csv.split('\n');
        const result = [];
        const headers = lines[0].split(',');

        for (let i = 1; i < lines.length; i++) {
            const obj = {};
            const currentline = lines[i].split(',');

            for (let j = 0; j < headers.length; j++) {
                obj[headers[j].trim()] = currentline[j].trim();
            }

            result.push(obj);
        }

        return result;
    }
});
