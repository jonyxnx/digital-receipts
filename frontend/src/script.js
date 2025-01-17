document.getElementById('signup-link').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-container').style.display = 'block';
});

document.getElementById('login-link').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('signup-container').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
});

document.getElementById('reset-link').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('reset-container').style.display = 'block';
});

document.getElementById('back-login-link').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('reset-container').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
});

document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Handle login logic (e.g., check credentials)
    alert('Login successful');
});

document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Handle signup logic (e.g., create account)
    alert('Account created');
});

document.getElementById('reset-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Handle password reset logic
    alert('Password reset link sent');
});

// Automatically detect and toggle dark mode based on the system settings
const toggleDarkMode = () => {
    const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (isDarkMode) {
        document.body.classList.add('dark');
        document.querySelectorAll('.dark').forEach((element) => element.classList.add('dark'));
    } else {
        document.body.classList.remove('dark');
        document.querySelectorAll('.dark').forEach((element) => element.classList.remove('dark'));
    }
};

// Initialize dark mode based on system preference
toggleDarkMode();

// Listen for changes to system color scheme
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', toggleDarkMode);