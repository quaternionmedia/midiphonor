# How to make a mithril component

A component is a mithril object `m`

Components can be made directly:

## Static components

e.g: The `Clock` uses a `Seperator` component, which is simply:

```javascript
const Seperator = m('', ':')
```

Which renders to: `<div>:</div>`

```javascript
// m(hyperscipt, attrs, children)
const Component = m('', {}, [])

// consume in app as:
app = Component
```

## POJO components

**P**lain **O**ld **J**avascript **O**bjects
Components can also be defined as objects, to be consumed later. The only required property is `view`, which must return a mithril object, component, or direct value.

```javascript
const Component = { view: () => m('', {}, []) }

// consume in app as:
app = m(Component)
```

This is useful to access the lifecycle methods available to components.

```javascript
// m(hyperscipt, attrs, children)
const Component = {
  oninit: vnode => {},
  oncreate: vnode => {},
  // ...
  view: () => m('', {}, []),
}

// consume in app as:
app = m(Component)
```

## Stateful (POJO) components

A component that needs access to some variable (stored in the global `state`), need to have the state passed in at runtime.

```javascript
const StatefulComponent = {
  oncreate: vnode => {
    // do something with vnode.attrs.state
  },
  view: => m('', {}, []),
}
var state = {}
app = m(StatefulComponent, { state: state })
```

### Alternate notation:

```javascript
const ShorthandStatefulComponent = {
  oncreate: ({ attrs: { state } }) => {
    // shorthand to use state directly
    // instead of vnode.attrs.state
  },
  view: () => m('', {}, []),
}
```
