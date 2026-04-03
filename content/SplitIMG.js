import bg0 from '@/assets/fopo.jpg'
import bg1 from "@/assets/bg-mural.webp";
import bg2 from "@/assets/bg-sandcastles.webp";
import bg3 from "@/assets/bg-coffeez.webp";
import bg4 from "@/assets/bg-path.webp";
import mbg0 from '@/assets/bg-fopo-mobile.webp';
import mbg1 from "@/assets/bg-mural-mobile.webp";
import mbg2 from "@/assets/bg-sandcastles-mobile.webp";
import mbg3 from "@/assets/bg-coffeez-mobile.webp";
import mbg4 from "@/assets/bg-path-mobile.webp";

export const SplitIMG = [
    [bg1, mbg1],
    [bg2, mbg2],
    [bg3, mbg3],
    [bg4, mbg4],
];

export const ImageSets = [
    {
        'mobile': {
            'webp': mbg0,
        },
        'full': {
            'webp': bg0,
            'jpg': bg0,
        }
    },
    {
        'mobile': {
            'webp': mbg1,
        },
        'full': {
            'webp': bg1,
            'jpg': bg1,
        }
    },
    {
        'mobile': {
            'webp': mbg2,
        },
        'full': {
            'webp': bg2,
            'jpg': bg2,
        }
    },
    {
        'mobile': {
            'webp': mbg3,
        },
        'full': {
            'webp': bg3,
            'jpg': bg3,
        }
    },
    {
        'mobile': {
            'webp': mbg4,
        },
        'full': {
            'webp': bg4,
            'jpg': bg4,
        }
    }
];
