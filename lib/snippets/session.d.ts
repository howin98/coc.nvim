import { Neovim } from '@chemzqm/neovim';
import { FormattingOptions } from 'jsonc-parser';
import { Event, Range, TextDocumentContentChangeEvent } from 'vscode-languageserver-protocol';
import { CocSnippet, CocSnippetPlaceholder } from "./snippet";
export declare class SnippetSession {
    private nvim;
    readonly bufnr: number;
    private _isActive;
    private _currId;
    private version;
    private preferComplete;
    private _snippet;
    private _onCancelEvent;
    readonly onCancel: Event<void>;
    constructor(nvim: Neovim, bufnr: number);
    start(snippetString: string, select?: boolean, range?: Range): Promise<boolean>;
    private activate;
    deactivate(): void;
    readonly isActive: boolean;
    nextPlaceholder(): Promise<void>;
    previousPlaceholder(): Promise<void>;
    synchronizeUpdatedPlaceholders(change: TextDocumentContentChangeEvent): Promise<void>;
    selectCurrentPlaceholder(triggerAutocmd?: boolean): Promise<void>;
    selectPlaceholder(placeholder: CocSnippetPlaceholder, triggerAutocmd?: boolean): Promise<void>;
    private select;
    private getVirtualCol;
    private documentSynchronize;
    checkPosition(): Promise<void>;
    findPlaceholder(range: Range): CocSnippetPlaceholder | null;
    readonly placeholder: CocSnippetPlaceholder;
    readonly snippet: CocSnippet;
    private readonly document;
}
export declare function normalizeSnippetString(snippet: string, indent: string, opts: FormattingOptions): string;
