Simple, cross-platform and highly customizable react-native checkbox.

## Install with npm

`npm i --save simple-react-native-checkbox`

## Basic Usage
```js
import Checkbox from 'simple-react-native-checkbox';

...

render() {
    return (
        <Checkbox 
          label="Agree to terms and conditions"
          actionCallback={(val)=>alert(val)}  
        />
    )
}
```

## Props
Various props to the checkbox are available module to adjust it to your needs.
| Prop         | Type    | Default | Description |
| ------------ | ------- | ------- | ----------- |
| **containerStyle** | `Object` | `{flexDirection: 'row'}` | Changes with flexbox positions of checkbox and label relative to each other(see example below).
| **label** | `string` | `""` | Represents the label that by default appears to the right of a checkbox.
| **labelStyle** | `Object` | `{fontSize: 14}` | Represents the label style.
| **actionCallback** | `Funcion` | `na` | Represents the callback that return either true or false depending on checkbox's state.
| **isChecked** | `Boolean` | `false` | Represents the state of the checkbox.
| **internalImgPath** | `string` | `na` | Accepts imported image(.png) from within the project to be used and checkmark when the checkbox is clicked.
| **externalImgUrl** | `string` | `na` | Note: overwrites `internalImgPath`. Accepts a url to an external image(.png).
| **imageStyle** | `Object` | `{justifyContent: "center", alignItems: "center", marginRight: 10}` | Represents the checkmark image style.
| **unselectedStyle** | `Object` | `{width: 20, height: 20, borderColor: '#939598', borderWidth: 2, backgroundColor: "#ddd", borderRadius: 3}` | Represents the style of the unchecked checkbox.
| **selectedStyle** | `Object` | `{backgroundColor: "#fff", borderColor: '#B9E2A6', width: 20, height: 20}` | Represents the style of an active checkbox.

## Examples
**1. Reverse order of checkbox and label with external image.**

```js
<Checkbox 
  label="Example 1"
  actionCallback={(val)=>alert(val)}  
  containerStyle={{flexDirection: "row-reverse", justifyContent: "flex-start" }}
  externalImgUrl="https://d30y9cdsu7xlg0.cloudfront.net/png/835-200.png"
/>
```

**2. Column order of checkbox and label with custom styles for selected state of the checkbox.**

```js
<Checkbox 
  label="Example 1"
  actionCallback={(val)=>alert(val)}  
  containerStyle={{flexDirection: "column", alignItems: "center" }}
  selectedStyle={{borderColor: "red"}}
/>
```

To contribute, please, submit a PR.
