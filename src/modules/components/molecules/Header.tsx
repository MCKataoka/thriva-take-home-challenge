import React, { type Dispatch, type SetStateAction } from 'react';
import {SortOption, type TestResult} from '../../@types/interfaces.ts';
import {
    HeaderContainer,
    HeaderTop,
    PageDescription,
    PageTitle,
    ResultsCount,
    SortButton,
    SortButtonGroup,
    SortControls,
    SortLabel,
} from "../atoms/components.tsx";


interface HeaderProps {
    results: TestResult[];
    sortOption: SortOption;
    setSortOption: Dispatch<SetStateAction<SortOption>>;
}

const Header: React.FC<HeaderProps> = ({ results, sortOption, setSortOption }) => {

    return (
        <HeaderContainer>
            <HeaderTop>
                <>
                    <PageTitle>Blood Test Results</PageTitle>
                    <PageDescription>
                        Review your latest health metrics and track changes over time
                    </PageDescription>
                </>
                <ResultsCount>
                    <span>{results.length} Results</span>
                </ResultsCount>
            </HeaderTop>

            <SortControls>
                <SortLabel>Sort by:</SortLabel>
                <SortButtonGroup>
                    <SortButton
                        isActive={sortOption === SortOption.ALPHABETICAL}
                        isFirst
                        onClick={() => setSortOption(SortOption.ALPHABETICAL)}
                    >
                        Alphabetical
                    </SortButton>
                    <SortButton
                        isActive={sortOption === SortOption.VALUE}
                        onClick={() => setSortOption(SortOption.VALUE)}
                    >
                        Value
                    </SortButton>
                    <SortButton
                        isActive={sortOption === SortOption.SEVERITY}
                        isLast
                        onClick={() => setSortOption(SortOption.SEVERITY)}
                    >
                        Severity
                    </SortButton>
                </SortButtonGroup>
            </SortControls>
        </HeaderContainer>
    );
};



export default Header;