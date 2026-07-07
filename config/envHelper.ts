import { environments, EnvironmentConfig } from "./environments";

// Get current environment name:
export function getEnvName(): string {
    return process.env.ENV || 'qa';
}

// Get current environment config:
export function getConfig(): EnvironmentConfig {
    const envName = getEnvName();
    const config = environments[envName];

    if(!config) {
        console.warn(`⚠️ Environment config for '${envName}' not found. Falling back to 'qa' environment.`);
        return environments['qa'];
    }
    console.log(`🌍 Environment: ${envName}`);
    console.log(`🔗 URL: ${config.baseURL}`);

    return config;
}
