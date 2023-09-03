const ErrorsDisplay = ({message = 'Whoops! Something went wrong.',  errors = [], ...props }) => (
  <>
    {errors.length > 0 && (
      <div {...props}>
        <div className="fw-bold text-danger">
          {message}
        </div>
        <ul className="mt-3 list-disc list-inside text-sm text-danger">
          {errors.map(error => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      </div>
    )}
  </>
)

export default ErrorsDisplay
