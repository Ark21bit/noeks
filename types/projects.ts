import type { SEO } from ".";

export interface Project {
    title: string;
    description: string;
    year: string;
    previewImg: string;
    info: ProjectInfo;
    seo: SEO
}

export interface ProjectInfo {
    title: string;
    description: string;
    year: string;
    img: string;
}
