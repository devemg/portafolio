import { IconDefinition } from "@fortawesome/fontawesome-common-types";

export interface ToolItem {
    id: number,
    title: string;
    icon: IconDefinition;
    description?: string;
}
export interface SkillItem {
    id: number;
    title: string;
    tools: ToolItem[];
}