# REACT REVIEW

React is an efficient, declarative, and flexible open-source JavaScript library for building simple, fast and scalable front-ends.

For developers coming from JavaScript background, the process of developing web applications becomes easier.

Let’s understand the core concepts of React, by answering the frequently asked interview questions.

- [REACT REVIEW](#react-review)
  - [1. What is React](#1-what-is-react)
  - [2. What are the advantages of using React?](#2-what-are-the-advantages-of-using-react)
  - [3. What are the limitations of React?](#3-what-are-the-limitations-of-react)
  - [4. What is useState() in React?](#4-what-is-usestate-in-react)
  - [5. What are keys in React?](#5-what-are-keys-in-react)
    - [importance of Keys](#importance-of-keys)
      - [***Note***](#note)
  - [6. What is JSX?](#6-what-is-jsx)
  - [7. What are the differences between functional and class components?](#7-what-are-the-differences-between-functional-and-class-components)
      - [[] Decalaration Differences --------------------](#-decalaration-differences---------------------)
    - [[] Handling props Differences ------------------](#-handling-props-differences-------------------)
    - [[] Handling State Differences ---------------------------](#-handling-state-differences----------------------------)
  - [8. What is the virtual DOM? How does react use the virtual DOM to render the UI?](#8-what-is-the-virtual-dom-how-does-react-use-the-virtual-dom-to-render-the-ui)
    - [Why was virtual DOM introduced?](#why-was-virtual-dom-introduced)
    - [**Note](#note-1)
  - [9. What are the differences between controlled and uncontrolled components?](#9-what-are-the-differences-between-controlled-and-uncontrolled-components)
  - [10. What are props in React?](#10-what-are-props-in-react)
  - [11. Explain React state and props.](#11-explain-react-state-and-props)
    - [React State](#react-state)
    - [__How to declare a state object?__](#how-to-declare-a-state-object)
    - [__How to use and update the state object?__](#how-to-use-and-update-the-state-object)


## 1. What is React
- React is a front-end and open-source JavaScript library which is useful in developing user interfaces specifically for applications with a single page. It is helpful in building complex and reusable user interface(UI) components of mobile and web applications as it follows the component-based approach.

- The important features of React are:

  - It supports server-side rendering.
  - It will make use of the virtual DOM rather than real DOM (Data Object Model) as RealDOM manipulations are expensive.
  - It follows unidirectional data binding or data flow.
  - It uses reusable or composable UI components for developing the view
## 2. What are the advantages of using React?
- MVC is generally abbreviated as __Model View Controller__.

- ### Use of Virtual DOM to improve efficiency
  - React uses virtual DOM to render the view. As the name suggests, virtual DOM is a virtual representation of the real DOM. Each time the data changes in a react app, a new virtual DOM gets created. Creating a virtual DOM is much faster than rendering the UI inside the browser. Therefore, with the use of virtual DOM, the efficiency of the app improves.

- ### Gentle learning curve
  - React has a gentle learning curve when compared to frameworks like Angular. Anyone with little knowledge of javascript can start building web applications using React.

- ### SEO friendly
  - React allows developers to develop engaging user interfaces that can be easily navigated in various search engines. It also allows server-side rendering, which boosts the SEO of an app.

- ### Reusable components
  - React uses component-based architecture for developing applications. Components are independent and reusable bits of code. These components can be shared across various applications having similar functionality. The re-use of components increases the pace of development.

- ### Huge ecosystem of libraries to choose from
  - React provides you the freedom to choose the tools, libraries, and architecture for developing an application based on your requirement.


## 3. What are the limitations of React?

- React is not a full-blown framework as it is only a library.
The components of React are numerous and will take time to fully grasp the benefits of all.
- It might be difficult for beginner programmers to understand React.
Coding might become complex as it will make use of inline templating and JSX.

## 4. What is useState() in React?
- The useState() is a built-in React Hook that allows you for having state variables in functional components. It should be used when the DOM has something that is dynamically manipulating/controlling.

- In the below-given example code, The useState(0) will return a tuple where the count is the first parameter that represents the counter’s current state and the second parameter setCounter method will allow us to update the state of the counter.

``` Javascript 
...
const [count, setCounter] = useState(0);
const [otherStuffs, setOtherStuffs] = useState(...);
...
const setCount = () => {
   setCounter(count + 1);
   setOtherStuffs(...);
   ...
};
```
We can make use of setCounter() method for updating the state of count anywhere. In this example, we are using setCounter() inside the setCount function where various other things can also be done. The idea with the usage of hooks is that we will be able to keep our code more functional and avoid class-based components if they are not required

## 5. What are keys in React?
A key is a special string attribute that needs to be included when using lists of elements.
- Use Array .map method
- NOT a for loop
- Give each item a unique key
- Avoid using array index as the key

``` javascript
const ids = [1,2,3,4,5];
const listElements = ids.map((id)=>{
return(
<li key={id.toString()}>
  {id}
</li>
)
})
```
### importance of Keys
- Keys help react identify which elements were added, changed or removed.
- Keys should be given to array elements for providing a unique identity for each element.
- Without keys, React does not understand the order or uniqueness of each element.
- With keys, React has an idea of which particular element was deleted, edited, and added.
- Keys are generally used for displaying a list of data coming from an API.
#### ***Note***
- Keys used within arrays should be unique among siblings. They need not be globally unique
## 6. What is JSX?
- JSX stands for JavaScript XML.
It allows us to write HTML inside JavaScript and place them in the DOM without using functions like appendChild( ) or createElement( ).
As stated in the official docs of React, JSX provides syntactic sugar for React.createElement( ) function.
**Note- We can create react applications without using JSX as well.
Let’s understand how JSX works:

Without using JSX, we would have to create an element by the following process:
```javascript
const text = React.createElement('p', {}, 'This is a text');
const container = React.createElement('div','{}',text );
ReactDOM.render(container,rootElement);
```

Using JSX, the above code can be simplified:7
```jsx
const container = (
 <div>
   <p>This is a text</p>
 </div>
);
ReactDOM.render(container,rootElement);
```
As one can see in the code above, we are directly using HTML inside JavaScript.

## 7. What are the differences between functional and class components?
- Before the introduction of Hooks in React, functional components were called stateless components and were behind class components on feature basis. After the introduction of Hooks, functional components are equivalent to class components.
- Although functional components are the new trend, the react team insists on keeping class components in React. Therefore, it is important to know how these both components differ.
- On the following basis let’s compare functional and class components:

#### [] Decalaration Differences --------------------
Functional components are nothing but JavaScript functions and therefore can be declared using an __arrow function__ or the __function__ keyword:
```Javascript
function card(props){
 return(
   <div className="main-container">
     <h2>Title of the card</h2>
   </div>
 )
}

const card = (props) =>{
 return(
   <div className="main-container">
     <h2>Title of the card</h2>
   </div>
 )
}
```
Class components on the other hand, are declared using the ES6 class:
```javascript
class Card extends React.Component{
 constructor(props){
   super(props);
 }

 render(){
   return(
     <div className="main-container">
       <h2>Title of the card</h2>
     </div>
   )
 }
}
```

### [] Handling props Differences ------------------
- Let’s render the following component with props and analyse how functional and class components handle props:
```javascript
<StudentInfo name="Vivek" rollNumber="23" />
```

In functional components, the handling of props is pretty straight forward. Any prop provided as an argument to a functional component, can be directly used inside HTML elements:
```javascript
function StudentInfo(props){
 return(
   <div className="main">
     <h2>{props.name}</h2>
     <h4>{props.rollNumber}</h4>
   </div>
 )
}
```

In the case of class components, props are handled in a different way:
```javascript
class StudentInfo extends React.Component{
 constructor(props){
   super(props);
 }

 render(){
   return(
     <div className="main">
       <h2>{this.props.name}</h2>
       <h4>{this.props.rollNumber}</h4> 
     </div>
   )
 }
}
```
As we can see in the code above, this keyword is used in the case of class components.

### [] Handling State Differences ---------------------------
- Functional components use React hooks to handle state.
- It uses the useState hook to set state of a variable inside the component:
- 
```javascript
function ClassRoom(props){
 let [studentsCount, setStudentsCount] = useState(0);

 const addStudent = () => {
   setStudentsCount(++studentsCount);
 }
 return(
   <div>
     <p>Number of students in class room: {studentsCount}</p>
     <button onClick={addStudent}>Add Student</button>
   </div>
 )
}
```
- Since useState hook returns an array of two items, the first item contains the current state, and the second item is a function used to update the state.
- In the code above, using array destructuring we have set the variable name to __studentsCount__ with a __current value of “0”__ 
- and __setStudentsCount__ is the function that is __used to update the state__.
- For reading the state, we can see from the code above, the variable name can be directly used to read the current state of the variable.
- We __cannot use React Hooks inside class components__, therefore state handling is done very differently in a class component:
- Let’s take the same above example and convert it into a class component:

```javascript
class ClassRoom extends React.Component{
          constructor(props){
            super(props);
            this.state = {studentsCount : 0};
         
            this.addStudent = this.addStudent.bind(this);
          }
         
          addStudent(){
            this.setState((prevState)=>{
              return {studentsCount: prevState.studentsCount++}
            });
          }
         
          render(){
            return(
              <div>
                <p>Number of students in class room: {this.state.studentsCount}</p>
                <button onClick={this.addStudent}>Add Student</button>
              </div>
            )
          }
         }
```
- In the code above, we see we are using this.state to add the variable studentsCount and setting the value to “0”. 
- For reading the state, we are using this.state.studentsCount. 
- For updating the state, we need to first bind the addStudent function to this. Only then, we will be able to use the setState function which is used to update the state.


## 8. What is the virtual DOM? How does react use the virtual DOM to render the UI?
- The React Team says, the virtual DOM is a concept where a virtual representation of the real DOM is kept inside the memory and is synced with the real DOM by a library such as ReactDOM.

![imgage](../../lambdaProjects/ReactReview/images/DOM.JPG)


### Why was virtual DOM introduced? 
- DOM manipulation is an integral part of any web application, but DOM manipulation is quite slow when compared to other operations in JavaScript.
The efficiency of the application gets affected when several DOM manipulations are being done. Most JavaScript frameworks update the entire DOM even when a small part of the DOM changes.
- For example, consider a list that is being rendered inside the DOM. If one of the items in the list changes, the entire list gets rendered again instead of just rendering the item that was changed/updated. This is called inefficient updating.
- To address the problem of inefficient updating, the react team introduced the concept of virtual DOM.

How does it work?

![image](../ReactReview/images/DOM2.JPG)

- For every DOM object, there is a corresponding virtual DOM object(copy), which has the same properties.
- The main difference between the real DOM object and the virtual DOM object is that any changes in the virtual DOM object will not reflect on the screen directly. 
- Consider a virtual DOM object as a blueprint of the real DOM object.
Whenever a JSX element gets rendered, every virtual DOM object gets updated.

### **Note 
- One may think updating every virtual DOM object might be inefficient, but that’s not the case. Updating the virtual DOM is much faster than updating the real DOM since we are just updating the blueprint of the real DOM.

- React uses two virtual DOMs to render the user interface. One of them is used to store the current state of the objects and the other to store the previous state of the objects.
  - Whenever the virtual DOM gets updated, react compares the two virtual DOMs and gets to know about which virtual DOM objects were updated.
  - After knowing which objects were updated, react renders only those objects inside the real DOM instead of rendering the complete real DOM.
  - This way, with the use of virtual DOM, react solves the problem of inefficient updating.

## 9. What are the differences between controlled and uncontrolled components?
Controlled and uncontrolled components are just different approaches to handling input form elements in react.

![image](../ReactReview/images/DOM3.JPG)

- ### Controlled component:
  - In a controlled component, the value of the input element is controlled by React.
   - We store the state of the input element inside the code, and by using event-based callbacks, any changes made to the input element will be reflected in the code as well.
When a user enters data inside the input element of a controlled component, onChange function gets triggered and inside the code we check whether the value entered is valid or invalid. If the value is valid, we change the state and re-render the input element with new value.

- ### Example of a controlled component:
```javascript
function FormValidation(props) {
 let [inputValue, setInputValue] = useState("");

 let updateInput = e => {
   setInputValue(e.target.value);
 };

 return (
   <div>
     <form>
       <input type="text" value={inputValue} onChange={updateInput} />
     </form>
   </div>
 );
}
```
As one can see in the code above, the value of the input element is determined by the state of the inputValue variable. Any changes made to the input element is handled by the updateInput function.

- ### Uncontrolled component:
  -  In an uncontrolled component, the value of the input element is handled by the DOM itself.
  -  Input elements inside uncontrolled components work just like normal HTML input form elements.
  -  The state of the input element is handled by the DOM. 
  -  Whenever the value of the input element is changed, event-based callbacks are not called. 
  -  Basically, react does not perform any action when there are changes made to the input element.
  -  Whenever the user enters data inside the input field, the updated data is shown directly. To access the value of the input element, we can use __ref__.
  
- ### Example of an uncontrolled component:
```javascript
function FormValidation(props) {
 let inputValue = React.createRef();

 let handleSubmit = e => {
   alert(`Input value: ${inputValue.current.value}`);
   e.preventDefault();
 };

 return (
   <div>
     <form onSubmit={handleSubmit}>
       <input type="text" ref={inputValue} />
       <button type="submit">Submit</button>
     </form>
   </div>
 );
}
```
As one can see in the code above, we are not using onChange function to govern the changes made to the input element. Instead, we are using ref to access the value of the input element.

## 10. What are props in React?
- The __props__ in React are the inputs to a component of React. They can be single-valued or objects having a set of values that will be passed to components of React during creation by using a naming convention that almost looks similar to HTML-tag attributes. We can say that props are the data passed from a parent component into a child component.

- The main purpose of props is to provide different component functionalities such as:

  - assing custom data to the React component.
  - Using props through ```this.props.reactProp``` inside render() method of the component.
  - Triggering state changes.
    - For example, consider we are creating an element with reactProp property as given below: 
```javascript
<Element reactProp = "1" />
```
This reactProp name will be considered as a property attached to the native props object of React which already exists on each component created with the help of React library: ```props.reactProp;```

## 11. Explain React state and props.

![image](images/2021-12-25%20props_vs_state.png)
### React State
Every component in react has a built-in state object, which contains all the property values that belong to that component.
In other words, the state object controls the behaviour of a component. Any change in the property values of the state object leads to the re-rendering of the component.
- __Note__ State object is not available in functional components but, we can use React Hooks to add state to a functional component.

### __How to declare a state object?__

Example: 
```javascript
class Car extends React.Component{
constructor(props){
  super(props);
  this.state = {
    brand: "BMW",
    color: "black"
  }
}
}
```
### __How to use and update the state object?__
```javascript
class Car extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    brand: "BMW",
    color: "Black"
  };
}
changeColor() {
  this.setState(prevState => {
    return { color: "Red" };
  });
}
render() {
  return (
    <div>
      <button onClick={() => this.changeColor()}>Change Color</button>
      <p>{this.state.color}</p>
    </div>
  );
}
}
```
As one can see in the code above, we can use the state by calling __this.state.propertyName__ and we can change the state object property using __setState__ method.

- ### __React Props__
Every React component accepts a single object argument called props (which stands for “properties”).  These props can be passed to a component using HTML attributes and the component accepts these props as an argument.

Using props, we can pass data from one component to another.

___Passing props to a component:___

While rendering a component, we can pass the props as an HTML attribute:
```jsx
<Car brand="Mercedes"/>
```
The component receives the props:

___In Class components___

```javascript
class Car extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    brand: this.props.brand,
    color: "Black"
  };
}
}
```
___In Functional components:___

```javascript

function Car(props) {
let [brand, setBrand] = useState(props.brand);
}
```
Note- Props are read-only. They cannot be manipulated or changed inside a component