import React, { useState, useEffect } from 'react';
import { type TestResult, SortOption } from '../../@types/interfaces.ts';
import { sortResults } from '../../helpers';
import ResultCard from '../molecules/ResultCard.tsx';
import { apiService } from '../../../services/api.ts';
import {
    BrandLogo,
    Container,
    ErrorText,
    LoadingText,
    MainContent,
    NavBar,
    NavContent,
    ResultsList,
    StateContainer
} from "../atoms/components.tsx";
import Header from "../molecules/Header.tsx";
import Footer from "../molecules/Footer.tsx";

// Main component implementation
const Dashboard: React.FC = () => {
    const [results, setResults] = useState<TestResult[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [sortOption, setSortOption] = useState<SortOption>(SortOption.ALPHABETICAL);

    // Fetch results from API
    useEffect(() => {
        const fetchResults = async () => {
            try {
                setLoading(true);
                const data = await apiService.getTestResults();
                setResults(data);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch results. Please try again later.');
                setLoading(false);
                console.error('Error fetching results:', err);
            }
        };

        fetchResults();
    }, []);

    const sortedResults = sortResults(results, sortOption);

    if (loading) {
        return (
            <Container>
                <StateContainer>
                    <LoadingText>Loading your health results...</LoadingText>
                </StateContainer>
            </Container>
        );
    }

    if (error) {
        return (
            <Container>
                <StateContainer>
                    <ErrorText>{error}</ErrorText>
                </StateContainer>
            </Container>
        );
    }

    return (
        <Container>
            <NavBar>
                <NavContent>
                    <BrandLogo>Thriva</BrandLogo>
                </NavContent>
            </NavBar>

            <MainContent>
                <Header results={results} sortOption={sortOption} setSortOption={setSortOption}/>

                <ResultsList>
                    {sortedResults.map((result) => (
                        <ResultCard key={result.id} result={result} />
                    ))}
                </ResultsList>

                <Footer />
            </MainContent>
        </Container>
    );
};


export default Dashboard;