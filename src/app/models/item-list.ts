import { Item } from "./item";
export type AspectRatio = '1x1' | '16x9' | '2x3';

export type Style = 'full' | 'centered';

export interface ItemList {
    items: Item[];
    title: string;
    id: string;
    aspectRatio: AspectRatio;
    style: Style;
}