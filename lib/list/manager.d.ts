import { Neovim } from '@chemzqm/neovim';
import { Disposable } from 'vscode-languageserver-protocol';
import { IList, ListContext, ListOptions } from '../types';
import ListConfiguration from './configuration';
import History from './history';
import Prompt from './prompt';
import UI from './ui';
import Worker from './worker';
export declare class ListManager implements Disposable {
    prompt: Prompt;
    ui: UI;
    history: History;
    listOptions: ListOptions;
    config: ListConfiguration;
    worker: Worker;
    private plugTs;
    private disposables;
    private args;
    private listArgs;
    private charMap;
    private listMap;
    private mappings;
    private currList;
    private cwd;
    private window;
    private activated;
    private executing;
    private nvim;
    init(nvim: Neovim): void;
    start(args: string[]): Promise<void>;
    resume(): Promise<void>;
    doAction(name?: string): Promise<void>;
    previous(): Promise<void>;
    next(): Promise<void>;
    cancel(close?: boolean): Promise<void>;
    switchMatcher(): Promise<void>;
    togglePreview(): Promise<void>;
    chooseAction(): Promise<void>;
    readonly name: string;
    readonly list: IList;
    parseArgs(args: string[]): {
        list: IList;
        options: ListOptions;
        listOptions: string[];
        listArgs: string[];
    } | null;
    updateStatus(): void;
    private onInputChar;
    private onInsertInput;
    private onNormalInput;
    onMouseEvent(key: any): Promise<void>;
    feedkeys(key: string): Promise<void>;
    command(command: string): Promise<void>;
    normal(command: string, bang?: boolean): Promise<void>;
    call(fname: string): Promise<any>;
    showHelp(): Promise<void>;
    readonly context: ListContext;
    registerList(list: IList): Disposable;
    readonly names: string[];
    toggleMode(): void;
    getConfig<T>(key: string, defaultValue: T): T;
    readonly isActivated: boolean;
    stop(): void;
    reset(): void;
    dispose(): void;
    private getCharMap;
    private doItemAction;
    private resolveItem;
    private readonly defaultAction;
}
declare const _default: ListManager;
export default _default;
