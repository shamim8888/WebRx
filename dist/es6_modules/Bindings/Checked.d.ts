/// <reference path="../../../../node_modules/rx/ts/rx.all.d.ts" />
/// <reference path="../Interfaces.d.ts" />
export default class CheckedBinding implements wx.IBindingHandler {
    constructor(domManager: wx.IDomManager, app: wx.IWebRxApp);
    applyBinding(node: Node, options: string, ctx: wx.IDataContext, state: wx.INodeState, module: wx.IModule): void;
    configure(options: any): void;
    priority: number;
    protected domManager: wx.IDomManager;
    protected app: wx.IWebRxApp;
    protected getCheckedEventObservables(el: HTMLInputElement): Array<Rx.Observable<Object>>;
}
