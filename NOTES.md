# Before getting started

We are not going to build a complete new programming language from scratch but something that will get compiled to javascript.There are many languages which get compiled to javascript like typescript , elm , templating languages like pug ,and even javascript gets compiled to javascript (which is traspilation) .

# Stages of compiling

## Part 1 : Tokenization & Parsing

### 1. Lexical Analysis aka Tokenization

> In this step the source code string is taken as input and converted into array of tokens .

The steps required for tokenization are :

1. Accept the input string of code .
2. Create variable for tracking position like cursor .
3. Make array of tokens .
4. Write a while loop that iterated over source code input .
5. Check each token and see if it matches one of our new langauge types .
6. Add it to array of tokens .

### 2. Syntactic Analysis aka Parsing

> In this step we will turn the token into an intermediate representation or Abstract Syntax Tree (AST) .

#### How are we going to build AST ??

1. Iterate through the array of tokens .
2. For each number , string , etc ., add that token to same level .
3. For each CallExpression (i.e. function) collect the parameters and then recurse down into the function body .

## Part 2 : Transformation

Take the source code and convert it into form you want .

## Part 3 : Generation

Take the transformed representation and turn it into new string of code .

# About Koala

- Strings are surrounded by double quotes and our language only supports double quotes .
