
const NewsItem = (props: any) => {


    let { title, description, urlToImage, url, author, date, source } = props
    return (
        <div>
            <div className="relative max-w-sm flex-1 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <span className="flex absolute right-0 bg-gray-100 text-gray-800 text-sm font-medium mt-2 mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">{source.name}</span>
                <a href="/">
                    <img className="rounded-t-lg object-cover" src={urlToImage} alt="Sorry, no image to show" />
                </a>
                <div className="p-5">
                    <a href="/">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
                    <dl className="flex mb-3">
                        <div className="flex flex-col-reverse">
                            <dd className="text-xs text-slate-500">{!author ? 'Unknow' : author}</dd>
                            <dt className="text-sm font-medium text-slate-600">Published by</dt>
                        </div>

                        <div className="flex flex-col-reverse ml-3 sm:ml-6">
                            <dd className="text-xs text-slate-500">{new Date(date).toUTCString()}</dd>
                            <dt className="text-sm font-medium text-slate-600">Published on</dt>
                        </div>
                    </dl>
                    <a href={url} target='_blank' className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-slate-700 rounded-lg hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </div>
            </div>

        </div>
    )
}


export default NewsItem
