declare interface ActivityHistoryEvent {
    timestamp: string;
    event_type: ActivityHistoryEventType;
}

declare enum ActivityHistoryEventType {
    CONSOLE_LOG = 0,
    CUSTOM_LOG = 1,
    NETWORK_REQUEST = 2,
    NOTIFICATION_EVENT = 3,
    VIEW_CONTROLLER = 4,
    SYSTEM_EVENT = 5,
    USER_ACTION = 6
}

export declare interface ConsoleLog extends ActivityHistoryEvent {
    message: string;
    type: ConsoleLogType;
}

declare interface ConsoleLogEvent {
    data: any[];
    type: string;
}

export declare enum ConsoleLogType {
    VERBOSE = "verbose",
    DEBUG = "debug",
    INFO = "info",
    WARNING = "warning",
    ERROR = "error"
}

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
    CZECH = "cs",
    DANISH = "da",
    GERMAN = "de",
    ENGLISH = "en",
    SPANISH = "es",
    ESTONIAN = "et",
    FRENCH = "fr",
    HUNGARIAN = "hu",
    ITALIAN = "it",
    JAPANESE = "ja",
    KOREAN = "ko",
    LATVIAN = "lv",
    DUTCH = "nl",
    POLISH = "pl",
    PORTUGUESE = "pt",
    RUSSIAN = "ru",
    THAI = "th",
    TURKISH = "tr",
    CHINESE_SIMPLIFIED = "zh-CN",
    CHINESE_TRADITIONAL = "zh-TW"
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

export declare interface NetworkRequest extends ActivityHistoryEvent {
    method: string;
    status_code: string;
    url: string;
    request_body: string;
    request_headers: {
        [key: string]: string;
    };
    response_body: string;
    response_headers: {
        [key: string]: string;
    };
    duration: number;
    start: number;
}

declare interface NetworkRequestEvent {
    method: string;
    status_code: string;
    url: string;
    request_body: string;
    request_headers: {
        [key: string]: string;
    };
    response_body: string;
    response_headers: {
        [key: string]: string;
    };
    duration: number;
    start: number;
    timestamp: string;
}

export declare type NetworkRequestFilter = ((networkRequest: NetworkRequest) => NetworkRequest | null) | null;

/**
 * Keeps Shake ticket related configuration.
 */
declare class ReportConfig {
    static metadata: Metadata;
    private _tags;
    private _isConsoleLogsEnabled;
    private _isCustomLogsEnabled;
    private _isNetworkRequestsEnabled;
    private _isScreenChangesEnabled;
    private _isSystemEventsEnabled;
    private _isUserActionsEnabled;
    private _screenshotIncluded;
    private _sessionReplayEnabled;
    get tags(): string[];
    set tags(value: string[]);
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
    get screenshotIncluded(): boolean;
    set screenshotIncluded(value: boolean);
    enableActivityHistory: (enabled: boolean) => void;
    isActivityHistoryEnabled: () => boolean;
    get isSessionReplayEnabled(): boolean;
    set isSessionReplayEnabled(enabled: boolean);
}

/**
 * Shake SDK interface.
 */
declare class Shake {
    static isStarted: boolean;
    static isExtension: boolean;
    static config: ShakeConfig;
    static report: ReportConfig;
    private static localStorage;
    private static isLoading;
    /**
     * Starts Shake SDK. Must be called before using Shake.
     *
     * @param apiKey app api key - check app settings on dashboard
     */
    static start(apiKey: string): Promise<void>;
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
    static setMetadata: (key: string, value: string | null | undefined) => void;
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
    /**
     * Starts Shake SDK. Must be called before using Shake.
     * Used only from browser extension.
     */
    static startFromExtension(): void;
    /**
     * Shows shake screen from code.
     * Used only from browser extension.
     */
    static showFromExtension: (base64Image: string) => Promise<boolean>;
    /**
     * Sets screenshot bubble click listener.
     * Used only from browser extension.
     */
    static setOnScreenshotBubbleClick: (fun: () => void) => void;
    /**
     * Adds new screenshot and shows Shake.
     * Used only from browser extension.
     */
    static grabScreenshotFromExtension: (base64Image: string) => Promise<boolean>;
    /**
     * Sets dashboard user auth token.
     * Used only from browser extension.
     */
    static setAuthToken: (authToken: string) => Promise<void>;
    /**
     * Sets ticket sent listener.
     * Used only from browser extension.
     */
    static setOnTicketSentListener: (fun: (url: string) => void) => void;
    /**
     * Sets settings click listener.
     * Used only from browser extension.
     */
    static setOnSettingsClickListener: (fun: () => void) => void;
    /**
     * Inserts network log object in Shake.
     * Used only from browser extension.
     */
    static insertNetworkRequest: (networkRequestEvent: NetworkRequestEvent) => Promise<void>;
    /**
     * Inserts console log object in Shake.
     * Used only from browser extension.
     */
    static insertConsoleLog: (consoleLogEvent: ConsoleLogEvent) => Promise<void>;
    /**
     * Updates body of similar network request.
     * Used only from browser extension.
     */
    static updateSimilarNetworkRequestBody: (networkRequestEvent: NetworkRequestEvent) => Promise<void>;
    /**
     * Sets full story session link.
     * Used only from browser extension.
     */
    static setFullStorySession: (sessionLink: string) => Promise<void>;
    /**
     * Resets Shake storage.
     * Used only from browser extension.
     */
    static resetShake: () => Promise<void>;
}
export default Shake;

export declare class ShakeAttachments extends ShakeFormComponent {
    constructor();
}

/**
 * Represents Shake button style.
 */
export declare enum ShakeButtonStyle {
    MERCURY = "mercury",
    VENUS = "venus",
    EARTH = "earth",
    MARS = "mars",
    JUPITER = "jupiter"
}

/**
 * Keeps Shake SDK related configuration.
 */
declare class ShakeConfig {
    static isShakeOpened: boolean;
    static isScreensotCaptureMode: boolean;
    static isVideoRecordingMode: boolean;
    private _language;
    private _defaultScreen;
    private _floatingButtonEnabled;
    private _floatingButtonStyle;
    private _shakeForm;
    private _networkRequestsFilter;
    private _sensitiveDataRedaction;
    get language(): Language | null;
    set language(value: Language | null);
    get defaultScreen(): ShakeScreen;
    set defaultScreen(value: ShakeScreen);
    get floatingButtonEnabled(): boolean;
    set floatingButtonEnabled(value: boolean);
    get floatingButtonStyle(): ShakeButtonStyle;
    set floatingButtonStyle(value: ShakeButtonStyle);
    get shakeForm(): ShakeForm;
    set shakeForm(value: ShakeForm);
    isAttachmentsEnabled: () => boolean;
    get networkRequestsFilter(): NetworkRequestFilter;
    set networkRequestsFilter(value: NetworkRequestFilter);
    get sensitiveDataRedaction(): boolean;
    set sensitiveDataRedaction(value: boolean);
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
    includeSessionReplay?: boolean;
}

declare type UserMetadata = {
    [key: string]: string;
};

export { }


declare global {
    interface Window {
        XMLHttpRequest: any;
    }
}

