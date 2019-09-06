class MyList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <section>
          <h1>Array</h1>
      
          {/* Maps "array" to an array of "<li>"s.
               Note the "key" property on "<li>".
               This is necessary for performance reasons,
               and React will warn us if it's missing. */}
          <ul>{array.map(i => <li key={i}>{i}</li>)}</ul>
          <h1>Object</h1>
      
          {/* Maps "object" to an array of "<li>"s.
               Note that we have to use "Object.keys()"
               before calling "map()" and that we have
               to lookup the value using the key "i". */}
          <ul>
            {Object.keys(object).map(i => (
              <li key={i}>
                <strong>{i}: </strong>
                {object[i]}
              </li>
            ))}
          </ul>
        </section>
    }
}