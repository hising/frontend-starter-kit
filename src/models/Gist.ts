export interface GistJsonResponse {
    html_url: string;
    id: string;
    description: string;
}

export interface GistItem {
    id: string;
    name: string;
    clicked: boolean;
    url: string;
}
