// Type definitions for webextension-polyfill 0.8
// Project: https://github.com/mozilla/webextension-polyfill
// Definitions by: Santo Pfingsten <https://github.com/Lusito>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Generated using https://github.com/Lusito/webextension-polyfill-ts

// Generated from Mozilla sources. Do not manually edit!

import { ActivityLog as ImportedActivityLog } from "./namespaces/activityLog";
import { Alarms as ImportedAlarms } from "./namespaces/alarms";
import { Bookmarks as ImportedBookmarks } from "./namespaces/bookmarks";
import { Action as ImportedAction } from "./namespaces/action";
import { BrowserAction as ImportedBrowserAction } from "./namespaces/browserAction";
import { BrowserSettings as ImportedBrowserSettings } from "./namespaces/browserSettings";
import { BrowsingData as ImportedBrowsingData } from "./namespaces/browsingData";
import { CaptivePortal as ImportedCaptivePortal } from "./namespaces/captivePortal";
import { Clipboard as ImportedClipboard } from "./namespaces/clipboard";
import { Commands as ImportedCommands } from "./namespaces/commands";
import { ContentScripts as ImportedContentScripts } from "./namespaces/contentScripts";
import { ContextualIdentities as ImportedContextualIdentities } from "./namespaces/contextualIdentities";
import { Cookies as ImportedCookies } from "./namespaces/cookies";
import { DeclarativeContent as ImportedDeclarativeContent } from "./namespaces/declarativeContent";
import { Devtools as ImportedDevtools } from "./namespaces/devtools";
import { Dns as ImportedDns } from "./namespaces/dns";
import { Downloads as ImportedDownloads } from "./namespaces/downloads";
import { Events as ImportedEvents } from "./namespaces/events";
import { Experiments as ImportedExperiments } from "./namespaces/experiments";
import { Extension as ImportedExtension } from "./namespaces/extension";
import { ExtensionTypes as ImportedExtensionTypes } from "./namespaces/extensionTypes";
import { Find as ImportedFind } from "./namespaces/find";
import { GeckoProfiler as ImportedGeckoProfiler } from "./namespaces/geckoProfiler";
import { History as ImportedHistory } from "./namespaces/history";
import { I18n as ImportedI18n } from "./namespaces/i18n";
import { Identity as ImportedIdentity } from "./namespaces/identity";
import { Idle as ImportedIdle } from "./namespaces/idle";
import { Management as ImportedManagement } from "./namespaces/management";
import { Manifest as ImportedManifest } from "./namespaces/manifest";
import { ContextMenus as ImportedContextMenus } from "./namespaces/contextMenus";
import { Menus as ImportedMenus } from "./namespaces/menus";
import { NetworkStatus as ImportedNetworkStatus } from "./namespaces/networkStatus";
import { NormandyAddonStudy as ImportedNormandyAddonStudy } from "./namespaces/normandyAddonStudy";
import { Notifications as ImportedNotifications } from "./namespaces/notifications";
import { Omnibox as ImportedOmnibox } from "./namespaces/omnibox";
import { PageAction as ImportedPageAction } from "./namespaces/pageAction";
import { Permissions as ImportedPermissions } from "./namespaces/permissions";
import { Pkcs11 as ImportedPkcs11 } from "./namespaces/pkcs11";
import { Privacy as ImportedPrivacy } from "./namespaces/privacy";
import { Proxy as ImportedProxy } from "./namespaces/proxy";
import { Runtime as ImportedRuntime } from "./namespaces/runtime";
import { Scripting as ImportedScripting } from "./namespaces/scripting";
import { Search as ImportedSearch } from "./namespaces/search";
import { Sessions as ImportedSessions } from "./namespaces/sessions";
import { SidebarAction as ImportedSidebarAction } from "./namespaces/sidebarAction";
import { Storage as ImportedStorage } from "./namespaces/storage";
import { Tabs as ImportedTabs } from "./namespaces/tabs";
import { Theme as ImportedTheme } from "./namespaces/theme";
import { TopSites as ImportedTopSites } from "./namespaces/topSites";
import { Types as ImportedTypes } from "./namespaces/types";
import { Urlbar as ImportedUrlbar } from "./namespaces/urlbar";
import { UserScripts as ImportedUserScripts } from "./namespaces/userScripts";
import { WebNavigation as ImportedWebNavigation } from "./namespaces/webNavigation";
import { WebRequest as ImportedWebRequest } from "./namespaces/webRequest";
import { Windows as ImportedWindows } from "./namespaces/windows";

