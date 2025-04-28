import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface ContactItem {
    id: number;
    username: string;
    name: string;
    iconClass: string;
    icon: IconDefinition;
    link: string;
}