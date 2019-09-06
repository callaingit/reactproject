class MyApp extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
/*      
      return <><MyHeader><LikeButton>Label1{"hello"}</LikeButton><LikeButton>Label2</LikeButton></MyHeader><h1>Page Content</h1>
      <ul>{[1,2,3,4].map(i => <li>{i}</li>)}</ul>
      </>
*/      
      return <div><MyHeader><LikeButton>Label1</LikeButton><LikeButton>Label2</LikeButton></MyHeader><h1>Page Content</h1>
      <ul>{[1,2,3,4].map(i => <li>{i}</li>)}</ul>
      <p>{'&amp;'}</p>
      </div>
    }
}
