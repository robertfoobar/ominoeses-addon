declare namespace browser {
    

    class BeforeRequestListener {
        addListener: (any) => any;
    }

    var tabs: {
        getCurrent: () => Promise<Tab>,
        query: (QueryInfo) => Promise<Tab[]>
        update: (tabId:number, properties: UpdateProperties) => Promise<Tab>
    }

    var webNavigation: {
        onCompleted: {
            addListener: (listener: any, filter: any) => any;
            removeListener: (listener: any) => any;
            hasListener: (listener: any) => any;
        }
    }

    var webRequest: {
        onBeforeRequest: {
            addListener: (listener: any, filter: any, synch: any) => any;
        }        
    };
}

interface QueryInfo {
    active?: boolean;
    currentWindow?: boolean;
    url?: string;
    openerTabId?: number;
    windowId?: number;    
}

interface UpdateProperties {
    active?: boolean; // Whether the tab should be active. Does not affect whether the window is focused (see windows.update).
    autoDiscardable?: boolean; // Whether the tab should be discarded automatically by the browser when resources are low.
    highlighted?: boolean; // Adds or removes the tab from the current selection.
    loadReplace?: boolean; // Whether the new URL should replace the old URL in the tab's navigation history, as accessed via the "Back" button. For example, suppose the user creates a new tab using Ctrl+T. By default, in Firefox, this would load "about:newtab". If your extension then updates this page using tabs.update, without loadReplace, the "Back" button will be enabled and will take the user back to "about:newtab". If the extension sets loadReplace, then the "Back" button will be disabled and it will be just as if the URL supplied by the extension was the first page visited in that tab. Note though that the original URL will still appear in the browser's global history.
    muted?: boolean; // Whether the tab should be muted.
    openerTabId?: number; // The ID of the tab that opened this tab. If specified, the opener tab must be in the same window as this tab.
    pinned?: boolean; // Whether the tab should be pinned.
    url?: string; // A URL to navigate the tab to. For security reasons, in Firefox, this may not be a privileged URL. So passing any of the following URLs will fail, with runtime.lastError being set to an error message: chrome: URLs javascript: URLs data: URLs file: URLs (i.e., files on the filesystem. However, to use a file packaged inside the extension, see below) privileged about: URLs (for example, about:config, about:addons, about:debugging, about:newtab). Non-privileged URLs (about:home, about:blank) are allowed. To load a page that's packaged with your extension, specify an absolute URL starting at the extension's manifest.json file. For example: '/path/to/my-page.html'. If you omit the leading '/', the URL is treated as a relative URL, and different browsers may construct different absolute URLs.
}

interface Tab {
    active: boolean; // Whether the tab is active in its window. This may be true even if the tab's window is not currently focused.
    audible?: boolean; // If the tab is not muted: whether the tab is producing sound. If the tab is muted: whether the tab would be producing sound, if it were not muted.
    autoDiscardable?: boolean; // Whether the tab can be discarded automatically by the browser when resources are low.
    cookieStoreId?: string; // The cookie store of the tab. If different tabs can have different cookie stores (for example, to support contextual identity), you can pass this as the storeId option into various methods of the cookies API, to set and get cookies associated with this tab's cookie store. Only present if the extension has the "cookies" permission.
    discarded?: boolean; // Whether the tab is discarded. A discarded tab is one whose content has been unloaded from memory, but is still visible in the tab strip. Its content gets reloaded the next time it's activated.
    favIconUrl?: string; // The URL of the tab's favicon. Only present if the extension has the "tabs" permission. It may also be an empty string if the tab is loading.
    height?: number; // The height of the tab in pixels.
    highlighted: boolean; // Whether the tab is highlighted.
    id?: number; // The tab's ID. Tab IDs are unique within a browser session. The tab ID may also be set to tabs.TAB_ID_NONE for browser windows that don't host content tabs (for example, devtools windows).
    incognito: boolean; //Whether the tab is in a private browsing window.
    index: number; // The zero-based index of the tab within its window.
    isArticle: boolean; //True if the tab can be rendered in Reader Mode, false otherwise.
    isInReaderMode: boolean; //True if the tab is currently being rendered in Reader Mode, false otherwise.
    lastAccessed: number; // Time at which the tab was last accessed, in milliseconds since the epoch.
    openerTabId?: number; //The ID of the tab that opened this tab, if any. This property is only present if the opener tab still exists.
    pinned: boolean; // Whether the tab is pinned.
    selected: boolean; // Whether the tab is selected.
    sessionId : string; // The session ID used to uniquely identify a Tab obtained from the sessions API.
    status?: string; // Either loading or complete.
    title?: string; // The title of the tab. Only present if the extension has the "tabs" permission.
    url: string; // The URL of the document that the tab is displaying. Only present if the extension has the "tabs" permission.
    width: number; // The width of the tab in pixels.
    windowId: number; // The ID of the window that hosts this ta
}

interface CompletedDetails {
    tabId: number,
    url: string,
    processId: number,
    frameId: number, 
    timeStamp: number
}
