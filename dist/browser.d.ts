export declare const DefaultFormKeys: {
    feedbackType: string;
    feedbackTypeBug: string;
    feedbackTypeQuestion: string;
    feedbackTypeSuggestion: string;
    description: string;
    email: string;
    attachments: string;
};

export declare const defaultShakeForm: () => ShakeForm;

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
    static shakeForm: ShakeForm | null;
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
    private static isLoading;
    private static isStarted;
    /**
     * Starts Shake SDK. Must be called before using Shake.
     *
     * @param apiKey app api key - check app settings on dashboard
     * @param appDomain app domain - check app settings on dashboard
     */
    static start(apiKey: string, appDomain: string): Promise<void>;
    private static setupShake;
    /**
     * Shows shake screen from code.
     * Shake.start must be called before this method can be used.
     */
    static show: (shakeScreen?: ShakeScreen) => Promise<boolean>;
    /**
     * Registers new app user.
     * If app user is already registered with the same id, request will be ignored.
     * If app user is already registred with the other id, old user will be unregistered.
     * @param userId user id
     */
    static registerUser: (userId: string) => Promise<boolean>;
    /**
     * Updates registered app user id.
     * If id is already registered, the request will be rejected.
     * @param userId new user id
     */
    static updateUserId: (userId: string) => Promise<boolean>;
    /**
     * Updates registered app user metadata.
     * @param metadata new user metadata
     */
    static updateUserMetadata: (metadata: UserMetadata) => Promise<boolean>;
    /**
     * Unregisters app user.
     */
    static unregisterUser: () => Promise<boolean>;
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

export declare class ShakeAttachments extends ShakeFormComponent {
    constructor();
}

/**
 * Keeps Shake SDK related configuration.
 */
declare class ShakeConfig {
    static isShakeOpened: boolean;
    private _language;
    private _defaultScreen;
    private _floatingButtonEnabled;
    private _shakeForm;
    get language(): Language;
    set language(value: Language);
    get defaultScreen(): ShakeScreen;
    set defaultScreen(value: ShakeScreen);
    get floatingButtonEnabled(): boolean;
    set floatingButtonEnabled(value: boolean);
    get shakeForm(): ShakeForm;
    set shakeForm(value: ShakeForm);
}

export declare class ShakeEmail extends ShakeFormComponent {
    label: string;
    value?: string;
    required?: boolean;
    constructor(key: string, label: string, value?: string, required?: boolean);
}

export declare class ShakeForm {
    items: ShakeFormComponent[];
    constructor(items: ShakeFormComponent[]);
    clone: () => ShakeForm;
}

export declare class ShakeFormComponent {
    key: string;
    constructor(key: string);
}

export declare class ShakePicker extends ShakeFormComponent {
    label: string;
    items: ShakePickerItem[];
    value?: number;
    constructor(key: string, label: string, items: ShakePickerItem[], value?: number);
}

export declare class ShakePickerItem {
    key: string;
    label: string;
    icon?: string;
    tag?: string;
    constructor(key: string, label: string, icon?: string, tag?: string);
}

export declare enum ShakeScreen {
    HOME_SCREEN = 0,
    NEW_TICKET = 1
}

export declare class ShakeTextInput extends ShakeFormComponent {
    label: string;
    value?: string;
    required?: boolean;
    lines?: number;
    constructor(key: string, label: string, value?: string, required?: boolean, lines?: number);
}

export declare class ShakeTitle extends ShakeFormComponent {
    label: string;
    value?: string;
    required?: boolean;
    lines?: number;
    constructor(key: string, label: string, value?: string, required?: boolean, lines?: number);
}

/**
 * Silent report configuration interface.
 */
export declare interface SilentReportConfig {
    takeScreenshot?: boolean;
    showSuccessMessage?: boolean;
}

declare type UserMetadata = {
    [key: string]: string;
};

export { }