declare namespace Browser {
    const activityLog: ActivityLog.Static;
    const alarms: Alarms.Static;
    const bookmarks: Bookmarks.Static;
    const action: Action.Static;
    const browserAction: BrowserAction.Static;
    const browserSettings: BrowserSettings.Static;
    const browsingData: BrowsingData.Static;
    const captivePortal: CaptivePortal.Static;
    const clipboard: Clipboard.Static;
    const commands: Commands.Static;
    const contentScripts: ContentScripts.Static;
    const contextualIdentities: ContextualIdentities.Static;
    const cookies: Cookies.Static;
    const declarativeContent: DeclarativeContent.Static;
    const devtools: Devtools.Static;
    const dns: Dns.Static;
    const downloads: Downloads.Static;
    const events: Events.Static;
    const experiments: Experiments.Static;
    const extension: Extension.Static;
    const extensionTypes: ExtensionTypes.Static;
    const find: Find.Static;
    const geckoProfiler: GeckoProfiler.Static;
    const history: History.Static;
    const i18n: I18n.Static;
    const identity: Identity.Static;
    const idle: Idle.Static;
    const management: Management.Static;
    const manifest: Manifest.Static;
    const contextMenus: ContextMenus.Static;
    const menus: Menus.Static;
    const networkStatus: NetworkStatus.Static;
    const normandyAddonStudy: NormandyAddonStudy.Static;
    const notifications: Notifications.Static;
    const omnibox: Omnibox.Static;
    const pageAction: PageAction.Static;
    const permissions: Permissions.Static;
    const pkcs11: Pkcs11.Static;
    const privacy: Privacy.Static;
    const proxy: Proxy.Static;
    const runtime: Runtime.Static;
    const scripting: Scripting.Static;
    const search: Search.Static;
    const sessions: Sessions.Static;
    const sidebarAction: SidebarAction.Static;
    const storage: Storage.Static;
    const tabs: Tabs.Static;
    const theme: Theme.Static;
    const topSites: TopSites.Static;
    const types: Types.Static;
    const urlbar: Urlbar.Static;
    const userScripts: UserScripts.Static;
    const webNavigation: WebNavigation.Static;
    const webRequest: WebRequest.Static;
    const windows: Windows.Static;

