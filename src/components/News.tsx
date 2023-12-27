import { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import InfiniteScroll from 'react-infinite-scroll-component'


const News = (props: any) => {

    const [loading, setLoading] = useState(false)
    const [articles, setArticles] = useState([])
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    const updateNews = async () => {
        props.setProgress(10)
        let API = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${page}`
        setLoading(true);
        props.setProgress(30)
        let apiData = await fetch(API)
        props.setProgress(50)
        let parsedApiData = await apiData.json()
        props.setProgress(70)
        setArticles(parsedApiData.articles);
        setTotalResults(parsedApiData);
        setLoading(false);
        props.setProgress(100)
    }

    useEffect(() => {
        document.title = `NewsHimachal - ${props.category}`
        updateNews();
    }, [])


    const fetchMoreData = async () => {
        let API = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}`
        setPage(page + 1)
        setLoading(true);
        let apiData = await fetch(API)
        let parsedApiData = await apiData.json()
        setArticles(parsedApiData.articles);
        setTotalResults(parsedApiData);
        setLoading(false);
    };

    return (
        <div className='max-w-screen-xl mx-auto p-4'>
            <h1 className='text-3xl text-bold py-8 text-center'><strong>Top Headlines - {props.category}</strong></h1>
            {loading && <Spinner />}
            <div>
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner />}
                >
                    <div className='flex flex-1 flex-wrap gap-12 xl:justify-start justify-center'>
                        {articles.map((element: any, index: number) => (
                            <div key={`${element.url}-${index}`}>
                                <NewsItem
                                    title={element.title}
                                    description={element.description}
                                    urlToImage={element.urlToImage}
                                    url={element.url}
                                    author={element.author}
                                    date={element.publishedAt}
                                    source={element.source}
                                />
                            </div>
                        ))}
                    </div>
                </InfiniteScroll>
            </div>
        </div >
    )
}


export default News
