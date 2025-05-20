
// Normal range for test results
export interface NormalRange {
    lower_bound: number;
    upper_bound: number;
}

// Test result data structure
export interface TestResult {
    id: string;
    name: string;
    value: number;
    unit: string;
    normal_range: NormalRange;
    history: number[];
}

// Enum for result status
export enum ResultStatus {
    HIGH = 'HIGH',
    NORMAL = 'NORMAL',
    LOW = 'LOW'
}

// Enum for sort options
export enum SortOption {
    ALPHABETICAL = 'alphabetical',
    VALUE = 'value',
    SEVERITY = 'severity'
}

// API service response types
export interface ApiResponse {
    success: boolean;
    data?: TestResult[];
    error?: string;
}

