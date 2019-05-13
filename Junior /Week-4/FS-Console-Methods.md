Console Methods

1. Console.log

    - Outputs a message to the console

2. Console.error()

    - Outputs an error message to the console
    - An error message is a special message wrapped in red w/ exclamation point and addtnl information for debugging

2.1 Console.warn() - Outputs a warning message - A warning message is a special message wrapped in yellow

3. Console.dir()

    - shows all the properties of a specified JavaScript object in console
    - easy way to access the properties of an object

4. Console.assert(true || false)

    - Assertion true? logs nothing : outputs an error message saying the assertion failed
    - used to test the truthiness of an assertion

5. Console.clear()

6. Console.trace()

    - Outputs a stack trace from where it is called

    eg

    ```
    function foo() {
      function bar() {
        console.trace();
      }
      bar();
    }
    foo();
    ```

    Outputs:

    ```
    bar
    foo
    <anonymous>
    ```

7. Console.time/timeLog/timeEnd()
    - starts, logs, and stops a timer, by the millisecond
