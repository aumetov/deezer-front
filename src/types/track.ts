export interface Contributor {
    id: number;
    name: string;
    type: string;
    role: string;
}

export interface Album {
    id: number;
    cover: string;
    cover_small: string;
}

export interface TrackModel {
    id: number;
    title: string;
    title_short: string;
    album: Album;
    contributors: Contributor[];
    duration: number;
    type: string;
}