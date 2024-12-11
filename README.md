# React useEffect Infinite Loop Bug

This repository demonstrates a common but subtle bug in React applications involving the `useEffect` hook and the `useState` hook.  The issue arises when attempting to update state within an effect that has an empty dependency array, unintentionally creating an infinite loop.

The `bug.js` file contains the erroneous code. The `bugSolution.js` file provides the corrected implementation.

## Bug Description
The problem lies in the `useEffect` hook's logic.  While an empty dependency array is intended to make the effect run only once after the initial render, updating the `count` state within this effect triggers a re-render, which in turn re-executes the `useEffect` again, leading to an infinite loop.

## Solution
The solution involves correctly handling the state update within the `useEffect` hook.  Instead of directly updating the state, we can use a variable to store the value then update the state outside of the useEffect call.