
class ContentList {
  static contentCount = 0;
   private _items: Content[];
  constructor(item: Content) {
    this._items = [];
    this._items[0] = item;
    this.increaseCount();
  }
  increaseCount() {
    return ++ContentList.contentCount;
  }
  get item():Content[]{
    return this._items;
  }
}
