import { useState } from 'react';
import getImages from "../../api/Unsplash/getImages";

export default function Searchbar({ setShowImages, setImageUrls }) {
    const [ query, setQuery ] = useState("");

    async function showResults(query) {
        if (query != "") {
            const urls = await getImages(query);

            setShowImages(true);
            setImageUrls(urls);
        }
    }

    return (
        <div className="container-fluid w-50">
            <div className="row mx-auto align-items-center mb-3">
                <div className="col">
                <input type="text" className="form-control" placeholder="Escribe algo..."
                    onChange={(event) => {
                        setQuery(event.target.value);
                        setImageUrls([]);
                        }
                    }
                    onKeyUp={ (event) => {
                        if(event.key == 'Enter') {
                            showResults(query);
                        }
                    }}/>
                </div>
            </div>

            <div className="row mx-auto align-items-center">
                <div className="col mx-auto text-center">
                <button type="button" className="btn btn-outline-primary btn-sm" onClick={() => showResults(query)}>
                    <i className="bi bi-search me-2"></i>Buscar
                </button>
                </div>
            </div>
        </div>
    );
    
}