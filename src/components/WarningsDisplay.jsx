let count = 0;
const WarningsDisplay = ({message = 'Whoops! Something went wrong.',  warnings = [], ...props }) => (
    <>
        {warnings.length > 0 && (
            <div {...props}>
                <h5 className="fw-bolder text-warning">
                    {message}
                </h5>
                <ul className="mt-3 list-disc list-inside text-sm text-warning">
                    {warnings.map(warning => (
                        <div key={count++}>
                            <li className='text-dark fw-semibold' key={warning}>{warning}</li>
                            <br/>
                        </div>
                    ))}
                </ul>
            </div>
        )}
    </>
)

export default WarningsDisplay
