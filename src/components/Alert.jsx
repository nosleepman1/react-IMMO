


const Alert = ({message}) => {

    return (
        <div className="card bg-neutral text-neutral-content w-96">
            <div className="card-body items-center text-center">
                <h2 className="card-title">Attention</h2>
                <p> {message} </p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Oui</button>
                <button className="btn btn-ghost">Non</button>
                </div>
            </div>
        </div>
    )

}

export default Alert