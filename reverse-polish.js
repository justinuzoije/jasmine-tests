const pureCli = require('./pure-cli');

function reducer(state, input) {

  if (state === null) {
    return {
      stack: []
    }
  }
  if (input === '+') {
    let length = state.stack.length
    let last = length-1
    let nextToLast = length-2
    let n1 = state.stack[nextToLast];
    let n2 = state.stack[last];
    if (length === 2) {
      let newObject = {
        stack: [n1 + n2]
      };
      return newObject;
    }
    else if (length > 2){
      var oldArray = state.stack.slice(0,3);
      let addition = Number([n1 + n2]);
      oldArray.push(addition);
      // let newArray = oldArray.push([n1 + n2]);
      let newObject = {
        stack: oldArray
      }
      return newObject;
    }


  }
  else if (input === '-') {
    let n1 = state.stack[0];
    let n2 = state.stack[1];
    let newObject = {
      stack: [n2 - n1]
    };
    return newObject;
  }
  else if (input === '*') {
    let n1 = state.stack[0];
    let n2 = state.stack[1];
    let newObject = {
      stack: [(n2 * n1)]
    };
    return newObject;
  }
  else if (input === '/') {
    let n1 = state.stack[0];
    let n2 = state.stack[1];
    let newObject = {
      stack: [(n2 / n1)]
    };
    return newObject;
  }
  else if (input === 'q') {
    let n1 = state.stack[0];
    let n2 = state.stack[1];
    let newObject = {
      stack: [1, 2, 3],
      action: "end"
    };
      return newObject;

  }
  else {
    let number = Number(input);
    let newArray = state.stack.concat([number]);
    let newObject = {
      stack: newArray
    };
    return newObject;
  }


}


module.exports = reducer;

function display(state) {
  console.log(state.stack.join(' '));
}

if (require.main === module) {
  pureCli(reducer, display);
}
