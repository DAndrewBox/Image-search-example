export default function ResultsButton({setShowImages}) {
    return (
        <>
            <button type="button" className="btn btn-outline-primary  my-4" onClick={() => setShowImages(false)}>
                <i className="bi bi-search me-2"></i>¿Otra búsqueda?
            </button>
        </>
    );
}