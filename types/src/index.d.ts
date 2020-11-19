/// <reference types="node" />
export const fs: {
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
    copyFolder: (sourceFolderPath: string, newFolderPath: string) => Promise<never>;
    getFilsesNames: (path: string) => Promise<string[]>;
    getFoldersNames: (path: string) => Promise<string[]>;
    checkENOENT: (err: Error) => void;
};
