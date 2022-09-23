## OBJECTS BONUSES

1. Create a dog object

    The dog object should have properties for:

    - `breed` (string),
    - `weightInPounds` (number),
    - `age` (number),
    - `color` (string),
    - `sterilized` (boolean),
    - `shotRecords` (array of objects with properties for date and `typeOfShot`)

    The dog object should have methods to:

    - `bark()` - will console.log "Woof!"
    - `getOlder()` - will increase age by 1
    - `fix()` - will set sterile to true if dog sterilized property is false
    - `vaccinate()` - takes in an argument for the name of the shot and adds a
      new shot with the current date to the shotRecords array

1. Expanding on the books object exercise:

    - Add a property `keywords` that contains an array of possible genres the
      book may be categorized by
    - Add a boolean property `available` and set it to true
    - Add a `dateAvailable` property that has a string of the date/time when the
      book will be available
    - Add a method `lend()` that...
        - changes the `available` property to false if it is not already false
        - sets the `dateAvailable` to a date exactly two weeks from when the
          `lend()` method is called (to do this, research the JS Date object and
          use methods from it in your code)
    Add a method `receive()` that...
        - changes the `available` property to true
        - changes the `dateAvailable` property to the string `"now"`

1. Expanding on the books object exercise:

    - Create an application to take in user input to build the books array of objects.
    - Allow the user to continue adding books or to finish adding books.
    - Once the books have been added, output the books array in the console.
    - Allow a user to delete a book or a group of books by title or author last name
    - Allow a user to edit a book by index number in the books array



1. Define an object called `jackBox`

    Include properties for...

    - `triggered` - whether or not the box has been sprung (should be false by
      default)
    - `intervalId` - set to null
    - `play()` - once called, if triggered is false, console.log one new element
      in the lyrics array every second after the lyrics, stop the interval, set
      the triggered property to true, and alert POP!
    - `windUp()` - once called will stop the play() method and set triggered to
      false lyrics - an array with the following elements:

            "All a-...",
            "-round the ...",
            "mulberry...",
            "bush, The...",
            "monkey...",
            "chased the...",
            "wea-...",
            "-sel...",
            "The monkey...",
            "stopped to...",
            "pull up his...",
            "sock,...",
            "Pop!...",
            "goes the...",
            "wea-...",
            "-sel."

    When running, current lyrics should also be displayed on the page.

1. Build a Stop Watch

    Define an object called `stopWatch`.

    Include the following properties...

    - `intervalId`
    - `count`

    Include the following methods...

    `start()` - starts console logging an increasing count every second
    `pause()` - pauses counter
    `reset()` - stops counter and resets count to zero