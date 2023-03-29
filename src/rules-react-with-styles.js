function MyComponent({ styles }) {
  return (
    <div {...css(styles.foo)}>
      Foo
    </div>
  );
}

export default withStyles(() => ({
  foo: {
    backgroundColor: 'red',
  },

  bar: { // <--- this style is not used
    backgroundColor: 'green',
  },
}))(MyComponent);
