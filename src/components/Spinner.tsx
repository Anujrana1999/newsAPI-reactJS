import loading from './loading.gif'

const Spinner = () => {

    return (
        <div className='flex justify-center p-16'>
            <img height="50px" width="50px" src={loading} alt="loading" />
        </div>
    )
}

export default Spinner
