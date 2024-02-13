declare class Shake {
    private static isLoading;
    private static data;
    private static shakeAuthService;
    static start(clientId: string, clientSecret: string): Promise<void>;
}
export default Shake;

export { }
