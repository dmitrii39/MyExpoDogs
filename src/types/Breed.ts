interface BreedImage {
    url: string;
    id: string;
}

export default interface Breed {
    breed_id: number;
    image: BreedImage;
    name: string;
}
