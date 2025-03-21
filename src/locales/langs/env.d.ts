/* eslint-disable @typescript-eslint/no-explicit-any */
/// <reference types="vite/client" />

declare module '*.yaml' {
    const value: Record<string, any>;
    export default value;
}

declare module '*.yml' {
    const value: Record<string, any>;
    export default value;
}
