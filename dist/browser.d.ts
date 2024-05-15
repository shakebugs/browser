/**
 * Represents SDK interface language.
 */
export declare enum Language {
    EN = 0
}

/**
 * Custom log level.
 */
export declare enum LogLevel {
    VERBOSE = "VERBOSE",
    DEBUG = "DEBUG",
    INFO = "INFO",
    WARN = "WARN",
    ERROR = "ERROR"
}

declare type Metadata = {
    [key: string]: string;
};

/**
 * Keeps Shake ticket related configuration.
 */
declare class ReportConfig {
    static metadata: Metadata;
    private _isConsoleLogsEnabled;
    private _isCustomLogsEnabled;
    private _isNetworkRequestsEnabled;
    private _isScreenChangesEnabled;
    private _isSystemEventsEnabled;
    private _isUserActionsEnabled;
    get isConsoleLogsEnabled(): boolean;
    set isConsoleLogsEnabled(enabled: boolean);
    get isCustomLogsEnabled(): boolean;
    set isCustomLogsEnabled(enabled: boolean);
    get isNetworkRequestsEnabled(): boolean;
    set isNetworkRequestsEnabled(enabled: boolean);
    get isScreenChangesEnabled(): boolean;
    set isScreenChangesEnabled(enabled: boolean);
    get isSystemEventsEnabled(): boolean;
    set isSystemEventsEnabled(enabled: boolean);
    get isUserActionsEnabled(): boolean;
    set isUserActionsEnabled(enabled: boolean);
    enableActivityHistory: (enabled: boolean) => void;
}

/**
 * Shake SDK interface.
 */
declare class Shake {
    static config: ShakeConfig;
    static report: ReportConfig;
    private static localStorage;
    private static shakeAuthService;
    private static isLoading;
    /**
     * Starts Shake SDK. Must be called before using Shake.
     *
     * @param clientId team client id (check dashboard)
     * @param clientSecret team client secret (check dashboard)
     * @param bundleId app bundle id (check dashboard)
     */
    static start(clientId: string, clientSecret: string, bundleId: string): Promise<void>;
    /**
     * Shows shake screen from code.
     * Shake.start must be called before this method can be used.
     */
    static show: () => Promise<boolean>;
    /**
     * Sends tickets silently from the code.
     *
     * @param title ticket title
     * @param config {SilentReportConfig} object
     */
    static silentReport: (title: string, config?: SilentReportConfig) => Promise<boolean>;
    /**
     * Adds custom log to the activity history.
     *
     * @param level log level
     * @param message log message
     */
    static log: (level: LogLevel, message: string) => Promise<boolean>;
    /**
     * Adds custom data to the ticket.
     * This data is sent with the report.
     *
     * @param key data key
     * @param value data value
     */
    static setMetadata: (key: string, value: string) => void;
    /**
     * Removes custom data from the ticket.
     * This data is sent with the report.
     *
     * @param key data key
     */
    static removeMetadata: (key: string) => void;
    /**
     * Clears all metadata.
     */
    static clearMetadata: () => void;
    private static ifSDKEnabled;
}
export default Shake;

/**
 * Keeps Shake SDK related configuration.
 */
declare class ShakeConfig {
    private _language;
    private _floatingButtonEnabled;
    get language(): Language;
    set language(value: Language);
    get floatingButtonEnabled(): boolean;
    set floatingButtonEnabled(value: boolean);
}

/**
 * Silent report configuration interface.
 */
export declare interface SilentReportConfig {
    takeScreenshot?: boolean;
    showSuccessMessage?: boolean;
}

export { }
