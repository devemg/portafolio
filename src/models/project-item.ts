export interface ProjectItem {
    id: string;
    name: string;
    description: string;
    demoDescription: string;
    background: string;
    color: string;
    codeUrl: string;
    demoUrl?: string;
    credentials?: ProjectCredentials;
    logoSM: string;
    logo: string;
}

export interface ProjectCredentials {
    username: string;
    password: string;
    message: string;
}