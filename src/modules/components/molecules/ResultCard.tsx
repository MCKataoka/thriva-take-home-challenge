import React from 'react';
import { ArrowDown, ArrowUp, ArrowRight } from 'lucide-react';
import { type TestResult } from '../../@types/interfaces.ts';
import { getResultStatus, hasStatusChanged } from '../../helpers';
import {
    CardContainer,
    CardHeader,
    ResultInfo,
    ResultName,
    MetaInfo,
    StatusChangeBadge,
    PreviousValue,
    ValueSection,
    ValueDisplay,
    Value,
    Unit,
    StatusChip,
    NormalRange
} from "../atoms/components.tsx";


interface ResultCardProps {
    result: TestResult;
}

const ResultCard: React.FC<ResultCardProps> = ({ result }) => {
    const status = getResultStatus(result.value, result.normal_range);
    const previousValue = result.history[1];

    const statusChanged = !previousValue &&
        hasStatusChanged(result.value, previousValue, result.normal_range);

    return (
        <CardContainer status={status} hasStatusChanged={statusChanged} data-testid="result-card">
            <CardHeader>
                <ResultInfo>
                    <ResultName>{result.name}</ResultName>
                    <MetaInfo>
                        {statusChanged && (
                            <StatusChangeBadge>Status Changed</StatusChangeBadge>
                        )}

                        {previousValue !== undefined && (
                            <PreviousValue>
                                {result.value > previousValue ? (
                                    <ArrowUp
                                        size={12}
                                        color="#ef4444"
                                        style={{ marginRight: '0.25rem' }}
                                    />
                                ) : result.value < previousValue ? (
                                    <ArrowDown
                                        size={12}
                                        color="#3b82f6"
                                        style={{ marginRight: '0.25rem' }}
                                    />
                                ) : (
                                    <ArrowRight
                                        size={12}
                                        color="#6b7280"
                                        style={{ marginRight: '0.25rem' }}
                                    />
                                )}
                                {previousValue} {result.unit} (previous)
                            </PreviousValue>
                        )}
                    </MetaInfo>
                </ResultInfo>

                <ValueSection>
                    <ValueDisplay>
                        <Value>{result.value} asdsfsd</Value>
                        <Unit>{result.unit}</Unit>
                    </ValueDisplay>
                    <StatusChip status={status}>
                        {status}
                    </StatusChip>
                </ValueSection>
            </CardHeader>

            <NormalRange>
                Normal range: {result.normal_range.lower_bound} - {result.normal_range.upper_bound} {result.unit}
            </NormalRange>
        </CardContainer>
    );
};



export default ResultCard;