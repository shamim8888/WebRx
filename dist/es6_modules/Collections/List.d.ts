/// <reference path="../Interfaces.d.ts" />
/**
* ReactiveUI's awesome ReactiveList ported to Typescript
* @class
*/
export declare class ObservableList<T> implements wx.IObservableList<T>, Rx.IDisposable {
    constructor(initialContents?: Array<T>, resetChangeThreshold?: number, scheduler?: Rx.IScheduler);
    dispose(): void;
    isReadOnly: boolean;
    itemsAdded: Rx.Observable<wx.IListChangeInfo<T>>;
    beforeItemsAdded: Rx.Observable<wx.IListChangeInfo<T>>;
    itemsRemoved: Rx.Observable<wx.IListChangeInfo<T>>;
    beforeItemsRemoved: Rx.Observable<wx.IListChangeInfo<T>>;
    itemReplaced: Rx.Observable<wx.IListChangeInfo<T>>;
    beforeItemReplaced: Rx.Observable<wx.IListChangeInfo<T>>;
    beforeItemsMoved: Rx.Observable<wx.IListChangeInfo<T>>;
    itemsMoved: Rx.Observable<wx.IListChangeInfo<T>>;
    lengthChanging: Rx.Observable<number>;
    lengthChanged: Rx.Observable<number>;
    isEmptyChanged: Rx.Observable<boolean>;
    itemChanging: Rx.Observable<wx.IPropertyChangedEventArgs>;
    itemChanged: Rx.Observable<wx.IPropertyChangedEventArgs>;
    shouldReset: Rx.Observable<any>;
    changeTrackingEnabled: boolean;
    length: wx.IObservableProperty<number>;
    addRange(items: T[]): void;
    insertRange(index: number, items: T[]): void;
    removeAll(items: T[]): void;
    removeRange(index: number, count: number): void;
    toArray(): Array<T>;
    reset(): void;
    add(item: T): void;
    clear(): void;
    contains(item: T): boolean;
    remove(item: T): boolean;
    indexOf(item: T): number;
    insert(index: number, item: T): void;
    removeAt(index: number): void;
    move(oldIndex: any, newIndex: any): void;
    project<TNew, TDontCare>(filter?: (item: T) => boolean, orderer?: (a: TNew, b: TNew) => number, selector?: (T) => TNew, refreshTrigger?: Rx.Observable<TDontCare>, scheduler?: Rx.IScheduler): wx.IObservableReadOnlyList<TNew>;
    project<TDontCare>(filter?: (item: T) => boolean, orderer?: (a: T, b: T) => number, refreshTrigger?: Rx.Observable<TDontCare>, scheduler?: Rx.IScheduler): wx.IObservableReadOnlyList<T>;
    project<TDontCare>(filter?: (item: T) => boolean, refreshTrigger?: Rx.Observable<TDontCare>, scheduler?: Rx.IScheduler): wx.IObservableReadOnlyList<T>;
    project<TDontCare>(refreshTrigger?: Rx.Observable<TDontCare>, scheduler?: Rx.IScheduler): wx.IObservableReadOnlyList<T>;
    suppressChangeNotifications(): Rx.IDisposable;
    get(index: number): T;
    set(index: number, item: T): void;
    isEmpty: wx.IObservableProperty<boolean>;
    listChanging: Rx.Observable<boolean>;
    listChanged: Rx.Observable<boolean>;
    push: (item: T) => void;
    sort(comparison: (a: T, b: T) => number): void;
    forEach(callbackfn: (value: T, from: number, array: T[]) => void, thisArg?: any): void;
    map<U>(callbackfn: (value: T, from: number, array: T[]) => U, thisArg?: any): U[];
    filter(callbackfn: (value: T, from: number, array: T[]) => boolean, thisArg?: any): T[];
    some(callbackfn: (value: T, from: number, array: T[]) => boolean, thisArg?: any): boolean;
    every(callbackfn: (value: T, from: number, array: T[]) => boolean, thisArg?: any): boolean;
    protected inner: Array<T>;
    private beforeItemsAddedSubject;
    private itemsAddedSubject;
    private beforeItemsRemovedSubject;
    private itemsRemovedSubject;
    private beforeItemReplacedSubject;
    private itemReplacedSubject;
    private itemChangingSubject;
    private itemChangedSubject;
    private beforeItemsMovedSubject;
    private itemsMovedSubject;
    private resetSubject;
    private beforeResetSubject;
    private changeNotificationsSuppressed;
    private propertyChangeWatchers;
    private resetChangeThreshold;
    private resetSubCount;
    private hasWhinedAboutNoResetSub;
    protected app: wx.IWebRxApp;
    private _itemsAdded;
    private _beforeItemsAdded;
    private _itemsRemoved;
    private _beforeItemsRemoved;
    private _beforeItemsMoved;
    private _itemReplaced;
    private _beforeItemReplaced;
    private _itemsMoved;
    private _lengthChanging;
    private _lengthChanged;
    private _itemChanging;
    private _itemChanged;
    private setupRx(initialContents, resetChangeThreshold?, scheduler?);
    private areChangeNotificationsEnabled();
    protected insertItem(index: number, item: T): void;
    private removeItem(index);
    private moveItem(oldIndex, newIndex);
    private clearItems();
    private addItemToPropertyTracking(toTrack);
    private removeItemFromPropertyTracking(toUntrack);
    private clearAllPropertyChangeWatchers();
    private refcountSubscribers<TObs>(input, block);
    private publishResetNotification();
    private publishBeforeResetNotification();
    private isLengthAboveResetThreshold(toChangeLength);
}
/**
* Creates a new observable list with optional default contents
* @param {Array<T>} initialContents The initial contents of the list
* @param {number = 0.3} resetChangeThreshold
*/
export declare function list<T>(initialContents?: Array<T>, resetChangeThreshold?: number, scheduler?: Rx.IScheduler): wx.IObservableList<T>;
/**
* Determines if target is an instance of a IObservableList
* @param {any} target
*/
export declare function isList(target: any): boolean;
