import React, { useEffect,useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
import { useLocation, useParams } from 'react-router-dom';


const News=({setProgress,pageSize,country})=> {
  const params = useParams();
  const category = params.category || "general";
  const location = useLocation();
  console.log(location);
 const [articles,setArticles]=useState([])
 const [loading,setLoading]=useState(false)
 const [pageno,setPageno]=useState(1)
 const [totalResults,setTotalResults]=useState(0)

  // static getDerivedStateFromProps(props, state) {
  //   // console.log("get derived state form props");
  //   // console.log("hiii", props, state);
  //   return ({ props, state })
  // }

 const  fetchData=async()=> {
    setProgress(10);
   
    setLoading(true);
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=43413fa3bbd74c969e43bda251378c61&page=${pageno}&pageSize=${pageSize}`)
    setProgress(50);

    const data = await response.json();
    setArticles(data.articles);
    setTotalResults(data.totalResults)
    setLoading(false)
    setProgress(100);
  }

  useEffect(()=>{
    document.title = `News-${category}`
    fetchData();
  },[category])
  //  useEffect(()=>{
  //   fetchData();
  //  },[category]);
  // handlePrev = async () => {

  //   this.setState({
  //     pageno: this.state.pageno - 1
  //   })
  //   this.fetchData();
  // }

  // handleNext = async () => {

  //   await this.setState({
  //     pageno: this.state.pageno + 1,
  //   })
  //   this.fetchData();
  // }

   const fetchMoreData = async() => {
        setProgress(10);
        setPageno(pageno +1);
        setLoading(true);
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=43413fa3bbd74c969e43bda251378c61&page=${pageno}&pageSize=${pageSize}`)
        setProgress(50);
        const data = await response.json();
        setArticles(articles.concat(data.articles));
        setTotalResults(data.totalResults)
        setLoading(false)
        setProgress(100);
  };

  // componentDidUpdate(prevProps) {
  //   // console.log("????????? prev props",);
  //   if (prevProps.category !== props.category) {
  //     this.fetchData();
  //     this.setState({pageno:1});
  //   }
  // }

  // console.log("****************** article arry", this.state.articles );
    return (
      <div>
        <div className="container my-3">
          <h2 className='text-center'>Top Headlines of {category} category</h2>
          {/* {this.state.loading && <Spinner />} */}
          {pageno}
          <InfiniteScroll
            dataLength={Array.isArray(articles) && articles.length}
            next={fetchMoreData}
            hasMore={Array.isArray(articles) && articles.length !== totalResults}
            loader={<Spinner/>}
          >
          <div className="row">
            {Array.isArray(articles) && articles.map((element, i) => {
              // console.log(element);
              return (<div className="col-md-4 my-2" key={i + "news"}>
                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imgUrl={element.urlToImage ? element.urlToImage : ""} newsUrl={element.url} source={element.source.name} author={element.author} date={element.publishedAt} />
              </div>)
            })}
          </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between ">
          <button type="button" disabled={this.state.pageno <= 1} onClick={this.handlePrev} className="btn btn-secondary"> &#x2190;prev.</button>
          <button type="button" disabled={this.state.pageno + 1 > Math.ceil(this.state.totalResults / props.pageSize)} onClick={this.handleNext} className="btn btn-secondary">next.&#x2192;</button>
        </div> */}
      </div>
      </div >
    )
}
News.defaultProps = {
  country: 'in',
  pageSize: 9,
  category: 'genral',
}
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}
export default News