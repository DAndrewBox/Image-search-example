import ResultsTitle from "./ResultsTitle";
import ResultsButton from "./ResultsButton";
import Image from "next/image";

export default function ResultsHome({ imageUrls, setShowImages }) {

    if (imageUrls.length < 1) {
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
            <div className="container-fluid text-center">
                <ResultsTitle/>

                <div className="row align-items-top">
                    {imageUrls.map((image, key) => {
                        return (
                            <div className="col-sm-6">
                                <a href={image}>
                                    <Image
                                        src = {image}
                                        alt = ""
                                        className = "rounded mx-auto my-2 img-fluid shadow img-thumbnail"
                                    />
                                </a>
                            </div>
                        )
                    })}
                </div>

                <ResultsButton setShowImages={setShowImages}/>
            </div>
        </main>
    );
}