    interface Browser {
        activityLog: ActivityLog.Static;
        alarms: Alarms.Static;
        bookmarks: Bookmarks.Static;
        action: Action.Static;
        browserAction: BrowserAction.Static;
        browserSettings: BrowserSettings.Static;
        browsingData: BrowsingData.Static;
        captivePortal: CaptivePortal.Static;
        clipboard: Clipboard.Static;
        commands: Commands.Static;
        contentScripts: ContentScripts.Static;
        contextualIdentities: ContextualIdentities.Static;
        cookies: Cookies.Static;
        declarativeContent: DeclarativeContent.Static;
        devtools: Devtools.Static;
        dns: Dns.Static;
        downloads: Downloads.Static;
        events: Events.Static;
        experiments: Experiments.Static;
        extension: Extension.Static;
        extensionTypes: ExtensionTypes.Static;
        find: Find.Static;
        geckoProfiler: GeckoProfiler.Static;
        history: History.Static;
        i18n: I18n.Static;
        identity: Identity.Static;
        idle: Idle.Static;
        management: Management.Static;
        manifest: Manifest.Static;
        contextMenus: ContextMenus.Static;
        menus: Menus.Static;
        networkStatus: NetworkStatus.Static;
        normandyAddonStudy: NormandyAddonStudy.Static;
        notifications: Notifications.Static;
        omnibox: Omnibox.Static;
        pageAction: PageAction.Static;
        permissions: Permissions.Static;
        pkcs11: Pkcs11.Static;
        privacy: Privacy.Static;
        proxy: Proxy.Static;
        runtime: Runtime.Static;
        scripting: Scripting.Static;
        search: Search.Static;
        sessions: Sessions.Static;
        sidebarAction: SidebarAction.Static;
        storage: Storage.Static;
        tabs: Tabs.Static;
        theme: Theme.Static;
        topSites: TopSites.Static;
        types: Types.Static;
        urlbar: Urlbar.Static;
        userScripts: UserScripts.Static;
        webNavigation: WebNavigation.Static;
        webRequest: WebRequest.Static;
        windows: Windows.Static;
    }

    /* tslint:disable:strict-export-declare-modifiers */
    export import ActivityLog = ImportedActivityLog;
    export import Alarms = ImportedAlarms;
    export import Bookmarks = ImportedBookmarks;
    export import Action = ImportedAction;
    export import BrowserAction = ImportedBrowserAction;
    export import BrowserSettings = ImportedBrowserSettings;
    export import BrowsingData = ImportedBrowsingData;
    export import CaptivePortal = ImportedCaptivePortal;
    export import Clipboard = ImportedClipboard;
    export import Commands = ImportedCommands;
    export import ContentScripts = ImportedContentScripts;
    export import ContextualIdentities = ImportedContextualIdentities;
    export import Cookies = ImportedCookies;
    export import DeclarativeContent = ImportedDeclarativeContent;
    export import Devtools = ImportedDevtools;
    export import Dns = ImportedDns;
    export import Downloads = ImportedDownloads;
    export import Events = ImportedEvents;
    export import Experiments = ImportedExperiments;
    export import Extension = ImportedExtension;
    export import ExtensionTypes = ImportedExtensionTypes;
    export import Find = ImportedFind;
    export import GeckoProfiler = ImportedGeckoProfiler;
    export import History = ImportedHistory;
    export import I18n = ImportedI18n;
    export import Identity = ImportedIdentity;
    export import Idle = ImportedIdle;
    export import Management = ImportedManagement;
    export import Manifest = ImportedManifest;
    export import ContextMenus = ImportedContextMenus;
    export import Menus = ImportedMenus;
    export import NetworkStatus = ImportedNetworkStatus;
    export import NormandyAddonStudy = ImportedNormandyAddonStudy;
    export import Notifications = ImportedNotifications;
    export import Omnibox = ImportedOmnibox;
    export import PageAction = ImportedPageAction;
    export import Permissions = ImportedPermissions;
    export import Pkcs11 = ImportedPkcs11;
    export import Privacy = ImportedPrivacy;
    export import Proxy = ImportedProxy;
    export import Runtime = ImportedRuntime;
    export import Scripting = ImportedScripting;
    export import Search = ImportedSearch;
    export import Sessions = ImportedSessions;
    export import SidebarAction = ImportedSidebarAction;
    export import Storage = ImportedStorage;
    export import Tabs = ImportedTabs;
    export import Theme = ImportedTheme;
    export import TopSites = ImportedTopSites;
    export import Types = ImportedTypes;
    export import Urlbar = ImportedUrlbar;
    export import UserScripts = ImportedUserScripts;
    export import WebNavigation = ImportedWebNavigation;
    export import WebRequest = ImportedWebRequest;
    export import Windows = ImportedWindows;
    /* tslint:enable:strict-export-declare-modifiers */
}

// tslint:disable-next-line:export-just-namespace
export = Browser;
