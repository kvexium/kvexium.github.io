import React, { useEffect, useState } from 'react';
import Link from '@docusaurus/Link';

interface Library {
    name: string;
    title: string;
    tags: string[];
    logo: string;
}

const SearchLibs = () => {
    const [libraries, setLibraries] = useState<any[]>([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchLibraries();
    }, []);

    const fetchLibraries = async () => {
        try {
            const response = await fetch('https://raw.githubusercontent.com/kvexium/kvexium.github.io/tree/main/kvex.libs.json'); // Ersetze mit dem richtigen Repository-Namen
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            setLibraries(data);
        } catch (error) {
            console.error('Error fetching libraries:', error);
        }
    };

    const filteredLibraries = libraries.filter(lib =>
        lib.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <h1>Suche nach Bibliotheken</h1>
            <input
                type="text"
                placeholder="Suche nach Bibliotheken..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ marginBottom: '20px', padding: '10px', width: '300px' }}
            />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {filteredLibraries.map(lib => (
                    <div key={lib.name} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '15px', display: 'flex', alignItems: 'center' }}>
                      <img src={"https://raw.githubusercontent.com/"+lib.name+"/tree/main/"+lib.logo} alt={`${lib.title} logo`} style={{ width: '50px', marginRight: '15px' }} />
                        <div style={{ flexGrow: 1 }}>
                            <Link to={`/docs/libs?lib=${lib.name}`}>
                                <h2>{lib.title}</h2>
                            </Link>
                            <p>{lib.tags.join(', ')}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchLibs;
