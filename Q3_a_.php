Q-- What is the purpose of using regular expressions in PHP? 
    Write a PHP Program to test whether the word "the" exists in the string "The cow jumps over the moon" 
    and then to replace all occurrences of the to my.


Ans--

Regular expressions in PHP are used to perform pattern matching and manipulation on strings. 
They are powerful tools for searching, extracting, and replacing text based on specific patterns.


<?php
// Input string
$inputString = "The cow jumps over the moon";

// Test if "the" exists using regular expression
if (preg_match("/\bthe\b/i", $inputString)) {
    echo "The word 'the' exists in the string.\n";
} else {
    echo "The word 'the' does not exist in the string.\n";
}

// Replace all occurrences of "the" with "my" using regular expression
$outputString = preg_replace("/\bthe\b/i", "my", $inputString);
echo "Modified string: $outputString\n";
?>


Explanation:

preg_match("/\bthe\b/i", $inputString) checks if the word "the" exists in the string, 
ignoring case (/i) and using word boundaries (\b) to match whole words.

preg_replace("/\bthe\b/i", "my", $inputString) replaces all occurrences of "the" with "my" in
 the input string.


OUTPUT:

The word 'the' exists in the string.
Modified string: my cow jumps over my moon
