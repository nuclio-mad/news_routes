function NewsItem(props) {
  return (<h1>{props.match.params.id}</h1>)
}

export default NewsItem