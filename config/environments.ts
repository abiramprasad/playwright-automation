export interface EnvironmentConfig {
    baseURL: string;
    username: string;
    password: string;
    timeout: number;
    apiURL: string;
    headless: boolean;
}

export const environments: Record<string, EnvironmentConfig> = {

        dev: {
        baseURL:  'https://dev.practicetestautomation.com',
        username: 'dev_student',
        password: 'DevPass123',
        timeout:  60000,
        apiURL:   'https://jsonplaceholder.typicode.com',
        headless: false,
    },

    qa: {
        baseURL:  'https://practicetestautomation.com',
        username: 'student',
        password: 'Password123',
        timeout:  30000,
        apiURL:   'https://jsonplaceholder.typicode.com',
        headless: true,
    },

    prod: {
        baseURL:  'https://prod.practicetestautomation.com',
        username: 'prod_student',
        password: 'ProdPass123',
        timeout:  20000,
        apiURL:   'https://jsonplaceholder.typicode.com',
        headless: false,
    }
}