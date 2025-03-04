## conditional Opeerator or ternary Opeerator(?:)

### Syntax

    condition   ?   statement1  :   statement2
                        true        false

## Increment and Decrement Operator

        Increment(++)                   i.e x = x+1
    Pre-increment(++operand)            Post-Increment(operand++)
    -------------------------------     --------------------------------
    First Increment the Assignemnt      First Assignment then increment

        Decrement(--)                   i.e x = x-1
    Pre-Decrement(--operand)            Post-Decrement(operand--)
    -------------------------------     --------------------------------
    First Decrement the Assignemnt      First Assignment then Decrement

# Control Statement or decision making statements.

1.  Selection or conditional Statement

        - If Statement
        - if else statment
        - if else if statement
        - nested if and else statement
        - swtich statement

2.  Looping Or Iterative Statements

        - while loop statement
        - do while loop statement
        - for loop statement
        - for in loop statement
        - for of loop statement
        - for each loop statement

3.  Transfer Statements

        - break statment
        - continue statment
        - goto statment
        - return statment
        - etc

## IF Statement

If statement is used to test the condition. it will execute if block of code if condition is true.

### Syntax

    if(condition)
    {
        ------------
        ------------
        Number of statments
        ------------
        ------------
    }
    note :{} are optional only for one statement

## IF ELSE

It is also used to test the condition. it will execute IF block of code if condition is true otherwise it will exucute ELSE block of code.

### Syntax

    if(condition)
    {
        it will execute if condition is true
        ------------
        ------------
        Number of statments
        ------------
        ------------
    }
    else{
        it will execute if condition is false
        ------------
        ------------
        Number of statments
        ------------
        ------------
    }

## IF ELSE IF Statement

It will execute one statemnet from multiple condition

### Syntax

    if(condition-1)
    {
        block of code to be executed if condition-1 is true
    }
    else if(condition-2)
    {
        block of code to be executed if condition-2 is true and condition-1 is false
    }
    else if(condition-3)
    {
    block of code to be executed if condition-2 is false and condition-3 is true
    }
    else
    {
    block of code to be executed if all conditions are false
    }
