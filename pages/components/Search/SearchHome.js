import Searchbar from "./Searchbar";

export default function SearchHome({ setShowImages, setImageUrls }) {
    return (
        <main className="d-flex align-items-center min-vh-100">
            <div className="container">
                <h1 className="display-1 text-center mb-4">Buscador Unsplash</h1>
                <Searchbar setShowImages={setShowImages} setImageUrls={setImageUrls}/>
            </div>
        </main>
    );
}