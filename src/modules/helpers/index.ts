import { ResultStatus, type TestResult, type NormalRange, SortOption } from '../@types/interfaces.ts';

export const getResultStatus = (value: number, normal_range: NormalRange): ResultStatus => {
    if (value < normal_range.lower_bound) return ResultStatus.LOW;
    if (value > normal_range.upper_bound) return ResultStatus.HIGH;
    return ResultStatus.NORMAL;
};

export const hasStatusChanged = (
    currentValue: number,
    previousValue: number,
    normal_range: NormalRange
): boolean => {
    const currentStatus = getResultStatus(currentValue, normal_range);
    const previousStatus = getResultStatus(previousValue, normal_range);
    return currentStatus !== previousStatus;
};

/**
 * Calculates a severity score based on how far out of range a result is
 * Returns 0 for normal values, and a positive number representing the distance
 * from the nearest range boundary for out-of-range values
 */
export const getSeverityScore = (value: number, normal_range: NormalRange): number => {
    if (value >= normal_range.lower_bound && value <= normal_range.upper_bound) return 0;

    // Calculate how far out of range (as percentage of range width for better comparison)
    const rangeWidth = normal_range.upper_bound - normal_range.lower_bound;

    if (value < normal_range.lower_bound) {
        // Calculate percentage distance below lower bound
        return ((normal_range.lower_bound - value) / rangeWidth) * 100;
    } else {
        // Calculate percentage distance above upper bound
        return ((value - normal_range.upper_bound) / rangeWidth) * 100;
    }
};

export const sortResults = (results: TestResult[], option: SortOption): TestResult[] => {
    return [...results].sort((a, b) => {
        switch (option) {
            case SortOption.ALPHABETICAL:
                return a.name.localeCompare(b.name);
            case SortOption.VALUE:
                return b.value - a.value;
            case SortOption.SEVERITY:
                const severityA = getSeverityScore(a.value, a.normal_range);
                const severityB = getSeverityScore(b.value, b.normal_range);
                return severityB - severityA;
            default:
                return 0;
        }
    });
};

