import { SanityAsset } from "@sanity/image-url/lib/types/types"

export interface AboutInterface {
    title: string
    selfie: SanityAsset
    introduction: string
    [k: string]: any
}