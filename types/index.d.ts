/// <reference types="node" />
declare const _exports: {
    fs: {
        createTempFolder: (tag?: string | undefined) => Promise<string>;
        deleteTempFolderByTag: (tag: string) => Promise<void>;
        getTempFolderPathByTag: (tag: string) => Promise<string>;
        createFsStructure: (path: string, structure: any) => Promise<void>;
        readLines: (path: string) => {
            lines: import("readline").Interface;
            readStream: import("fs").ReadStream;
        };
        getLine: (path: string, lineNumber: number) => Promise<string>;
        createFile: (path: string) => Promise<void>;
        deleteFile: (path: string) => Promise<void>;
        appendFile: (path: string, text: string) => Promise<void>;
        createPath: (path: string) => Promise<void>;
        deleteFolder: (path: string) => Promise<void>;
        exists: (path: string) => Promise<boolean>;
        rewriteFile: (path: string, text: string) => Promise<void>;
        readFile: (path: string) => Promise<string>;
        updateLine: (path: string, lineNumber: number, text: string) => Promise<void>;
        getLineCount: (path: string) => Promise<number>;
        copyFile: (sourceFilePath: string, newFilePath: string) => Promise<void>;
        copyFolder: (sourceFolderPath: string, newFolderPath: string) => Promise<void>;
        getFilsesNames: (path: string) => Promise<string[]>;
        getFoldersNames: (path: string) => Promise<string[]>;
        checkENOENT: (err: Error) => void;
    };
    request: {
        get: (url: string, headers: import("http").OutgoingHttpHeaders) => Promise<{
            statusCode: number;
            statusMessage: string;
            headers: import("http").IncomingHttpHeaders;
            body: string;
        }>;
        post: (url: string, payload: any, headers: import("http").OutgoingHttpHeaders) => Promise<{
            statusCode: number;
            statusMessage: string;
            headers: import("http").IncomingHttpHeaders;
            body: string;
        }>;
        put: (url: string, payload: any, headers: import("http").OutgoingHttpHeaders) => Promise<{
            statusCode: number;
            statusMessage: string;
            headers: import("http").IncomingHttpHeaders;
            body: string;
        }>;
        patch: (url: string, payload: any, headers: import("http").OutgoingHttpHeaders) => Promise<{
            statusCode: number;
            statusMessage: string;
            headers: import("http").IncomingHttpHeaders;
            body: string;
        }>;
        delete: (url: string, headers: import("http").OutgoingHttpHeaders) => Promise<{
            statusCode: number;
            statusMessage: string;
            headers: import("http").IncomingHttpHeaders;
            body: string;
        }>;
    };
    utils: {
        syncify: (fn: any) => Promise<() => any>;
        randHex: (size: number) => string;
    };
};
export = _exports;
