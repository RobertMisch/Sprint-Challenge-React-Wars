# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

react works to solve state for applications. it solves it through creation of a virtual dom, allowing state changes without refreshing, and for applications to be on a single page without ever having to reload.

1. What does it mean to think in react?

it means to think about component and state in your ui and how that is built in react

1. Describe state.

“state” is what allows you to create components that are dynamic and interactive. you set your data or state which re-renders the application.

1. Describe props.

"Where HTML elements have “attributes,” React components have “props” (short for “properties”). It’s a different name for essentially the same thing" - Dave Ceddia. props are what you pass down to lower components through attributes and then can use that object in the component it was sent to. you can also continue to pass props down to further and further components, called prop drilling

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

anything that can make a possible memory leak. anything that is outside of the scope of the actual function. you use the useEffect hook to syc side effects with props and state