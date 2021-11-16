export default class Category {

    constructor(title: string,
                id: number,
                isParentCategory: boolean,
                children: Category[] = null) {
        this.title = title;
        this.id = id;
        this.isParentCategory = isParentCategory;
        this.children = children;
    }
}
