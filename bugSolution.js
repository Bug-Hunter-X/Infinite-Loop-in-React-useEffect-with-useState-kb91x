```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic: updates the state only once
    let countUpdate = 1; //Use a variable to store the update count
    setCount(countUpdate);
  }, []);

  return <div>Count: {count}</div>;
}
```