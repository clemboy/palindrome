function checkPalindrome() {
    var word = document.getElementById('word').value.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    var len = word.length;

    for (var i = 0; i < len/2; i++) {
        if (word[i] !== word[len - 1 - i]) {
            document.getElementById('result').textContent = "It is not a palindrome.";
            return;
        }
    }

    document.getElementById('result').textContent = "It is a palindrome!";
}
