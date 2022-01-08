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

> Note: We are trying to create the ast node representation close to the one used by babel so we can laverage it .

## Part 2 : Transformation

Take the ast node and convert it into form you want .

## Part 3 : Generation

Take the transformed representation and turn it into new string of code .

# Facts About Koala

- Strings are surrounded by double quotes and our language only supports double quotes .

- CallExpression are surrouded by open and close small brackets .

# Files and their roles

1. The string which is our koala code is converted into token array by `tokenize `function .`Identifiers` helps in scaning the code to find numbers , string and keywords.

2. Token array is then passed as argument to `parse` function which converts it into Abstract Syntax Tree (AST) node .

3. All the builtin functions are defined in `standard-lib` (environment) .

4. `Evaluate` function simply returns the value if ast node type is StringLiteral or NumricLiteral else for CallExpression it returns its value by using and finding the function defined in standard lib environment using the ast name property .

5. In order to avoid spelling mistakes while using same strings in different files and functions we stored the string values in `constants` such as AST_NODE_TYPES, TOKEN_TYPES .
