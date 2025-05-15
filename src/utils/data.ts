interface Project {
    id: number;
    img: string;
    description: string;
    tag: string;
    date: string;
    color: string;
    genre: string;
}

export const projects: Project[] = [
    {
        id: 1,
        img: '/images/image1.webp',
        description: 'A delicate white flower with a glowing yellow-orange center, set against a soft blue gradient background. The petals are gently illuminated by the morning light, highlighting the intricate details and natural beauty of the bloom. This image evokes a sense of calm and simplicity, celebrating the elegance found in nature.',
        tag: 'Flower, soft, simple, beautiful',
        date: 'May 13, 2024',
        color: 'White, blue',
        genre: 'Flower image'
    },
    {
        id: 2,
        img: '/images/image2.webp',
        description: 'A striking silhouette of a woman wearing round sunglasses and a loose bun, set against a teal gradient background. The modern, minimalistic vibe is enhanced by the interplay of light and shadow, capturing both mystery and confidence in her pose. This portrait explores individuality and style in a contemporary setting.',
        tag: 'Human, dark, silhouette, sunglasses',
        date: 'Jan 3, 2025',
        color: 'Blue',
        genre: 'Human image'
    },
    {
        id: 3,
        img: '/images/image3.webp',
        description: 'A minimalist green hallway bathed in soft light and shadows, leading to a doorway where a figure in a flowing dress walks into a dimly lit room. The composition draws the viewer’s eye toward the mysterious exit, creating a sense of anticipation and narrative within the architectural space.',
        tag: 'Human, dark, room, door',
        date: 'Feb 24, 2025',
        color: 'White, green, black',
        genre: 'Room image'
    },
    {
        id: 4,
        img: '/images/image4.webp',
        description: 'A sleek, antique car is parked in a minimalist setting, its polished surface reflecting subtle highlights. The image showcases the timeless design and elegance of classic automobiles, inviting viewers to appreciate the craftsmanship and history behind this vintage vehicle.',
        tag: 'car, antique, elegant',
        date: 'Jan 1, 2025',
        color: 'Brown, white',
        genre: 'Car image'
    },
    {
        id: 5,
        img: '/images/image5.webp',
        description: 'A beautiful flower with a soft, glowing center is set against an ambient background that enhances its natural beauty. The gentle gradients and warm tones create a dreamy atmosphere, emphasizing the delicate structure and vibrant color of the petals.',
        tag: 'flower, simple, beautiful',
        date: 'Nov 21, 2023',
        color: 'Orange',
        genre: 'Flower image'
    },
    {
        id: 6,
        img: '/images/image6.webp',
        description: 'A dramatic silhouette of a woman stands out against a dark background, with soft light and shadows adding depth and intrigue. The composition highlights the contours and posture of the figure, evoking emotion and storytelling through minimal visual elements.',
        tag: 'dark, silhouette, human',
        date: 'oct 6, 2024',
        color: 'Black, purple',
        genre: 'Human image'
    },
    {
        id: 7,
        img: '/images/image8.webp',
        description: 'A minimalist perfume bottle with a white cap and clear glass design is set against a dark, starry background. The sleek, modern look is accentuated by subtle reflections and highlights, making the product appear both luxurious and sophisticated.',
        tag: 'glass, bottle, perfume',
        date: 'sep 22, 2024',
        color: 'White, dark grey',
        genre: 'Perfume image'
    },
];