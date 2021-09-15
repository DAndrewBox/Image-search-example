import ResultsTitle from "./ResultsTitle";
import ResultsButton from "./ResultsButton";

export default function ResultsHome({ imageUrls, setShowImages }) {
    if (imageUrls?.length < 1) {
        return (
            <main className="container">
                <div className="container-fluid text-center">
                    <ResultsTitle />

                    <div className="alert alert-danger my-4" role="alert">
                        <i className="bi bi-exclamation-triangle-fill me-3"></i>No se han encontrado resultados. :(
                    </div>

                    <ResultsButton setShowImages={setShowImages}/>
                </div>
            </main>
        )
    }

    return (
        <main className="container">
            <div className="container-fluid text-center w-100">
                <ResultsTitle/>

                <div className="row align-items-top">
                    {imageUrls?.map((image, key) => {
                        return (
                            <div className="col col-sm-6" key={key}>
                                <img
                                    src = {image}
                                    className = "rounded mx-auto my-2 shadow img-thumbnail"
                                />
                            </div>
                        )
                    })}
                </div>

                <ResultsButton setShowImages={setShowImages}/>
            </div>
        </main>
    );
}