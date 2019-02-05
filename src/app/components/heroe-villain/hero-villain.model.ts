type HeroVillain = 'Hero' | 'Villain';

export interface IHeroVillain {
    name: string;
    desc: string;
    photo: string;
    since: any;
    type: HeroVillain;
}