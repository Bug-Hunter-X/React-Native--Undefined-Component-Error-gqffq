This error occurs when you try to use a component that is not defined yet. This can happen if you are importing a component from a file that hasn't been loaded yet, or if you are using a component before it has been defined in the component tree. For example, if you try to render a component in the render method of a component before that component has been imported, you will get an error.  Here is an example:
```javascript
import React from 'react';
import { View, Text } from 'react-native';

const MyComponent = () => {
  return (
    <View>
      <Text>Hello world!</Text>
      <UndefinedComponent/>
    </View>
  );
};

export default MyComponent; 
```
In this case, UndefinedComponent is not defined before use. This is very common in React Native apps.