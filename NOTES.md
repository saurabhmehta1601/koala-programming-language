# Before getting started

We are not going to build a complete new programming language from scratch but something that will get compiled to javascript.There are many languages which get compiled to javascript like typescript , elm , templating languages like pug ,and even javascript gets compiled to javascript (which is traspilation) .

# Stages of compiling

## Part 1 : Parsing

Take the source code (which is string) and turn it into AST .
This can again be divide into two steps :

### 1. Lexical Analysis

In this step the source code string is taken as input and converted into array of tokens .
The steps required are :

1. Accept the input string of code .
2. Create variable for tracking position like cursor .
3. Make array of tokens .
4. Write a while loop that iterated over source code input .
5. Check each token and see if it matches one of our new langauge types .
6. Add it to array of tokens .

### 2. Syntactic Analysis

## Part 2 : Transformation

Take the source code and convert it into form you want .

## Part 3 : Generation

Take the transformed representation and turn it into new string of code .

# About Koala

- Strings are surrounded by double quotes and our language only supports double quotes .
