# Installations
```
npm i advanced-object
```

# Introduction
This package exports an modified Object class with various custom features, which can come useful in various cases.

Note: You can still do everything to advanced object like you do with a normal object

# Implementations
- ### Creating a advanced object
```js
const { default:AdvancedObject } = require('advanced-object');

const yourObject = {
    some:"Cool Object",
    like:["this", "one"]
}
const ob = new AdvancedObject(yourObject);
```

- ### Adding multiple values to object
```js
const a = {
    name: "Shisui Sama",
    age: 49
}, b = {
    alias: "Unknwon",
    somethingElse: ["stuff"]
}

// ob is your advanced object
ob.concat(a,b); // you can provided any number of objects to add to your object
```

- ### Comparing object with other objects
```js
const anotherOB = {
    lol: false
}

ob.isEqual(anotherOB); // returns false, because anotherOB is not equal to ob
```

- ### Convert to String
```js
ob.toString();

// You can add stuff like repalacer, spaces etc like we do in JSON.stringify
```

- ### Getting Values or Keys
```js
ob.keys() // returns a array with all the keys of the object
ob.values() // returns a array with all the values of the object
```

- ### Getting And Setting Values
```js
const ob2 = new AdvancedObject({
    name: {
        first: "Shisui",
        last: "uchiha"
    },
    others: {
        hobby: {
            fake: ["coding", "gaming"],
            real: ["sleeping", "being lazy"]
        }
    }
});

// Normally we can get properties like this
ob2.name.first
// or
ob2["name"]["first"];

// But in advanced we can do somehting like
ob2.get("name.first") ;
// And we can do this too
ob2.get("others.hobby.fake.0"); // 0 refers to the index of the element you want

// Normally we can set properties like this
ob2.name.first = "Kartike";
// or 
ob2["name"]["first"] = "Kartike";

// But in advanced we can do somehting like
ob2.set("name.first", "Kartike") ;
// And we can do this too
ob2.set("others.hobby.fake.0", "Sleeping A LOTT!!"); // 0 refers to the index of the element you want
```

### - Cool stuff about set property
```js
// Adding new values or unfreezing a object
// for-example
const ob3 = new AdvancedObject({
    a: "A",
    b: Object.freeze({
        c:2
    })
});

// if you do something like
ob3.b.c = 32;
// The property won't change and you will even get a error in typescript or in strict mode in javascript

// But in advanced you can do this
ob3.set("b.c", 32, true); // true means force i.e. force the changes

// What if you wanna add new property?
// you can normally do this
ob3.something = {
    a: {
        b: {
            c: 69
        }
    }
}
// but in advnaced you can do
ob3.set("something.a.b.c", 69, true); // ez
```

# Supports
For support or issues or queries contact me on my [discord server](https://discord.gg/XYnMTQNTFh), If you find any bug create a issue [here](https://github.com/KartikeSingh/edit-object/issues).
You can ask for new features on github too.