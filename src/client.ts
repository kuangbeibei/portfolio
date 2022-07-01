import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from "@sanity/image-url/lib/types/types"

export const client = sanityClient({
    projectId: 'szuzg21v',
    dataset: 'production',
    apiVersion: '2022-06-27',
    useCdn: true,
    token: process.env.REACT_APP_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: SanityImageSource) => builder.image(source);