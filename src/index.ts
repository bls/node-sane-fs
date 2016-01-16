import * as fs from 'fs';
export * from 'fs';
import promisify = require('es6-promisify');

export type ModeT = string | number;
export type TimeT = number | Date;

export let accessAsync: (path: string, mode?: ModeT) => Promise<void> = promisify(fs.access);
export let appendFileAsync: (filename: string, data: any,
                        options: { encoding?: string; mode?: ModeT; flag?: string; }) => Promise<void> = promisify(fs.appendFile);
export let chmodAsync: (path: string, mode: ModeT) => Promise<void> = promisify(fs.chmod);
export let chownAsync: (path: string, uid: number, gid: number) => Promise<void> = promisify(fs.chown);
export let closeAsync: (fd: number) => Promise<void> = promisify(fs.close);
export let fchmodAsync: (fd: number, mode: ModeT) => Promise<void> = promisify(fs.fchmod);
export let fchownAsync: (fd: number, uid: number, gid: number) => Promise<void> = promisify(fs.fchown);
export let fstatAsync: (fd: number) => Promise<fs.Stats> = promisify(fs.fstat);
export let fsyncAsync: (fd: number) => Promise<void> = promisify(fs.fsync);
export let ftruncateAsync: (fd: number, len?: number) => Promise<void> = promisify(fs.ftruncate);
export let futimesAsync: (fd: number, atime: TimeT, mtime: TimeT) => Promise<void> = promisify(fs.futimes);
export let lchmodAsync: (path: string, mode: ModeT) => Promise<void> = promisify(fs.lchmod);
export let lchownAsync: (path: string, uid: number, gid: number) => Promise<void> = promisify(fs.lchown);
export let linkAsync: (srcpath: string, dstpath: string) => Promise<void> = promisify(fs.link);
export let lstatAsync: (path: string) => Promise<fs.Stats> = promisify(fs.lstat);
export let mkdirAsync: (path: string) => Promise<void> = promisify(fs.mkdir);
export let openAsync: (path: string, flags: string, mode?: ModeT) => Promise<number> = promisify(fs.open);
export let readAsync: (fd: number, buffer: Buffer, offset: number, length: number, position: number) => Promise<number> = promisify(fs.read);
export let readdirAsync: (path: string) => Promise<string[]> = promisify(fs.readdir);
export let readlinkAsync: (path: string) => Promise<string> = promisify(fs.readlink);
export let realpathAsync: (path: string, cache?: { [path: string]: string }) => Promise<string> = promisify(fs.realpath);
export let renameAsync: (oldPath: string, newPath: string) => Promise<void> = promisify(fs.rename);
export let rmdirAsync: (path: string) => Promise<void> = promisify(fs.rmdir);
export let statAsync: (path: string) => Promise<fs.Stats> = promisify(fs.stat);
export let symlinkAsync: (srcpath: string, dstpath: string, type?: string) => Promise<void> = promisify(fs.symlink);
export let truncateAsync: (path: string, len?: number) => Promise<void> = promisify(fs.truncate);
export let unlinkAsync: (path: string) => Promise<void> = promisify(fs.unlink);
export let utimesAsync: (path: string, atime: TimeT, mtime: TimeT) => Promise<void> = promisify(fs.utimes);
export interface IWriteAsync {
    (fd: number, buffer: Buffer, offset: number, length: number, position?: number): Promise<number>;
    (fd: number, data: any, position?: number, encoding?: string): Promise<number>;
}
export let writeAsync: IWriteAsync = promisify(fs.write);
export let writeFileAsync: (filename: string, data: any,
                            options?: { encoding?: string; mode?: ModeT; flag?: string; }) => Promise<void> = promisify(fs.writeFile);
