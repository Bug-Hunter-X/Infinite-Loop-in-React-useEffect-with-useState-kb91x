```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic: this will cause an infinite loop
    setCount(count + 1);
  }, []); // Empty dependency array means it runs only once...or does it?

  return <div>Count: {count}</div>;
}
```