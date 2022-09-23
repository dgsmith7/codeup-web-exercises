1. Write a function that takes in a sentence and returns the length of the
   longest word.

        "I like going out to parties with friends or watching TV." => 8

2. Write a function that takes three parameters: a, b, c. Return the boolean
   true if a^2 + b^2 = c^2, false if not.

        3, 4, 5 => true
        4, 5, 6 => false

3. Write a function that takes a string and returns a "title case" string

        "The QUICK brown fox JuMpS ovER the LAZy dog"
        The Quick Brown Fox Jumps Over The Lazy Dog"

4. Write a function that returns and object with keys set to the argument passed
   in and values equal to the types of the corresponding keys. Arguments will be
   type "number", "string", or "boolean".

        // input
        ["hey", 1, "Jeffrey wants to goto the store", false]
        // output
        {
          hey: "string",
          1: "number",
          "Jeffrey wants to goto the store": "string",
          false: boolean
        }

5. Write a function that takes two strings as input and returns true or false
   depending on whether they are anagrams(contain exactly the same letters).
   Only lowercase letters will be passed.

        "overcast", "overacts" => true
        "Jimbo", "Jason" => false
