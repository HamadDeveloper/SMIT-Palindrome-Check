document.getElementById("checkButton").addEventListener("click", function() {
    // Get the input string value
    var inputString = document.getElementById("inputString").value;

    // Check if it's a palindrome
    var isPalindrom = isPalindrome(inputString);

    // Display the result message
    var resultMessage = document.getElementById("resultMessage");
    if (isPalindrom) {
        resultMessage.textContent = "'" + inputString + "' is a palindrome!";
    } else {
        resultMessage.textContent = "'" + inputString + "' is not a palindrome!";
    }
});

function isPalindrome(str) {
    // Convert the string to lowercase and remove non-alphanumeric characters
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Initialize two pointers for comparison
    let left = 0;
    let right = str.length - 1;

    // Loop until the pointers meet in the middle
    while (left < right) {
        // If characters at the current pointers are not equal, return false
        if (str[left] !== str[right]) {
            return false;
        }
        // Move the pointers towards the middle
        left++;
        right--;
    }
    // If the loop completes without returning false, the string is a palindrome
    return true;
}
