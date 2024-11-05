export interface iAnime {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  year: number;
  watched: boolean;
  genres: string[];
  authorId: number;
  author?: string;
}
