import React, { useEffect, useState } from 'react';
import { useLocation } from '@docusaurus/router';
import hocon from 'hocon-parser';

interface LangInfo {
    dir: string;
    desc: string;
}

interface DocInfo {
    title: string;
    author: string;
    def_lang: string;
    langs: Record<string, LangInfo>;
    index_file: string;
    files: string[];
}

const LibDocs: React.FC = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const lib = params.get('lib');
    const [libInfo, setLibInfo] = useState<DocInfo | null>(null);
    const [content, setContent] = useState<string | null>(null);
    const [language, setLanguage] = useState<string>('en'); // Standardmäßig auf Englisch

    useEffect(() => {
        const fetchLibInfo = async () => {
            if (lib) {
                const url = `https://raw.githubusercontent.com/${lib}/main/lib.docs.conf`;
                const response = await fetch(url);
                if (response.ok) {
                    const data = await response.text();
                    const parsedData = hocon.parse(data);
                    setLibInfo(parsedData.lib);
                    // Lade die Standardseite für die gewählte Sprache
                    loadMDX(parsedData.lib.langs[language].dir, parsedData.lib.index_file);
                } else {
                    console.error('Fehler beim Laden der lib.docs.conf:', response.statusText);
                }
            }
        };

        fetchLibInfo();
    }, [lib, language]);

    const loadMDX = async (dir: string, file: string) => {
        const url = `https://raw.githubusercontent.com/${lib}/main/${dir}/${file}`;
        const response = await fetch(url);
        if (response.ok) {
            const mdxText = await response.text();
            setContent(mdxText);
        } else {
            console.error('Fehler beim Laden der MDX-Datei:', response.statusText);
        }
    };

    const handleLanguageChange = (newLang: string) => {
        setLanguage(newLang);
        if (libInfo) {
            loadMDX(libInfo.langs[newLang].dir, libInfo.index_file);
        }
    };

    return (
        <div>
            {libInfo && (
                <>
                    <h1>{libInfo.title}</h1>
                    <p>{libInfo.author}</p>
                    <h2>Sprache</h2>
                    <select onChange={(e) => handleLanguageChange(e.target.value)} value={language}>
                        {Object.keys(libInfo.langs).map((lang) => (
                            <option key={lang} value={lang}>{lang}</option>
                        ))}
                    </select>
                    <h2>Inhalt</h2>
                    <div>{content}</div>
                </>
            )}
        </div>
    );
};

export default LibDocs;
