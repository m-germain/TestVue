export interface IUserProfile {
    username: string;
    id: number;
}

export interface IUserProfileUpdate {
    username?: string;
    password?: string;
}

export interface IUserProfileCreate {
    username: string;
    password?: string;
}

export interface IClientProfile {
    name: string;
    id_config: boolean;
    categories?: [ICategory];
}

export interface IClientInformation {
    name: string;
    id_config: boolean;
    id: number;
}

export interface IClientReport {
    client_name: string;
    client_id: number;
    error_counts: object;
    internal_counts: object;
}

export interface IProjectCategories {
    client_id: number;
    categories: ICategory[];
}

export interface IError {
    details_json?: object;
    created_at: Date;
    alert_id: number;
    is_external: boolean;
}

export enum AlertType {
    META,
    OSEF,
    FTP,
    DATABASE
}

export enum NotificationType {
    SUCCESS,
    ERROR,
    WARNING
}

export enum AlertLevel {
    MINOR,
    MODERATE,
    HIGH,
    EXTREME
}

export interface ICategory {
    id: number;
    type: AlertType;
    subtype: string;
    level: AlertLevel;
}

export interface IAlert {
    id: number;
    id_config: string;
    title: string;
    description: string;
    is_resolvable: boolean;
    is_fixable: boolean;
    is_slow: boolean;
    is_unsafe: boolean;
    category_id: number;
}
