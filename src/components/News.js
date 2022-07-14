import React, { useEffect,useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
import { useParams } from 'react-router-dom';

const News=({setProgress,pageSize,country})=> {
  const params = useParams();
  const category = params.category || "general";
 const [articles,setArticles]=useState([]);
 const [loading,setLoading]=useState(false);
 const [pageno,setPageno]=useState(1);
 const [totalResults,setTotalResults]=useState(0);

 const fetchData=async()=> {
    setProgress(10);
    setLoading(true);
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=43413fa3bbd74c969e43bda251378c61&page=${pageno}&pageSize=${pageSize}`)
    setProgress(50);
    const data = await response.json();
    setArticles(data.articles);
    setTotalResults(data.totalResults);
    setLoading(false);
    setProgress(100);
  };

  useEffect(()=>{
    document.title = `News-${category}`;
    fetchData();
  },[category]);

   const fetchMoreData = async() => {
        setProgress(10);
        setPageno(pageno +1);
        setLoading(true);
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=43413fa3bbd74c969e43bda251378c61&page=${pageno}&pageSize=${pageSize}`)
        setProgress(50);
        const data = await response.json();
        setArticles(articles.concat(data.articles));
        setTotalResults(data.totalResults);
        setLoading(false);
        setProgress(100);
  };

    return (
      <div>
        <div className="container my-3">
          <h2 className='text-center'>Top Headlines of {category} category</h2>
          <InfiniteScroll
            dataLength={Array.isArray(articles) && articles.length}
            next={fetchMoreData}
            hasMore={Array.isArray(articles) && articles.length !== totalResults}
            loader={<Spinner/>}
          >
          <div className="row">
            {Array.isArray(articles) && articles.map((element, i) => {
              return (<div className="col-md-4 my-2" key={i + "news"}>
                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imgUrl={element.urlToImage ? element.urlToImage : ""} newsUrl={element.url} source={element.source.name} author={element.author} date={element.publishedAt} />
              </div>)
            })}
          </div>
        </InfiniteScroll>
      </div>
      </div >
    )
};
News.defaultProps = {
  country: 'in',
  pageSize: 9,
  category: 'general',
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News
