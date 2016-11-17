#A Primer on Reactive Programming
Reactive Programming allows programmers to easily express static or dynamic data streams while keeping track of changes that occur at different stages. These changes are called, *change of propagation*. In a more practical sense, this means that changes made to one variable in program are automatically migrated to all dependent variables. 

####Imperative Programming
Imagine that you have just declared the following variables in your program: `foo`, `bar`, and `baz`.

```javascript
var foo,
	bar = 10,
	baz = 20; 

foo = bar + baz;

```
In this example, `foo` is assigned to the outcome of `bar` + `baz`. Changing the value assigned to `bar` or `baz` will not effect the value of `foo`. This style of programming is called, *imperative programming*. In other words, the changes are not automatically propagated for us here. 

####Reactive Programming
In the reactive programming environment, the value of `foo` is automatically updated for us if we were to make any changes to `bar` or `baz` respectively.

If you were developing an interactive application, keeping in mind all that we have said thus far, which programming pattern would you use? The correct response would be *reactive programming*. According to a Wiki article on *reactive programming* <sup id="a1">[1](#f1), 
>Reactive programming has foremost been proposed as a way to simplify the creation of interactive user interfaces, animations in real time systems, but is essentially a general programming paradigm.

In other words, reactive programming simplifies interactive UI or any other interactive systems because it is not concerned with the order in which the computer computes thing. Rather, it only focuses on the order in which things need to happen. 

There are a number of benefits that programmers can look forward to as well. Namely, the fact that reactive programming: 

1. `makes code more abstract and concise`
2. `programmers need not worry about state`
3. `in line with the DRY principal`

Let's say, for example, that we have an input field where we require user-input, and once the user types in the input value (`string`), we want to be able to format the *text* and return it. Thus, the following steps that must be implemented:

1. `create an observable stream from the user-input`
2. `add subscriber to the stream`
3. `buffer time threshold to know when users finishes typing`
4. `change and return text`

Finally, we can conclude that reactive programming does not deal with **time** and **context**, but only with **events**. Interestingly enough, this proves useful for modern applications as they become more complex.

<b id="f1">1</b> ["Reactive Programming"](https://en.wikipedia.org/wiki/Reactive_programming) [↩](#a1)