import axios, { type AxiosInstance, type AxiosRequestConfig } from 'axios';
import { type TestResult } from '../modules/@types/interfaces.ts';

export class ThrivaApiService {
    private api: AxiosInstance;
    constructor(
        baseURL = 'https://681c740ff74de1d219ac760a.mockapi.io/thriva/v1/',
        apiKey: string | null = null
    ) {
        const config: AxiosRequestConfig = {
            baseURL,
            headers: {
                'Content-Type': 'application/json',
            },
            timeout: 10000,
        };

        if (apiKey) {
            config.headers = {
                ...config.headers,
                'Authorization': `Bearer ${apiKey}`
            };
        }

        this.api = axios.create(config);

        this.api.interceptors.response.use(
            response => response,
            error => {
                // Log error for debugging
                console.error('API Error:', error);

                // Format error message for display
                const errorMessage = error.response?.data?.message ||
                    error.message ||
                    'Unknown error occurred';

                return Promise.reject(new Error(`Thriva API Error: ${errorMessage}`));
            }
        );
    }

    async getTestResults(): Promise<TestResult[]> {
        try {
            const { data } = await this.api.get('/mock/test_results');
            return data;
        } catch (error) {
            throw error; // Error is already handled by the interceptor
        }
    }

    // Not asked for in test, but a way to demonstrate other requests that might be useful for future
        // Maybe would return more detailed results
    async getTestResult(id: string): Promise<TestResult> {
        try {
            const { data } = await this.api.get(`/mock/test_results/${id}`);
            return data;
        } catch (error) {
            throw error;
        }
    }


}
export const apiService = new ThrivaApiService();
