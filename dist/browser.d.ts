declare enum Language {
    EN = 0
}

/**
 * Shake SDK interface.
 */
declare class Shake {
    static config: ShakeConfig;
    private static isLoading;
    private static localStorage;
    private static shakeAuthService;
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

declare class ShakeConfig {
    private _language;
    private _floatingButtonEnabled;
    get language(): Language;
    set language(value: Language);
    get floatingButtonEnabled(): boolean;
    set floatingButtonEnabled(value: boolean);
}

declare interface SilentReportConfig {
    takeScreenshot?: boolean;
    showSuccessMessage?: boolean;
}

export { }
