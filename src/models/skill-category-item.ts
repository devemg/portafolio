import { ToolItem } from "./tool-item";

export interface SkillItem {
    id: number;
    title: string;
    tools: ToolItem[];
}